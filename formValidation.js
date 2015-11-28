// Javascript Form Validation File 
// ID:620076399

function validate()
{
	// Get form 
	var form = document.forms["MPform"];
	var valid = true; // flag to check for errors
	var errors = []; // array for error msgs

	if (form.firstName.value == "")
	{
		// Error detected, colour field in red
		form.firstName.style.backgroundColor = "red";
		errors.push("First Name required");
		valid = false;

	}
	if (form.lastName.value == "")
	{
		form.lastName.style.backgroundColor = "red";
		errors.push("Last Name required");
		valid = false;

	}
	if (form.email.value == "")
	{
		form.email.style.backgroundColor = "red";
		errors.push("Email required");
		valid = false;

	}
	else
	{
		// Check the format of the email entered
		var regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (form.email.value.search(regEx) == -1)
		{
			form.email.style.backgroundColor = "red";
			errors.push("Incorrect email format");
			valid = false;
		}
	}
	if (form.serviceYears.value == "")
	{
	
		form.serviceYears.style.backgroundColor = "red";
		errors.push("Years of Service required");
		valid = false;
	}
	else
	{
		// Check if the service years entered is between 0 and 50
		if (!(form.serviceYears.value > 0 && form.serviceYears.value < 50))
		{
			form.serviceYears.style.backgroundColor = "red";
			errors.push("Years of Service out of range");
			valid = false;
		}
	}

	if (form.constit.value == "")
	{
		form.constit.style.backgroundColor = "red";
		errors.push("Constituency required");
		valid = false;
	}
	
	if(form.password.value == "" || form.password2.value == "")
	{
		
    	form.password.style.backgroundColor = "red";
    	form.password2.style.backgroundColor = "red";
    	errors.push("Passwords required");
    	valid = false;
    }
	else
	{
		// Check if the values of passwords entered match
  		if(form.password.value != form.password2.value)
  		{
    		form.password.style.backgroundColor = "red";
    		form.password2.style.backgroundColor = "red";
    		errors.push("Passwords entered do not match");
    		valid = false;
    	}
	}

	if (!valid)
	{
		alert(errors);
	}

	return valid;
		  
}
