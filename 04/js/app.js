(function () {
    'use strict';
    function foo() {
        return [1, 3];
    }

    const [a, b] = foo();

    const bar = function () {
        return 'Hello!';
    };

    let bar1 = function test () {
        //test();
        return 'Hello!';
    };

    let bar2 = bar1;
    bar1 = null;
    bar2();

    const func1 = a => {
        const b =  a + 2;
        return b + 4;
    };

    console.log(func1(2, 3));

    function testCb(a, b, callback) {
        callback(a + b, [2, 3]);
    }

    testCb(2, 6, function (res, arr) {
        console.log(res);
    });

    let array = [1, 3, 34, 54, 65, 4, 6, 7];

    const newArray = array.filter(item => item % 2 === 0);

    array.forEach((item, index) => {
        console.log(item);
        console.log(index);
    });
    function pow2(num) {
        return Math.pow(num, 2);
    }
    array = array.map(item => Math.pow(item, 2));
    array = array.map(pow2);
    console.log('--------------------');
    function generator(start = 1, step = 1) {
        let counter = start;
        return function () {
            //f();
            return counter += step;
        };
        /*    function f() {
                console.log(counter);
            }*/
    }
    const gen = generator(2, 3);
    console.log(gen());
    console.log(gen());
    console.log(gen());
    console.log(gen());

    function* generator1() {
        let counter = 1;
        //while (true) {
        const x = yield ++counter;
        const y = yield counter + x;
        yield counter - y + x;
        //}
    }

    const gen1 = generator1();
    console.log('--------------');
    console.log(gen1.next().value);
    console.log(gen1.next(4).value);
    console.log(gen1.next(10).value);


    function factorial(n) {
        if(n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    console.log(factorial(5));

    const nums = [1, 2, 3, 4, 5];
    const sum = nums.reduce((acc, item) => acc * item, 1);
    //array.map(item => ({ value: item }));
/*
1. Напишите функцию, которая создаёт комбинацию
двух списков таким образом:

[1, 2, 3] (+) [11, 22, 33] -> [1, 11, 2, 22, 3, 33]


2. У вас есть девять цифр: 1, 2, …, 9. Именно в таком порядке.
Вы можете вставлять между ними знаки «+», «-» или ничего.
У вас будут получаться выражения вида 123+45-6+7+89.
Найдите все из них, которые равны 100.
 */
})();
