let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let recordSavedClose = document.querySelector(".record-saved__close");
let modalWindowFrame = document.querySelector(".modal-window-frame");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours
    .toString()
    .padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  interval = setInterval(updateTime, 1000);
  startBtn.style.display = "none";
  stopBtn.style.display = "flex";
  stopBtn.style.transition = "1s";
  modalWindowFrame.classList.remove("modal-window-open");
  recordSavedClose.style.display = "none";
});

stopBtn.addEventListener("click", () => {
  setTimeout(() => {
    clearInterval(interval);
  });
  startBtn.style.display = "flex";
  stopBtn.style.display = "none";
  startBtn.style.transition = "1s";
  modalWindowFrame.classList.add("modal-window-open");
  recordSavedClose.style.display = "flex";
});

recordSavedClose.addEventListener("click", () => {
  modalWindowFrame.style.display = "none";
});

