// Rest operator

function ispisiImena(...imena){
    console.log(imena);
}

const x = ["John", "Jane", "Doe", "Smith", "Jack"];
ispisiImena(x);


function myFun(a, b, ...c){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}

myFun(1,2,3,4,5,6,7,8,9);