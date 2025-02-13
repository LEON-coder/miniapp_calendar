let toggle = document.getElementById("dark-mode");
let mainSectionBody = document.querySelector(".main__section-body");
let nameEvent = document.querySelector(".name-event");
let headlineApp = document.querySelector(".headline-app");
let swiperSlideActive = document.querySelector(".swiper-slide-active");
let footer = document.querySelector(".footer");

toggle.addEventListener("click", function() {
  mainSectionBody.classList.toggle("dark-theme");
  if (this.classList.toggle("light-theme")) {
    mainSectionBody.style.background = "black";
    mainSectionBody.style.color = "white";
    mainSectionBody.style.transition = "2s";
    nameEvent.style.color = "white";
    headlineApp.style.color = "black";
    footer.style.background = "black";
  } else {
    mainSectionBody.style.background = "white";
    nameEvent.style.color = "black";
    mainSectionBody.style.transition = "2s";
    headlineApp.style.color = "white";
    swiperSlideActive.style.color = "white";
    footer.style.background = "";
  }
});


