import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      };
    }, delay);
  });
  return promise;
  
 
}
  
function OnSubmitbtn(evt) {
  evt.preventDefault();
let position = 1;
 let delay = Number(form.delay.value);
  const amount = Number(form.amount.value);
  const delayStep = Number(form.step.value);
  for (let i = 0; i < amount; i++){
    createPromise(position, delay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += delayStep;
    position ++;
  };
};

submitBtn.addEventListener("click", OnSubmitbtn);