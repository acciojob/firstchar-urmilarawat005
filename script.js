function firstChar(text) {

	let stripped = text.trimStart();
	if(stripped){
		return stripped[0];
	}else{
		return '';
	}
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
