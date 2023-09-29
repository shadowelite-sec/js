document.getElementById("button").onclick = function(){
	if (document.getElementById("box").checked) {
		document.getElementById("label").innerHTML = "subscribed ☺️ " 
	} else {
		document.getElementById("label").innerHTML = "subscribe";
	}
}
