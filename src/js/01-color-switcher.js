const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const background = document.querySelector("body");
let IntervalId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function ColorChange() {
    background.style.backgroundColor = getRandomHexColor();
};
btnStop.setAttribute("disabled", "disabled");
btnStart.addEventListener("click", () => {
    IntervalId = setInterval(ColorChange, 1000);
    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute("disabled");
}
);
btnStop.addEventListener("click", () => {
    clearInterval(IntervalId);
    btnStop.setAttribute("disabled", "disabled");
    btnStart.removeAttribute("disabled");
})