function calculate() {
	var strng = "";
	console.log(str);
	strng = document.getElementById('str').value;
	 
	if(strng =='')
		alert("enter the string");
	else
	{
		var pos = prompt("Enter the position of the expected character");
		//charAt() returns the character at the specified position
		document.getElementById('result').innerHTML = 'Original string is ' + strng + '<br>' + 
		'Character in the specified position is ' + strng.charAt(pos) + '<br> Unicode of the character is ' + strng.charCodeAt(pos);
		concatenate(strng);
		Split();
		
	}
	
}
function concatenate(strng) {
	var conc = prompt("Enter any other string to concatenate","");
	
	document.getElementById('result').innerHTML = '<br><br>Concatenated string is ' + strng.concat(' ',conc);
	
	var index = prompt("Enter the character to find the position");
	//console.log(index);
	document.getElementById('result').innerHTML = '<br><br>Position of the specified character is ' + strng.indexOf(index) + '<br> Last occurence of the specified character is ' 
	+ strng.lastIndexOf(index) + '<br> String in uppercase - ' + strng.toUpperCase() + "<br> Again converted to Lowercase - " + strng.toLowerCase() +
	'<br>Value of the string</br>' + strng.valueOf() + '<br>Space Trimmed string - ' + strng.trim();
	//valueOf() returns the original string
	stringSlice(strng);
}
// difference between substring and slice is that the substring() cannot accept negative indices
 

function stringSlice(strng) {
	var pos1 = prompt("Enter the starting position from where the string should be sliced");
	var pos2 = prompt("Enter the ending postition at which the string should end");
	document.getElementById('result').innerHTML = '<br><br>Sliced string is ' + strng.slice(pos1,pos2) + '<br><br>Also the substring is ' +
	strng.substring(pos1,pos2) + '<br>the substring with specified length is ' + strng.substr(pos1,pos2) + '<br>';
	
}
	//A string can be converted to an array with the split() method
function Split() {
	var str = '';
	alert("Enter a comma separated value");
	document.getElementById('str').value = '';
	document.getElementById('btn').onclick = calc;
	 
}
function calc() {
	str = document.getElementById('str').value;
	var arr = str.split(",")
	
	for(var i = 0; i<arr.length; i++)
	document.getElementById('result').innerHTML += arr[i];
}