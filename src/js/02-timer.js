import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
Notiflix.Notify.init({position:'center-top'});

const btnStart = document.querySelector('button[data-start]');
const timer = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if ((selectedDates[0] - new Date()) < 0) { Notiflix.Notify.warning("Please choose a date in the future"); }
      else { 
          btnStart.removeAttribute("disabled");
         selectedDate = selectedDates[0];
      }
  },
};
const dateInput = flatpickr("#datetime-picker", options);
btnStart.setAttribute("disabled", "disabled");
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };

}

function addZero(number) {
    return String(number).padStart(2, 0);
    
}
function ChangeTimer() {
    const currentDate = convertMs(selectedDate - (new Date()));
    timer.days.textContent = addZero(currentDate.days);
    timer.hours.textContent = addZero(currentDate.hours);
    timer.minutes.textContent = addZero(currentDate.minutes);
    timer.seconds.textContent = addZero(currentDate.seconds);
    if ((selectedDate - new Date())<=1000)  clearInterval(timerId) ;
};
btnStart.addEventListener("click", () => {
    const timerId = setInterval(ChangeTimer, 1000);
    
})