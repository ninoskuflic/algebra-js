/*
Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated 
as the root of the document object model. You can access it as window.

window.screen or just screen is a small information object about physical screen dimensions.
window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.

Since window is the global object, you can reference any properties of it with just the property name - so you do not have 
to write down window. - it will be figured out by the runtime.
*/

//Objekti
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

//Metode u objektu

/* VAŽNA NAPOMENA O THIS KEYWORD
In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.
In other words, this.firstName means the firstName property of this object.
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

person.fullName();

// Pretvaranje JSON-a u objekt
myJSON = '{"name":"John", "age":30, "car":null}';
myObj = JSON.parse(myJSON);
console.log(myObj)
console.log(myObj.age)

// Primjer 2
const car = {type:"Fiat", model:"500", color:"white"};

// Primjer 3
var phones = {
  brand: {
      manufacturer: "Apple",
      model: "iPhone 13 Pro",
  },
  color: ["Sierra Blue", "Silver", "Gold", "Graphite"],
  price: 999,
  display: "6.1-inch display",
  qty: 184,
  checkStock: function(){
      if(this.qty > 0){
          return "in stock"; 
      }else{
          return "out of stock"; 
      }
  }
};

const myJSONObject = JSON.stringify(phones);
console.log(myJSONObject);

// console.log(phones.brand.model);
// console.log(phones.checkStock());

// String interpolation > is replacing placeholders with values in a string literal.
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is ${phones.price}.`);

myPhonesObj = JSON.parse(phones);
console.log(myPhonesObj);

// Dati za pomoć ako ne znaju kako loopati kroz objekt: https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object

//Funkcije - matematika
function mojaFunkcija(param1, param2) {
  return param1 * param2;
}

console.log(mojaFunkcija(5, 4));

//Funkcije - prompt
function hello(){
    var name = window.prompt("Hi, how should I call you? ");
    alert("Hello, " + name + " nice to meet you!");
}

hello();


var input = window.prompt("Enter degrees in farenheint");

function toCelsius() {
  return (5/9) * (input-32);
}

alert(input + " degrees fahrenheit equls to " + toCelsius().toFixed(1) + " degrees celsius.");


//Nizovi
const phones2 = ["Samsung Galaxy 21", "iPhone 13 Pro", "Sony Xperia Z"];
console.log(phones2[1])
phones.push("iPhone 12 Pro Max", "Samsung Galaxy A52");

console.log(phones2)
console.log("The phone you have selected is: " + phones2[4])

phones.forEach(element => console.log(element));


let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
];

console.table(activities);

console.log(activities[0][0]);
activities.push(['Study',2]);
console.table(activities);

activities.forEach(element => console.log(element));

// DOM MANIPULACIJA - Primjeri

/*
Window metode i objekt: https://www.w3schools.com/jsref/obj_window.asp
Window.location: https://developer.mozilla.org/en-US/docs/Web/API/Window/location

Na koliko redaka koda se pokreće Facebook?

589 tisuća
62 milijuna
112 tisuća
90 milijuna

*/

window.open();
window.close();
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.hostname);

window.location = 'www.google.com';

//window methods
window.alert("Hello! I am an alert box!");
console.log("Return from confirm: " + window.confirm('Do you like JS?'));
console.log("Return from prompt: " + window.prompt('Please enter your name', 'Nino Škuflić'));


// RegExp

// Replace: example 1
var text = "Dobro došli u JavaScript predavanja. Algebra."; 
var n = text.search(/JavaScript/i);

// console.log(n);

// var result = text.replace(/Algebra/i, "MicroSoft");
// console.log(result);

// Validation: example 2
var input = 1; // Zamislimo da je ovo ovdje, nekakav input koji je korisnik unio u nekakav kontakt obrazac
var regex = new RegExp('[0-9]'); // [0-9] dozvoljavamo samo brojeve od 0 do 9
console.log(regex.test(input)); // Testiramo da li naš input, prolazi RegEx provjeru