function validateName() {
	var name = document.getElementById('name').value;
	
	/* match() method returns the first matched pattern */
		if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
			document.getElementById('name_test').innerHTML = 'First name and last name Required';
			document.getElementById('name_test').style.color = 'red';
		} else {
			document.getElementById('name_test').innerHTML = "Welcome " + name;
			document.getElementById('name_test').style.color = 'green';

		}
	}

function validatePlace() {
		var place = document.getElementById('place').value;
		
		if(!place.match(/^[A-Za-z]*$/)) {
			document.getElementById('place_test').innerHTML = 'Enter proper location name';
			document.getElementById('place_test').style.color = 'red';
		} else {
			document.getElementById('place_test').innerHTML = "Welcome to " + place;
			document.getElementById('place_test').style.color = 'green';

		}
}

function validateDOB() {
	var dob = document.getElementById('dob').value;
	
		if(!dob.match(/\d{1,2}\/\d{1,2}\/\d{4}/)) {

			document.getElementById('dob_test').innerHTML = "Enter valid birth date like mm/dd/yyyy"
			document.getElementById('dob_test').style.color = 'red';
		} else {

			var arry = dob.split('/');
			console.log(arry);
			var month = parseInt(arry[0],10);
			var day = parseInt(arry[1],10);
			var year = parseInt(arry[2],10);

			if(year < 1000 || year > 3000 || month < 0 || month > 12) {
				document.getElementById('dob_test').innerHTML = "Invalid year or month";
				document.getElementById('dob_test').style.color = 'red';
			} else { 

			document.getElementById('dob_test').innerHTML = "Birth date: " + dob;
			document.getElementById('dob_test').style.color = 'green';
		}
	}
}

function display() {
	var name = document.getElementById('name').value;
	var place = document.getElementById('place').value;
	var dob = document.getElementById('dob').value;
	var dname = document.getElementsByClassName('name');
	var dplace = document.getElementsByClassName('place');
	var ddob = document.getElementsByClassName('dob');
	//console.log(name);
	if(name == '') {
	
		document.getElementById('name_test').innerHTML = 'Name Required';
		document.getElementById('name_test').style.color = 'red';
	}
	if(dob == '') {
		document.getElementById('dob_test').innerHTML = 'Date of Birth is Required';
		document.getElementById('dob_test').style.color = 'red';
	}
	dname[0].innerHTML = name;
	dplace[0].innerHTML = place;
	ddob[0].innerHTML = dob;
	
}