//const = a variable that can't be changed

//without const

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter The Radius Of Circle");
radius = Number(radius);

//pi value changed
pi = Number(3);

circumference = 2*radius*pi;

console.log("circumference is = ",circumference);

// prevent from changing value by using const


const pi1 = 3.14159;
let radius1;
let circumference1;


radius1 = window.prompt("Enter The Radius Of Circle");
radius1 = Number(radius1);

//pi value changed

pi = Number(6);

circumference1 = 2*radius1*pi1;

console.log("circumference is = ",circumference1);

