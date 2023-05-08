const editBtn = document.querySelector(".btn-edit");
const styleBtn = document.querySelector(".btn-style");
const addBtn = document.querySelector(".btn-add");
const saveBtn = document.querySelector(".btn-save");
const editBlock = document.querySelector(".edit-block");
const topBlock = document.querySelector(".top-block");
const fontFamily = document.querySelector("#fontFamily");
const colorText = document.querySelector(".color-text");
const colorBg = document.querySelector(".color-bg");
const btnTextColor = document.querySelector(".btn-text-color");
const btnBgColor = document.querySelector(".btn-bg-color");
const styleBlock = document.querySelector(".style-block");
const editArea = document.querySelector(".edit-area");

editBtn.addEventListener("click", (e) => {
  editBlock.style.display = "block";
  styleBlock.style.display = "none";
});
styleBtn.addEventListener("click", (e) => {
  editBlock.style.display = "none";
  styleBlock.style.display = "block";
});
function fontSize() {
  topBlock.style.fontSize = event.target.value;
}

fontFamily.onchange = function (e) {
  topBlock.style.fontFamily = e.target.value;
};

let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "black",
  "white",
  "deeppink",
];
for (let index = 0; index < colorText.children.length; index++) {
  colorText.children[index].style.backgroundColor = colors[index];
  colorText.children[index].onclick = function () {
    topBlock.style.color = this.style.backgroundColor;

    colorText.classList.add("hide");
  };
}

btnTextColor.onclick = function () {
  colorText.classList.remove("hide");
};

for (let index = 0; index < colorBg.children.length; index++) {
  colorBg.children[index].style.backgroundColor = colors[index];
  colorBg.children[index].onclick = function () {
    topBlock.style.backgroundColor = this.style.backgroundColor;

    colorBg.classList.add("hide");
  };
}
btnBgColor.onclick = function () {
  colorBg.classList.remove("hide");
};

addBtn.onclick = function () {
  topBlock.innerHTML = editArea.value;
};
