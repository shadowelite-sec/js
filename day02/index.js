//Accept user inputs

//Easy

let username = window.prompt("Type Username");

console.log(username);

// Hard

let username2;

document.getElementById("mbutton").onclick = function(){

	username2 = document.getElementById("mtext").value;
	console.log(username2);
	window.alert(username2);
	document.getElementById("name").innerHTML = "Name Changed";
}
