let startEventBlock = document.querySelector(".start-event-block");
let endEventBlock = document.querySelector(".end-event-block");
let allDayBlockFirst = document.querySelector(".all-day-block:first-child");

$(".switch-btn").click(function() {
  $(this).toggleClass("switch-on");
  if ($(this).hasClass("switch-on")) {
    $(this).trigger("on.switch");
    startEventBlock.style.display = "none";
    endEventBlock.style.display = "none";
    allDayBlockFirst.style.borderBottom = "flex";
  } else {
    $(this).trigger("off.switch");
    startEventBlock.style.display = "flex";
    endEventBlock.style.display = "flex";
     allDayBlockFirst.style.borderBottom = "none";
  }
});
$(".switch-btn-video-conf").click(function() {
  $(this).toggleClass("switch-on-conf");
  if ($(this).hasClass("switch-on-conf")) {
    $(this).trigger("on.switch");
  
  } else {
    $(this).trigger("off.switch");  
  }
});
