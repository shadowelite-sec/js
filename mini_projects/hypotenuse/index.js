// Find Hypotenuse Of Right Angle Trangle 

/*
Formula 
_______

c = √ a^2 + b^2
*/

/*
let a = Number(window.prompt("Enter side A "));
let b = Number(window.prompt("Enter side B "));

let c = Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

window.alert("The side c (Hypotenuse) is " + c);
*/

document.getElementById("button").onclick = function(){
	let a = Number(document.getElementById("aside").value);
	let b = Number(document.getElementById("bside").value);
	
	let c = Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

	document.getElementById("cside").innerHTML = 'SIDE C : ' + c;

}
