/* Below code takes a number from the user and calculates factorial of each number till the number specified by the user   
   and appends the value to the table cells and displays the result in the table
*/
var buttonClick = document.getElementById("btnClick");            // fetching the Html element/tag which has id btnClick i.e accessing the button "submit" and assigning to variable buttonClick
buttonClick.addEventListener('click',printFact,false);            // calling printFact function when the user clicks on the submit button
var resetInput = document.getElementById("reset");                // fetching the html button "submit" and assigning to variable resetInput
resetInput.addEventListener('click',clear,false);                 // calling clear function when user clicks on the reset button

function fact(n) {                                                // Recursive function to calculate factorial of each number
	if(n == 0)
	  return 1;
	return n * fact(n-1);
}
	
function clear() {
 document.getElementById("display").innerHTML = "";
 document.getElementById("input").value = "";
}

function validateInp() {                                          // Definition of validateInp function to test the user input for invalid values
 if(document.getElementById("input").value == "") {
    alert ("Please enter a number");
    return false;
 } else if (document.getElementById("input").value < 0) {
     alert ("Please enter a number which is greater than 0");
     return false;
 } else
     return true;
}
		
function printFact() {
  var val = document.getElementById("input").value; 
  if (validateInp()) {
   var tab = document.createElement("TABLE");
   tab.setAttribute("border","2");
   document.getElementById("display").appendChild(tab);
  
   for(m = 0; m <= val; m++) {
    var i = fact(m);
    var row = tab.insertRow(m);
    var col1 = row.insertCell(0);
    col1.innerHTML = m + "!";
    var col2 = row.insertCell(1);
    col2.innerHTML = i;
}
}
}

