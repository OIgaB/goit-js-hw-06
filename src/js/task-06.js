'use strict';

const inputEl = document.querySelector('#validation-input');
const properInputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (event) => {
    if (event.target.value.length >= 1 && event.target.value.length < properInputLength) {
        event.target.classList.add("invalid");
        event.target.classList.remove("valid");
        return;
    } else if (event.target.value.length >= properInputLength) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
    }
});