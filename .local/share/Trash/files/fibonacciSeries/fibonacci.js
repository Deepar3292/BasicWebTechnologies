/* Code to generate fibonacci series and displaying the result in the table
   where the first column cells of the table holds serial numbers and second column cells holds fibonacci series
*/

var buttonClick = document.getElementById("btnClick");
var restInput = document.getElementById("reset");
buttonClick.addEventListener('click',printFibo,false);  // calling the function "printFibo" by registering the event when the user clicks on submit button
restInput.addEventListener('click',clear,false);        // calling the function "clear" by registering event when user clicks on Reset button

function calcFibo(n) {                                  // Defining a recursive function to calculate fibonacci series 
  if(n == 0)		                                    // Testing whether the input is 0
    return 0;                                           // and returning 0 if true
  if(n == 1)                                            // Testing whether the input is 1 
    return 1;                                           // and returning 1 if true
  return (calcfibo(n-1) + calcfibo(n-2));               // Call the same function with different input value 
}

function clear() {                                      // Definition of function clear to clear the clear the input and the result
  document.getElementById("display").innerHTML = "";    //clicking Reset button. Appending null to the div tag which is used to display result
  document.getElementById("input").value = "";          //Appending null value to the input tag which takes the value
}

function printFibo() {								    // Definition of function printFibo 
 var val = document.getElementById("input").value;      // Getting the value entered by the user in the text box
 if (val <= 0) {                                        // Testing the value whether it is lesser or equal to zero
	alert ("Enter a value greater than 0");             // Showing the error message in the pop up alert box if true
 } else {                     
 var tab = document.createElement("TABLE");             // else creating the table tag
 tab.setAttribute("border","2");                        // setting table attribute border to value 2px
 document.getElementById("display").appendChild(tab);   // appending the table created to the div tag which is used to display the result
 
 for(j = 0;j < val;j++) {                               // looping till the value entered by the user
  var fiboSeries = calcFibo(j);                         // calling the function calcFibo to calculate Fibonacci series    
  var row = tab.insertRow(j);                           // Creating the table row
  var col1 = row.insertCell(0);                         // Creating the first cell or creating first column
  col1.innerHTML = (j+1);                               // appending the j value to the cell
  var col2 = row.insertCell(1);                         // Creating the second cell or second column
  col2.innerHTML = fiboSeries;                          // Appending the fibonacci series to the second column/cells
}
}
}