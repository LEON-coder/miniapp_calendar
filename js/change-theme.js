let toggle = document.getElementById('toggleDark');
let mainSectionBody = document.querySelector(".main__section-body");

toggle.addEventListener('click', function () {
  this.classList.toggle("dark-theme");
  if (this.classList.toggle("light-theme")) {
    mainSectionBody.style.background = 'white';
    mainSectionBody.style.color = "black";
    mainSectionBody.style.transition = "2s";
  } else {
    mainSectionBody.style.background = 'black';
    mainSectionBody.style.color = "white";
    mainSectionBody.style.transition = "2s";
  }
})


