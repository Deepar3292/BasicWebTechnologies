

function Enable() {

	var button1 = document.getElementById('btn1');		
	var button2 = document.getElementById('btn2');
	var text1 = document.getElementById('txt1');
	var text2 = document.getElementById('txt2');
	//console.log(button1);
	//console.log(button2);
	
	//console.log(text1);
	//console.log(text2);
	
	if (button1.checked) {					// if 1st radio button is checked 
		if (text1.disabled == true) {		
			text1.disabled = false;
		}
		text2.disabled = true;				// disabled the second text box
	}
	
	else if (button2.checked) {				// if 2nd radio button is checked
		if (text2.disabled == true) {
			text2.disabled = false;
		}
		text1.disabled = true;				// disable the first text box
		
	}

}
	
function MutualExclusive(radio) {

	var div = document.getElementById('dv');
	var input = div.getElementsByTagName('input'); 		// get all the input tags belonging to div tag
	console.log(radio);
	console.log(input[3]);

	
	for (i = 0; i < input.length; i++) {
	
		if (input[i].type == "radio") {				   // loop through the input tags to check for the type "radio"
			if (input[i] != radio)					   // access all radio tags except the current radio tag
				input[i].checked = false;			   // set all other radio tags to false 
				
		}
	}
	
	Enable();    // call the function enable
} 