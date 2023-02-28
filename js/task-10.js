'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls > input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxWrapperEl = document.querySelector("#boxes");

function createBoxes (amount) {
  for (let i = 0; i < amount; i += 1) {
    let size = 30;
    let newSize = size + i * 10;
    boxWrapperEl.insertAdjacentHTML("afterbegin", `<div class="data-box"></div>`);
    const box = document.querySelector('.data-box');
    box.style.cssText = `width: ${newSize}px ; height: ${newSize}px; background-color: ${getRandomHexColor()}`;
  };
  boxWrapperEl.style.cssText = 'display: flex; flex-direction: row-reverse; align-items: center';
};

createBtnEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
destroyBtnEl.addEventListener("click", () => {
  boxWrapperEl.innerHTML = '';
});
