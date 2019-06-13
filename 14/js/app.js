'use strict';

fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
    .then(response => response.json())
    .then(json => console.log(json))


