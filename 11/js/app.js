'use strict';
const a = 4;

const h1 = document.createElement('h1');
h1.innerText = 'Hello world';
document.body.appendChild(h1);

const app = document.getElementById('app');
const app1 = document.querySelector('#app p');

const btn = document.getElementById('btn');
const link = document.getElementById('link');

btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.stopPropagation()
});
link.addEventListener('click', (event) => {
    console.log('LINK', event.target);
    event.preventDefault();
    event.stopPropagation()
});

document.body.addEventListener('click', (event) => {
    console.log('BODY', event.target);
});






