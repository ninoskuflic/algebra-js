// Spread operator
const arrayValues = ["My", "name", "is", "Nino"];
console.log(arrayValues); // [ 'My', 'name', 'is', 'Nino' ]

// console.log(...arrayValues) je isto što is console.log("My", "name", "is", "Nino")

console.log(...arrayValues); // My name is Nino

const array1 = ["Nino", "Škuflić"];
const array2 = [...array1, "radi", "u", "Algebri"];

console.log(array2); // ["Nino", "Škuflić, "radi", "u", "Algebri"]
console.log(array2[0]); // Nino bi trebao biti na poziciji 0 nakon što smo spojili array