'use strict';

const inputEl = document.querySelector('#font-size-control');
const wordEl = document.querySelector('#text');

inputEl.addEventListener('input', (event) => {
    wordEl.style.fontSize = `${event.currentTarget.value}px`;
});