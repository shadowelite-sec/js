let userIn = 0;

function toCelsius(val){
	let total = (val - 32)/1.8;
	return total;
}

function toFahren(val){
	let total = (val * 1.8)+32;
	return total;
}

document.getElementById("btn-1").onclick = function(){
	
	userIn = document.getElementById("value").value;

	if(document.getElementById("celsius").checked){
		let cel = toCelsius(userIn).toLocaleString("en-US", {style: "unit", unit: "celsius"});
		document.getElementById("convert").innerHTML = "Temperature to " + cel;

	} else if(document.getElementById("fahren").checked){
		let fah = toFahren(userIn).toLocaleString("en-US", {style: "unit", unit: "fahrenheit"});
		document.getElementById("convert").innerHTML = "Temperature to " + fah;
	}
}

