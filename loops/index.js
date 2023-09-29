//let name;

//while(name == "" || name == null){
//	name = window.prompt("Enter your name: ");
//}
//console.log(name);


// this one will check prompt to enter name first then check condition

//do{
//	name = window.prompt("Enter Your Name: ");
//} while(name == null);
//
//console.log(name);



// for loops 
//for(let i = 0;i<10+1;i++){
//	console.log(i);
//}

// you can use comtinue and break

// Nested loops 

// print pattern 

let row,col,sym;
do {
	row =  window.prompt("Enter The number of rows: ");
	col =  window.prompt("Enter The number of column: ");
	sym =  window.prompt("Enter The number of symbol: ");
} while(row == null || col == null || sym == null);

for(let i = 0;row>i;i++){
	for(let j = 0;col>j;j++){
		document.getElementById("pattern").innerHTML += "  " + sym;
	}

	document.getElementById("pattern").innerHTML += "<br>"
}
