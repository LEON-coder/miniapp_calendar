let switchBtnOn = document.querySelector(".slider::before");
let indicateDate = document.querySelector(".indicate-date");
let indicates = document.querySelector(".indicates");
let sectionCalendar = document.querySelector(".section-calendar-open");

indicateDate.addEventListener("focus", function() {
  if (indicateDate.focus) {
    sectionCalendar.style.display = "flex";
  } else {
    sectionCalendar.style.display = "none";
  }
});
