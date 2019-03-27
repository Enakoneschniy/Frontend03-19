'use strict';

const age = 18;

if(age >= 18) {
   console.log("можно продать пиво!");
   if(age >= 21) {
       console.log("можно продать водку!");
   }
} else {
    console.log("нельзя продать пиво и водку!");
}

if(age !== 18) {
    // code
}
const isAuth = false;

if(!isAuth) {
    // code
}

const isLog = 'test';

if(!!isLog) {
    // code
}

if(age === 18) {
    // code
} else if(age === 19) {
    // code
} else if(age === 20) {
    // code
} else {

}

if(age > 18 && age < 21) {
    console.log('нельзя продать водку, но можно опиво!');
}
if(age > 18 || age < 21) {
    console.log('нельзя продать водку и опиво!');
}
if(age > 18 && (age < 21 || age === 34)) {
    console.log('нельзя продать водку, но можно опиво!');
}

switch (age) {
    case 18:
        console.log('можно продать пиво!');
        break;
    case 19:
        console.log('можно продать пиво!');
        break;
    case 20:
        console.log('можно продать пиво!');
        break;
    default: console.log('default');
}

const message = age > 18 ? 'продаем алкоголь' : 'не продаем';

console.log(message);
let num = 0;
while(num < 10) {
    console.log(num++);
}

while (true) {
    const x = (Math.floor(Math.random() * 100));
    console.log(x);
    if( x < 50) {
       break;
    }
}
do {
    console.log(num++);
} while (num < 10);

for(let num = 0; num < 10; num++) {

}
for(let num = 0; num < 10; num++) {
    if(num % 2 === 0) {
        continue;
    }
    console.log(num);
}
console.log('-----------------------');

for(let a = 2; a < 10; a++) {
    for(let b = 2; b < 10; b++) {
        console.log(a * b);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.length = 0;
const numbersOld = new Array(10);
for(let i = 0; i < numbersOld.length; i++) {
    numbersOld[i] = 5;
}
console.log(numbers);
console.log(numbers[2]);
for(let index in numbers) {
    console.log(index, numbers[index]);
}
for(let elem of numbers) {
    console.log(elem);
}



