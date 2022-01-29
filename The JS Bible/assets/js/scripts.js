/* 
 * Copyright 2022 Nino Škuflić <nino.skuflic@predavaci.algebra.hr>.  
 */

/*----------------------------------------------------------------------------* 
 * TABLE OF CONTENTS
 * - Data Types & Operators
 * - Varibale Scope & Functions
 * - Arrays
 * - Objects
 * - Converting JSON into an object
 * - Converting an object into a JSON
 * - String interpolation
 * - Prototypes
 * - Rest operator
 * - Spread operator
 * - Windows methods
 * - Regular Expressions (RegExp)
 * - Matrix
 * - For loop
 * - Do while loop
 * - Event listeners
 * - DOM Manipulation
 *----------------------------------------------------------------------------*/

/*
 * DATA TYPES & OPERATORS -----------------------------------------------------
 */

var a = 6;
var b = '5';
console.log(typeof (a));


// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log((a * b).toFixed(2)); // Convert a number to string, keeping only two decimals
console.log(a / b);
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6);

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log("" == 0); // Falsy values
console.log("" == 0);

// LOGICAL
console.log((5 < 6) && (6 == 6));
console.log((5 < 6) || (6 == 6));
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(a == b ? "This is equal!" : "This is not equal!");


/*
 * ARRAYS ----------------------------------------------------------------------
 */

// Creating an array
// var array1 = new Array("cat", "bee", "ant eater");
var array1 = ["Plate", "Knife", "Glass"];

// Creating an associative array
var array2 = [];
array2["1"] = "Plate";
array2["2"] = "Knife";
array2["3"] = "Glass";

// FOR LOOP
for (var i = 0; i < array1.length; i++) {
    console.log("Contents of this Array: " + array1[i]);
}

/*
 * OBJECTS ----------------------------------------------------------------------
 */

// Creating an object by using the new Object() method
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);

myCar.color = "Blue";
console.log(myCar);

// Creating an object by using object literal
const person = {
    firstName: "Nino",
    lastName: "Škuflić",
    id: 115648972,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

// Converting JSON into an object
myJSON = '{"name":"Nino", "age":24, "car":null}';
myObject = JSON.parse(myJSON);

console.log(myObject);
console.log(myObject.age);

// Another object example
const phones = {
    brand: {
        manufacturer: "Apple",
        model: "iPhone 13 Pro"
    },
    color: ["Sierra Blue", "Silver", "Gold", "White"],
    price: 999,
    dispaly: "6.1-inch display",
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return "in stock";
        } else {
            return "out of stock";
        }
    }
};

console.log(phones.brand.model);
console.log(phones.checkStock());

// Converting an object into a JSON
const myPhonesObject = JSON.stringify(phones);
console.log(myPhonesObject);


/*
 * STRING INTERPOLATION ----------------------------------------------------------------------
 */
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is $${phones.price}.`);



/*
 * PROTOTYPES ----------------------------------------------------------------------
 */

// Constructor Function
function Person() {
    this.name = 'Nino',
        this.age = 24
}

// Creating a new person object from Person() constructor
const person1 = new Person();
const person2 = new Person();

// Checking the prototype value
console.log(Person.prototype); // { ... }

// Adding property to constructor function
Person.prototype.gender = 'male';

// Prototype value of Person
console.log(Person.prototype);

// Inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// Adding a method to the constructor function
Person.prototype.greet = function () {
    console.log(`Hello' ${this.name}`);
};

person1.greet(); // Hello Nino
person2.greet(); // Hello Nino

// Accessing prototype property (DEPRECATED)
console.log(person.__proto__); // { age: 24 }


/*
 * REST OPERATOR ----------------------------------------------------------------------
 */

function showNames(...names) {
    console.log(names);
}

const x = ["John", "Jane", "Doe", "Smith", "Jack"];
showNames(x);


function myFunction(a, b, ...c) {
    console.log("A", a);
    console.log("B", b);
    console.log("C", c);
}

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

/*
 * SPREAD OPERATOR ----------------------------------------------------------------------
 */

const arrayValues = ["My", "name", "is", "Nino"];
console.log(arrayValues); // [ 'My', 'name', 'is', 'Nino' ]

// console.log(...arrayValues) is the same as console.log("My", "name", "is", "Nino")

console.log(...arrayValues); // My name is Nino

const array3 = ["Nino", "Škuflić"];
const array4 = [...array3, "works", "at", "IBM iX & Algebra"];

console.log(array3); // ["Nino", "Škuflić, "works", "at", "IBM iX & Algebra"]
console.log(array4[0]); // Nino should be shown on position 0


/*
 * WINDOW METHODS ----------------------------------------------------------------------
 */

window.open();
// window.close();
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.hostname);

/* The following code is also commented out because it is simply annoying. Feel free to uncomment it if you need it!

window.location = 'https://www.example.com'; > This is commented out, otherwise our index.html would end up on example.com!
window.alert("Hello! I am an alert box!");
console.log("Return from confirm: " + window.confirm('Do you like JavaScript?'));
console.log("Return from prompt: " + window.prompt('Please enter your name', 'Nino Škuflić')); */


/*
 * REGULAR EXPRESIONS (REGEXP)--------------------------------------------------------------
 */

var input = 1; // Imagine that this is some input inputted by a user
var regex = new RegExp('[0-9]'); // By using RegExp [0-9] we are allowing the user only to input the numbers from 0 to 9
console.log(regex.test(input)); // Test if our input will pass the validation. Try changing the value of input variable to "a" instead of 1


/*
 * MATRIX --------------------------------------------------------------
 */

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);

console.log(activities[0][0]);
activities.push(['Study', 2]);
console.table(activities);

activities.forEach(element => console.log(element));


/*
 * FOR LOOP --------------------------------------------------------------
 */

const array5 = ["Volvo", "BMW", "Audi", "Toyota"];

for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
};

/*
 * DO WHILE LOOP-----------------------------------------------------------
 */

let result = '';
let j = 0;

do {
    j = j + 1;
    result = result + j;
} while (j < 5);

console.log(result);

/*
 * EVENT LISTENERS -----------------------------------------------------------
 */

document.getElementById("button-1").addEventListener("click", myButtonFunction);

function myButtonFunction() {
    document.getElementById("paragraph-1").innerHTML = "You have clicked the button. Why?";
}


var dancingPanda = document.getElementsByClassName("panda-dancing")[0];
dancingPanda.addEventListener("mouseenter", pandaDancing);

function pandaDancing() {
    document.getElementById("whoops").innerHTML = "Whoops. It escaped!";
    dancingPanda.style.position = 'absolute';
    dancingPanda.style.right = '0px';
}

/*
 * DOM MANIPULATION -----------------------------------------------------------
 */

document.getElementsByClassName("footer-text")[0].innerHTML = `&copy; ${new Date().getFullYear()} Nino Škuflić - All rights reserved.<br>The width of your screen is ${window.innerWidth}px, and the height is ${window.innerHeight}px.<br> Oh, and by the way - today is ${Date()}.`;