let userName = "shadow elite";
let number = "1234-4567-8901";

console.log(userName.length);
console.log(userName.charAt(0));

// first index
console.log(userName.indexOf("e"));

// last index
console.log(userName.lastIndexOf("e"));

number = number.replace(1234, "3333");
console.log(number);

number = number.replaceAll("-"," ");
console.log(number);


// slice 

let fname = "shadow elite";

let first = fname.slice(0,6);
let last = fname.slice(6);

console.log(first);
console.log(last);


// it is not usefull util we hard code so we can use indexOf(); 

last = fname.slice(fname.indexOf(" ")); // this will find postion of space and start reading all the letter and add in to 'last' named variable
console.log(last);

// method chaining

console.log(fname.toUpperCase().bold())


// formate currency
// Nice !
const amount = 1234.567;

console.log(amount.toLocaleString("en-US", {style: "currency", currency: "INR"}));
console.log(amount.toLocaleString("en-US", {style: "percent"}));
console.log(amount.toLocaleString("en-US", {style: "unit", unit: "celsius"}));
