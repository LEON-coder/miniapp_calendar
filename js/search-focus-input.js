let fileInput = document.querySelector(".search");
let isFocused = false;
let searchCancel = document.querySelector(".search__cancel");
let searchingBlock = document.querySelector(".searching-block");



searchingBlock.addEventListener("focus", () => {  
    fileInput.classList.toggle("search-area-compact");
    searchCancel.style.display = "flex";
});








