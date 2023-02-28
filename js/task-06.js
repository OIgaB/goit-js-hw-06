'use strict';

const inputEl = document.querySelector('#validation-input');
const properInputLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => {
    event.target.classList.add("invalid");
    if (event.target.value.length === properInputLength) {
        event.target.classList.replace("invalid", "valid");
    }
});
