"use strict"

let str = "some";

let strObj = new String(str);

console.dir([1, 2, 3, 4])

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log("Hello!");
  }
};

const john = Object.create(soldier);

// const john = {
//   health: 100
// }

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

john.sayHello();