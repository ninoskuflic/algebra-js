/* 
 * Copyright 2022 Nino Škuflić <nino.skuflic@predavaci.algebra.hr>.
 */

window.open();
window.close();
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.hostname);

window.location = 'www.google.com';

// Window Methods
window.alert("Hello! I am an alert box!");
console.log("Returned from confirm: " + window.confirm('Do you like JavaScript?'));
console.log("Returned from prompt: " + window.prompt('Please enter your name', 'Nino Škuflić'));