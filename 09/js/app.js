//(function () {
'use strict';

/**
 * User
 * @param name  {string}
 * @param email
 * @constructor
 */
function User(name, email) {
    let age = 19;
    this.name = name;
    this.email = email;
    /**
     *
     * @returns {number}
     */
    this.getAge = function () {
        return age;
    };
    this.setAge = function (value) {
        if (value > 0) {
            age = value;
        } else {
            console.error('age should be positive!');
        }
    };
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}. ${age}`);
    };
    const interval = setInterval(function () {
        age++;
        if (age === 30) {
            clearInterval(interval);
        }
    }, 2000);
}

const user = new User('Petya', 'petya@gmail.com');
console.log(user);
console.log(user.getAge());
user.sayHello();

function Human(name, age) {
    this.name = name;
    this.age = age;
    this._gender = null;
}
Human.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`);
};
const vasya = new Human('Vasya', 93);
console.log(vasya);
vasya.sayHello();

function Man(name, age, country) {
    Human.apply(this, arguments);
    this._gender = 'male';
    this.country = country;
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.walk = function () {
  console.log('Walk');
};
const man = new Man('Genry', 55, 'Ukraine');
console.log(man);
man.sayHello();
man.walk();

class SomeHuman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._gender = null;
    }
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

class SomeMan extends SomeHuman {
    constructor(name, age, country) {
        super(name, age);
        this._gender = 'male';
        this.country = country;
    }
    get gender () {
        return this._gender;
    }
    set gender (value) {
        this._gender = value;
    }
    walk() {
        console.log('Walk');
    }
}
const someMan = new SomeMan('Kolya', 44, 'Ukraine');

console.log(someMan.gender);
someMan.gender = 'dd';
//})();










