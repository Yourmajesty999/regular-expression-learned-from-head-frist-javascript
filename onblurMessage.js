//make sure there are some value in the input
//the parameter inputField means input means "this" in the input.
function nonEmpty(inputField,helpText) {
	if (inputField.value.length == 0) {
		//make sure there is a help text container
		if (helpText != null) {
			helpText.innerHTML = "Please enter your valide value";
			return false;
			}
		}
		else {
			//if the value and help container are both ok,clean the help information
			if (helpText != null) {
				helpText.innerHTML = "";
				return true;
			}
		}
}

//test message of banner
function onValideDate(minLength,maxLength,inputField,helpText) {
	//wether the words of message shold between 0 and 32
	if (inputField.value.length <= 1 || inputField.value.length >= 32) {
		if (helpText != null) {
		helpText.innerHTML = "The length of value shold between 0 and 32";
		return false;
		}
	}
	else{
		if (helpText != null) {
		helpText.innerHTML = "";
		return true;
		}
	}
}

//test zipcode information
function zipVerify(inputField,helpText) {
	//the length of zipcode must be 7, the value must be numbers
	if (inputField.value.length != 7 || isNaN(inputField.value)) {
		if (helpText != null) {
			helpText.innerHTML = "ZIP code must be 7 numbers";
			return false;
		}
	}else{
		if (helpText != null) {
			helpText.innerHTML = "";
			return true;
		}
	}
}
//create a recycle regular expression function to test characters of value
function validateRegEx(regex,inputStr,helpText,helpMessage) {
	//test strings of inputs
		if (!regex.test(inputStr)) {
			helpText.innerHTML = helpMessage;
			return false;
			}
		
		else{
			if (helpText != null) {
				helpText.innerHTML = "";
				return true;
			}
		}
	
}

//use regular expression to test flyDate date 
function validateDate(inputField,helpText) {
	if (!nonEmpty(inputField,helpText)){
		return false;
	}
	//the value must be requires as following 
	return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/,inputField.value,helpText,"Please enter a date(for example,01/14/1975).");
}

//use regular expression to test phone number 
function validatePhone(inputField,helpText) {
	if (!nonEmpty(inputField,helpText)){
		return false;
	}
	//the value must be requires as following
	return validateRegEx(/^\d{3}-\d{3}-\d{4}$/,inputField.value,helpText,"Please enter your phone number(for example,000-000-1234).");
}

//use regular expression to test email address
function validateEmail(inputField,helpText) {
	if (!nonEmpty(inputField,helpText)){
		return false;
	}
	//the value must be requires as following
	return validateRegEx(/^[\w\.-_\+]+@[\w-]+[\.\w{2,4}]+$/,inputField.value,helpText,"Please enter your email adress(for example,majesty@gmail.com)");
}

//submit the whole form
function placeOrder(form) {
	//test all the message are correct
	if (onValideDate(1,23, form["message"], form["messageHelp"]) && 
		validateDate(form["date"], form["dateHelp"]) && 
		nonEmpty(form["name"], form["nameHelp"]) && 
		zipVerify(form["zipcode"], form["zipcodeHelp"]) &&
		validatePhone(form["phone"], form["phoneHelp"]) &&
		validateEmail(form["email"], form["emailHelp"]) 
		) {
		//if true then submit
		form.submit();
	}else{
		//if not, show the warming information
		alert("Please entsr valide information");
	}
}
