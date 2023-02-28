'use strict';

const formEl = document.querySelector('.login-form');
const emailInputEl = formEl.firstElementChild.firstElementChild;
const passwordInputEl = formEl.firstElementChild.nextElementSibling.firstElementChild;
const btnEl = formEl.lastElementChild;

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
        const formData = {
        email,
        password,
    }
    console.log(formData);

    event.target.reset();
});

btnEl.addEventListener('click', (event) => {
    if (emailInputEl.value === '' || passwordInputEl.value === '') {
        alert('Усі поля повинні бути заповнені');
    }
});
