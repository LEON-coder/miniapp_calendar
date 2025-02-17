let searchArea = document.getElementById("search");
let searchCancel = document.querySelector(".search__cancel");
let searchingBlock = document.querySelector(".searching-block");
let searchCancelButton = document.querySelector(".search__cancel");
let searchClose = document.querySelector(".search_close-icon");
let inputBlockCommon = document.querySelector(".input-block-common");

// получение фокуса
function onfocus(e) {
  searchArea.style.width = "70%";
  inputBlockCommon.style.width = "90%";
  searchArea.style.transition = "1s";
  searchCancelButton.style.display = "flex";
  searchCancelButton.style.backgroun = "";
  searchClose.style.display = "flex";
  searchCancelButton.style.transition = "2s";
  inputBlockCommon.style.transition = "1s";
}
function onblur(e) {
  searchArea.style.width = "100%";
  searchCancelButton.style.display = "none";
  searchCancelButton.style.transition = "2s";
  inputBlockCommon.style.transition = "1s";
  searchArea.style.transition = "1s";
  inputBlockCommon.style.width = "100%";
}
searchArea.addEventListener("change", onchange);
searchArea.addEventListener("blur", onblur);
searchArea.addEventListener("focus", onfocus);

searchClose.addEventListener("click", function() {
  searchArea.style.width = "100%";
  searchCancelButton.style.display = "none";
});
