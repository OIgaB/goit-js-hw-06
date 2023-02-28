'use strict';

const categoryEls = document.querySelectorAll('.item');
const categoryTitles = document.querySelectorAll('h2');

console.log(`Number of categories: `, categoryEls.length);

categoryTitles.forEach(el => {
    console.log(`Category: `, el.textContent);
    console.log(`Elements: `, el.nextElementSibling.children.length);
})