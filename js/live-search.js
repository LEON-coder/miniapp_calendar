let liveBlock = document.querySelector(".liveBlock");
let liveInput = document.querySelector(".liveInput");
let items = [
  "text 1",
  "some text 2",
  "live search",
  "Lui Lui",
  "Lui Lui",
  "Lui Lui",
  "Lui Lui",
  "Lui Lui"
];

updateList();

function updateList() {
  liveBlock.innerHTML = "";
  items.forEach(function (item) {
    liveBlock.innerHTML += `<li class="liveBlockItem">` + item + `</li>`;
  });
}