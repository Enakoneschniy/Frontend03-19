(function () {
    //'use strict';
    const job = 'Designer';
    const obj = {
        job,
        age: 48,
        email: 'vasya@gmail.com',
        log() {

        }
    };
    const PROP = 'someProp';
    const test = {
        userName: 'Petya',
        [PROP]: 'this is property',
        ...obj
    };
    test.gender = 'male';
    console.log('TEST', test);

    console.log(obj);

    const messages = [
        {
            country: 'Ukraine',
            message: 'sdfdgd'
        },
        {
            country: 'France',
            message: 'fjkgg',
            user: {
                firstName: 'Petya',
                lastName: 'Pupkin'
            }
        },
        {
            country: 'France',
            message: 'lkjdgsfs'
        }
    ];

    const json = JSON.stringify(messages);
    console.log(json);
    console.log(JSON.parse(json));
    const countries = {};

    for (let message of messages) {
        if (!countries.hasOwnProperty(message.country)) {
            countries[message.country] = [];
        }
        countries[message.country].push(message.message);
    }
    console.log(countries);
    console.log(Object.keys(countries));
    console.log(Object.values(countries));

    for (let country in countries) {
        if(countries.hasOwnProperty(country)) {
            console.log(country, countries[country].length);
        }
    }
    const [a, b] = [1, 2];
    const { prop1, ...other } = {
        prop2: 'eee',
        prop1: 'aaa',
        prop3: 'jjjjj',
        prop4: 'hhhh',
    };
    console.log('PROP1', prop1);
    console.log('OTHER', other);

    function foo({ a, b }) {
        const sum = a + b;
        const mult = a * b;
        return { sum, mult };
    }
    const testObj = {
        a: 10,
        b: 15,
        c: 36
    };
    const { sum, mult } = foo(testObj);
    console.log(sum, mult);

    const { aa: { bb } } = {
        aa: {
            bb: 'ddd'
        }
    };
    console.log(bb);

    const user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        friends: [1, 2, 3],
        num: 4,
        fullName() {
            function baz() {
                console.log(this);
            }
            baz.apply(this);
            baz.bind(this)();
            this.friends.map( (item) => {
                return item * this.num;
            });
            // user.firstName + ' ' + user.lastName
            return `${this.firstName} ${this.lastName}`;
        }
    };
    console.log(user.fullName());

    function bar() {
        console.log(this);
    }
    bar();
})();










