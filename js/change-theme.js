let toggle = document.getElementById("dark-mode");
let mainSectionBody = document.querySelector(".main__section-body");
let nameEvent = document.querySelector(".name-event");
let headlineApp = document.querySelector(".headline-app");
let swiperSlideActive = document.querySelector(".swiper-slide-active");
let contentEvent = document.querySelector(".content-event");
let memberName = document.querySelectorAll(".member-name");
let h3 = document.getElementsByTagName("h3");
let footer = document.getElementById("footer");
let input = document.getElementById("input[type='checkbox]");
let eventColor = document.querySelector(".event-color");
let span = document.getElementsByTagName("span");
let darkTheme = document.querySelector(".dark-theme");
let sectionMembersEvent = document.querySelectorAll(".section-members-event");

toggle.addEventListener("click", function() {
  mainSectionBody.classList.toggle("dark-theme");
  headlineApp.classList.toggle("light-them-color-text");
  h3.classList.toggle("dark-theme-color-text");

  for (let i = 0; i <= memberName.length; i++) {
    h3[i].style.color = "white";
  }
});
