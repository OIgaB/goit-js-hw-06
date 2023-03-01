'use strict';

const inputEl = document.querySelector('#name-input');
const titleNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    titleNameEl.textContent = event.target.value;
    if (event.target.value === '') {
        titleNameEl.textContent = 'Anonymous';
    }   
});