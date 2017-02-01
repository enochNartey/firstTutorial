function prompt(message, location, color)
 {
	document.getElementById(location).innerHTML= message; 
	document.getElementById(location).style.color = color; 
}

function name1() {
	var nameInput = document.getElementById('email').value;
	if (nameInput.length==0) {
		prompt("Student mail address is required", "spEmail", "red"); 
		return false; 
	}
	if (!nameInput.match(/^[A-Za-z\s\-]*$/)) {
		prompt ("Enter a valid mail please", "spEmail", "green"); 
	}
}

function name2() {
	var nameInput = document.getElementById('password').value;
	if (nameInput.length==0) {
		prompt("This field is required", "spPassword", "red"); 
		return false; 
	}
	if (!nameInput.match(/^[0-9\s\-]*$/)) {
		prompt ("Enter a valid password please", "spPassword", "green"); 
	}
}

function name3() {
	var nameInput = document.getElementById('number').value;
	if (nameInput.length==0) {
		prompt("Enter a Student number please", "spNumber", "red"); 
		return false; 
	}
	if (!nameInput.match(/^[0-9\s\-]*$/)) {
		prompt ("Enter a valid number please", "spNumber", "green"); 
	}
}