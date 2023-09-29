// global variable can be accessed by any function 
let word;

//function  declare
function hello(){
	console.log("Hello World");
	let name = "alan";
	//hi(name);
	// also use 
	hi("alan");
}


// here the nameComes is a separte function arg variable, 
	
function hi(nameComes){
	console.log(nameComes);
}
// Fn call;
hello();

let lth = window.prompt("Enter Length: ");
let wth = window.prompt("Enter Width: ");

function Getarea(l, b){
	let area = l * b;
	return area;
}

let area = Getarea(lth, wth);
window.alert(area);
