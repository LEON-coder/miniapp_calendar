
let allDayBlock = document.querySelector(".all-day-block");
let startEventBlock = document.querySelector(".start-event-block");
let endEventBlock = document.querySelector(".end-event-block");
let slider = document.getElementById(
  "toggle-switch-all-day input[type='checkbox']:checked"
);

slider.addEventListener("click", function() {
  startEventBlock.classList.toggle("switch-off");
  endEventBlock.classList.toggle("switch-off");
});
