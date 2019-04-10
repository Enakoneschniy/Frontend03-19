(function () {
    'use strict';
    /*
    1 ... 100

    если число делится на 3
    то вывести 'Tri'
    если делится на 10 то вывести 'Ton'
    если делится на 3 и на 10 то
    вывести  'TriTon'
    Иначе просто вывести число.
     */
    let friends = [1, 2, 3, 4];

    const METHOD_NAME = 'test1';
    const obj = {
        friends,
        username: 'Petya',
        "user name": 'Petya',
        age: 48,
        [METHOD_NAME]() {
            console.log('THIS IS SPARTA!!!');
        },
        log() {

        },
    };
    const obj2 = {
        testMethod: obj.log(),
        ...obj
    };
    //obj.test1();
    obj[METHOD_NAME]();
    console.log(typeof obj.log);
    console.log(obj.age);
    console.log(obj["age"]);
    friends = [];
    obj.friends.push(234);
    obj.blabla = {
        nn: 'sdsds'
    };
    obj.blabla.ds = 'safg';
    console.log(obj);
    obj.age = 49;
    obj["age"] = 50;

    console.log(obj.age);
    console.log(obj["age"]);

    const key = 'username';
    console.log(obj[key]);

    const data = [
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
    const json = JSON.stringify(data);
    console.log(json);
    console.log(JSON.parse(json));
    const countries = {};

    for(let mess of data) {
        if(!countries.hasOwnProperty(mess.country)) {
            countries[mess.country] = [];
        }
        countries[mess.country].push(mess.message);
    }
    console.log(countries);
    console.log(Object.keys(countries));
    console.log(Object.values(countries));

    for (let key in countries)  {
        console.log(typeof countries[key]);
        console.log(key, countries[key].length);
    }



})();










