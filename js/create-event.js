
let indicateDate = document.querySelector(".indicate-date");
let Calendar = document.querySelector(".create-event__calendar_item");

indicateDate.addEventListener("click", function() {
  Calendar.classList.toggle("create-event__calendar_item--show");
});
