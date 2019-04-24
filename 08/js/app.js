(function () {
    'use strict';
    const user = {
        firstName: "Вася",
        sayHi() {
            alert(this.firstName);
        }
    };

    const foo = user.sayHi.bind({
        firstName: 'Petya'
    });
    const bar = bind(user.sayHi, {
        firstName: 'Kolya'
    });
  /*  setTimeout(foo, 1000);

    setTimeout(function () {
        user.sayHi()
    }, 1000);*/
/*    foo();
    bar();*/

    function bind(func, context) {
        return function() { // (*)
            return func.apply(context, arguments);
        };
    }

    function baz(num, num1) {
        console.log(this, num, num1);
    }
    baz(4);
    const newBaz = bind(baz, 22);
    baz.apply(22, [4, 3]);
    baz.call(22, 4, 3);
    newBaz(4, 3);
    function f1() {
        console.log([].slice.apply(arguments));
    }
    f1(1, 2, 3, 4);
    const a = '3333';
    let str = `Hello ${a} world`;
    console.log(str[0]);
    // str[0] = 'K'; // ERROR
    str = `K${str.slice(1)}`;
    console.log(str, str.length);
    const str1 = 'Привет, привет';
    console.log(str1, str1.length);
    let s = str1.replace(/^[пт]$/ig, 'О');
    console.log(s);
    str = `Hello ${a} world. Hello`;
    const reg = RegExp(/ ([0-9]+) (w[a-z]+.)/g);
    console.log(reg.exec(str));
    console.log(/^[а-яА-Я, 0-9\-\/\\]{6, 20}$/g.test(str1));

    console.log(str.replace(/ ([0-9]+) (w[a-z]+)/g, ' $2 $1'));
})();










