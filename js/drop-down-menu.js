let calendarDropIcon = document.querySelector(".calendar-drop-icon");
let dropDownMenu = document.querySelector(".drop-down-menu");

calendarDropIcon.addEventListener("click", function() {
  dropDownMenu.classList.toggle("drop-down-menu-active");
});
