/* 
 * Copyright 2022 Nino Škuflić <nino.skuflic@predavaci.algebra.hr>.
 */


// Stvaranje objekta uz new Object();
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);

myCar.color = "Blue";
console.log(myCar);

//Stvaranje objekt literal
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

// Pretvaranje JSON-a u objekt uz JSON.parse() metodu.
myJSON = '{"name":"John", "age":30, "car":null}';
myObject = JSON.parse(myJSON);

console.log(myObject);
console.log(myObject.age)

//Objekt literal - kako se radi objekt
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

// String interpolation primjer
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is $${phones.price}.`);

// JSON Stringify - odnosno pretvaranje objekta u JSON
const myPhonesObject = JSON.stringify(phones);
console.log(myPhonesObject);