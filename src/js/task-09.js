'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorValue = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', handleBtnClick);

function handleBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyEl.style.backgroundColor; 
}
