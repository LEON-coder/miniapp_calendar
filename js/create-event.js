let switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", function() {
  switchBtn.classlist.toggle("switch-on");
});

switchBtn.addEventListener("click", function() {
  switchBtn.toggleClass("switch-on");
  if (switchBtn.hasClass("switch-on")) {
    switchBtn.trigger("on.switch");
  } else {
    switchBtn.trigger("off.switch");
  }
});
