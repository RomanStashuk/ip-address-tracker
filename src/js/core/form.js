import Validators from './validators';

class Form {
  constructor(form, input) {
    this.form = form;
    this.input = input;
    this.validators = [Validators.required, Validators.isIP];
  }

  value() {
    return this.input.value;
  }

  isValid() {
    let isFormValid = true;

    this.validators.forEach((validator) => {
      isFormValid = validator(this.value()) && isFormValid;
    });

    isFormValid ? clearError(this.input) : setError(this.input);

    return isFormValid;
  }

  clear() {
    this.input.value = '';
  }
}

function setError($control) {
  clearError($control);
  const error = 'Enter valid IP address';
  $control.classList.add('invalid');
  alert(error);
}

function clearError($control) {
  $control.classList.remove('invalid');
}

export default Form;
