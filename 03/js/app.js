'use strict';
let x = 400;
const a = parseFloat(prompt('A'));
const b = parseFloat(prompt('B'));

if (a > b) {
    x = a + b / 2 * 4;
} else if (a < b) {
    x = a - b + 2 / b * 4;
}
alert(x);

const array = [1, 2, 3, 4, 5, 6, 7];

array.push(44);
const lastEl = array.pop();
const firstEl = array.shift();
array.unshift(3);

const partArray = array.slice(2);
const newArray = array.slice();

array.splice(4, 2, 'fd');
const index = array.indexOf(3);
const lastIndex = array.lastIndexOf(5);
array.includes(5);
array.concat([2, 3, 4], [5, 6, 7, 8], 444);

const [c, v, n, ...other] = [4, 5, 7, 55, 65, 75];//rest
console.log(c, v, n, ...other);//spread
const t = [2, 3, 4, 5];
const f = [1, 3, 4, 5, ...t];
console.log(f);
/*const c = 4;
const v = 5;
const n = 7;*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]);
    }
}

const test = [];
const size = 10;
for (let row = 0; row < size; row++) {
    test[row] = [];
    for (let col = 0; col < size; col++) {
        test[row][col] = (row + 1) * (col + 1);
        //size - row - 1
    }
}
console.log(test);


function getRandomArray(N = 10, M) {
    // M = M || 10;
    const randomArray = [];
    for (let index = 0; index < N; index++) {
        randomArray[index] = Math.floor(Math.random() * 100);
    }
    return randomArray;
}

const randomArray = getRandomArray();
const randomArray1 = getRandomArray(20);
console.log(randomArray);
console.log(randomArray1);

function sum(...args) {
    console.log(args);
}

sum(1, 2, 3, 4, 6);

function sum1([a, b, c]) {

}

sum1([1, 2, 3, 4, 5]);













