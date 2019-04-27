'use strict';

class Helper {
    static sum(a, b) {
        return a + b;
    }
}

Helper.sum(2, 3);

class HelperOne {
    static sum(a, b, c) {
        return a + b + c;
    }
}

HelperOne.sum(2, 3, 5);

// old code
function HelperTwo() {
}

// static method for old code
HelperTwo.sum = function (a, b) {
    return a + b;
};

console.log(HelperTwo.sum(1, 3));
const Person = (function () {
    const sym = Symbol('private property');

    class Person {
        constructor(name) {
            this.name = name;
            this[sym] = 'sd';
        }

        getPrivateProp() {
            return this[sym];
        }
    }

    return Person;
})();


const petya = new Person('Petya');
console.log(petya.getPrivateProp());
console.log(Reflect.ownKeys(petya));
console.log(Object.keys(petya));

/*Object.defineProperty(petya, 'age', {
    enumerable: false,
    value: 15
});
console.log(petya);
console.log(Object.keys(petya));
console.log(Reflect.ownKeys(petya));*/
console.log('---------------');
console.log(petya);
console.log(Reflect.ownKeys(petya));
console.log(Object.keys(petya));
console.log('---------------');

const sym = Symbol('private property');
class Person1 {
    constructor(name) {
        this.name = name;
        this[sym] = 'sd';
    }

    getPrivateProp() {
        return this[sym];
    }
}

const petya1 = new Person1('Petya');
const proxyPetya = new Proxy(petya1, {
    ownKeys(target) {
        const reportedKeys = [];
        const actualKeys = Reflect.ownKeys(target);

        for (const key of actualKeys) {
            if (key === sym) {
                continue;
            }
            reportedKeys.push(key);
        }

        return reportedKeys;
    },
    get(target, p, receiver) {
    },
    set(target, p, value, receiver) {
    }
});
console.log(proxyPetya);
console.log(Reflect.ownKeys(proxyPetya));
console.log(Object.keys(proxyPetya));

Array.prototype.sum = function () {
    return this.reduce((acc, item) => acc + item, 0);
};
Array.prototype.slice = function () {
    return this.reduce((acc, item) => acc + item, 0);
};
console.log([1, 2, 3, 4, 5].sum());
console.log([1, 2, 3, 4, 5].slice());
console.table([petya, petya]);

const set = new Set();
set.add(4);
set.add(5);
set.add(4);
function test() {
    console.log('TEST');
}
console.log(Array.from(set));
const map = new Map();
map.set(test, test);

map.get(test)();




