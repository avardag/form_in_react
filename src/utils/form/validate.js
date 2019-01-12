const validate = (value, rules) => {

  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        return isValid = emailValidator(value) ? isValid : false;

      case 'minLength':
        return isValid = isValid && minLengthValidator(value, rules[rule]);

      case 'maxLength': 
        return isValid = isValid && maxLengthValidator(value, rules[rule]);

      case 'isRequired': 
        return isValid = isValid && requiredValidator(value);

      default: isValid = true;
    }
  }

  return isValid;
}

/**
* minLength Val
* @param  value 
* @param  minLength
* @return          
*/
const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
}

/**
* maxLength Val
* @param  value 
* @param  minLength
* @return          
*/
const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
}

/**
* Check to confirm that feild is required
* 
* @param  value 
* @return       
*/
const requiredValidator = value => {
  return value.trim() !== '';
}

/**
* Email validation
* 
* @param value
* @return 
*/
const emailValidator = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}



export default validate;