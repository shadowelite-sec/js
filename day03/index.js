// Type Conversion 
//  Change The DataType of a value to another (String,nuber or booleans)


let age = window.prompt("How old are you");


console.log(typeof age);

// The value is now String what we need is convert The String data Type in To Number 

//method 1

age = Number(age);

console.log(typeof age);

age += 1;

console.log("Happy birthday you are", age, "year old Now!");


//Here Some Other Examples

let x;
let y;

x = Number("2.11");
y = String("9.11");

console.log(x, typeof x);
console.log(y, typeof y);

//Boolean 

let z;

z = Boolean("");
console.log(z, typeof z);

z = Boolean("Something");
console.log(z, typeof z);

//There For if The Boolean DataType is Empty then Its False Otherwise True;
//So we Can You This For IF ELSE Condisions
