/* 
In JavaScript, a prototype can be used to add properties and methods to a constructor function. 
And objects inherit properties and methods from a prototype. For example,
*/

// constructor function
function Person () {
  this.name = 'John',
  this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// adding a method to the constructor function
Person.prototype.greet = function() {
  console.log('hello' + ' ' +  this.name);
};

person1.greet(); // hello John
person2.greet(); // hello John

// accessing prototype property
console.log(person.__proto__);   // { age: 23 }