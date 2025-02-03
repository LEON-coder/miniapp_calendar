let modalWindow = document.querySelector(".modal-window-frame");
let recordSavedClose = document.getElementById("close-modal-window");

recordSavedClose.addEventListener("click", function() {
  modalWindow.style.display = "none";
});
