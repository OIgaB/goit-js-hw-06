'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const itemsArray = [];

ingredients.forEach(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  itemsArray.push(itemEl);
});

listEl.append(...itemsArray);