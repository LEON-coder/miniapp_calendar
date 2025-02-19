let toggle = document.getElementById("dark-mode");
let mainSectionBody = document.querySelector(".main__section-body");
let policyNameBody = document.querySelector(".policy-main-body");
let referenceBody = document.querySelector(".reference-body");
let nameEvent = document.querySelector(".name-event");
let headlineApp = document.querySelector(".headline-app");
let swiperSlideActive = document.querySelector(".swiper-slide-active");
let contentEvent = document.querySelector(".content-event");
let memberName = document.querySelectorAll(".member-name");
let h3 = document.getElementsByTagName("h3");
let nameHeadline = document.querySelectorAll(".name");
let input = document.getElementById("input[type='checkbox]");
let eventColor = document.querySelector(".event-color");
let headline = document.querySelector(".headline");
let span = document.getElementsByTagName("span");
let dayWeek = document.querySelector(".day-week");
let lightTheme = document.querySelector(".light-theme");
let advertisementText = document.querySelector(".advertisement-text");
let recordOption = document.querySelector(".record-option");
let sectionMembersEvent = document.querySelectorAll(".section-members-event");
let sectionAccountItem = document.querySelector(".settings__accounts_item");
let footer = document.getElementById("footer");

toggle.addEventListener("click", function() {
  if (!lightTheme) {
    mainSectionBody.classList.toggle("dark-theme");
    referenceBody.classList.toggle("dark-theme");
    policyNameBody.classList.toggle("dark-theme");
    headlineApp.classList.toggle("light-them-color-text");
    headline.classList.toggle("dark-text");
    recordOption.classList.toggle("record-option-dark");
    footer.classList.toggle("dark-theme");
    sectionAccountItem.classList.toggle("dark-text");
    swiperSlideActive.classList.toggle("dark-text");
    nameHeadline.classList.toggle("name-dark");
    dayWeek.classList.toggle("day-week-light");
    eventColor.classList.toggle("color-event-dark-active");
    advertisementText.style.color = "white";
    nameEvent.style.color = "black";
  } else {
    headline.classList.toggle("light-them-color-text");
    mainSectionBody.classList.toggle("light-theme");
  }
});
