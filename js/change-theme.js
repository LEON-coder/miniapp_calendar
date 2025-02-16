let toggle = document.getElementById("dark-mode");
let mainSectionBody = document.querySelector(".main__section-body");
let nameEvent = document.querySelector(".name-event");
let headlineApp = document.querySelector(".headline-app");
let swiperSlideActive = document.querySelector(".swiper-slide-active");
let contentEvent = document.querySelector(".content-event");
let memberName = document.querySelectorAll(".member-name");
let h3 = document.getElementsByTagName("h3");
let input = document.getElementById("input[type='checkbox]");
let eventColor = document.querySelector(".event-color");
let span = document.getElementsByTagName("span");
let darkTheme = document.querySelector(".dark-theme");
let recordOption = document.querySelector(".record-option");
let sectionMembersEvent = document.querySelectorAll(".section-members-event");
let sectionAccountItem = document.querySelector(".settings__accounts_item");
let footer = document.getElementById("footer");

toggle.addEventListener("click", function() {
  if (!darkTheme) {
    mainSectionBody.classList.toggle("dark-theme");
    headlineApp.classList.toggle("light-them-color-text");
    recordOption.classList.toggle("record-option-dark");
    footer.classList.toggle("dark-theme");
    sectionAccountItem.classList.toggle("dark-text");
    swiperSlideActive.classList.toggle("dark-text");
  }
});
