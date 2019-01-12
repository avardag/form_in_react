import React, { Component } from 'react';
import TextInput from './utils/form/TextInput';
import EmailInput from './utils/form/EmailInput';
import validate from './utils/form/validate';
import PasswordInput from './utils/form/PasswordInput';
import SelectInput from './utils/form/SelectInput';
import RadioInput from './utils/form/RadioInput';

class FormContainer extends Component {
  state = {
    formIsValid: false,
    formControls: {
      name: {
        value: "",
        placeholder: 'What is your name',
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true
        }
      },
      email: {
        value: "",
        placeholder: 'Enter your Email',
        valid: false,
        touched: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        placeholder: 'Enter your password',
        valid: false,
        touched: false,
        validationRules: {
          minLength: 6
        }
      },
      gender: {
        value: '',
        placeholder: 'What is your gender',
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: '', displayValue: 'Gender' },
          { value: 'male', displayValue: 'Male' },
          { value: 'female', displayValue: 'Female' }
        ]
      },
      my_radio: {
        value: '',
        placeholder: 'Are you a human?',
        valid: false,
        touched: false,
        validationRules: {
          // isRequired: true,
        },
        options: [
          { value: 0, displayValue: 'No' },
          { value: 1, displayValue: 'Yes' }
        ]
      }
    }
  }


  changeHandler = event => {
    const { name, value } = event.target;
    // this.setState(prevState => ({
    //   //es6 nested object destructuring
    //   formControls: {
    //     ...prevState.formControls,
    //     [name]: { //es6 named parameters destructuring
    //       ...prevState.formControls[name],
    //       value: value,
    //       touched: true,
    //       valid: validate(value, [name].validationRules)
    //     }
    //   }
    // }));

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });


  }

  formSubmit = (e) => {
    e.preventDefault()
    // const dataToSubmit = {
    //   name: this.state.formControls.name,
    //   email: this.state.formControls.email,
    //   password: this.state.formControls.password,
    // }
    console.dir(this.state.formControls)
  }
  render() {
    return (
      <form className="ui form">

        <TextInput
          name="name"
          label="Name"
          placeholder={this.state.formControls.name.placeholder}
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.name.touched ? 1: 0}
          valid={this.state.formControls.name.valid ? 1: 0}
          
        />
        <EmailInput
          name="email"
          label="Email"
          placeholder={this.state.formControls.email.placeholder}
          value={this.state.formControls.email.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.email.touched ? 1: 0}
          valid={this.state.formControls.email.valid ? 1: 0}
        />
        <PasswordInput
          name="password"
          label="Password"
          placeholder={this.state.formControls.password.placeholder}
          value={this.state.formControls.password.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.password.touched ? 1: 0}
          valid={this.state.formControls.password.valid ? 1: 0}
        />
        <SelectInput
          name="gender"
          label="Gender"
          value={this.state.formControls.gender.value}
          options={this.state.formControls.gender.options}
          onChange={this.changeHandler}
          touched={this.state.formControls.gender.touched ? 1: 0}
          valid={this.state.formControls.gender.valid ? 1: 0}
        />
        <RadioInput
          name="my_radio"
          label="Are you human?"
          value={this.state.formControls.my_radio.value}
          onChange={this.changeHandler}
          options={this.state.formControls.my_radio.options}
          touched={this.state.formControls.my_radio.touched ? 1: 0}
          valid={this.state.formControls.my_radio.valid ? 1: 0}
        />

        <button
          className="ui button"
          onClick={this.formSubmit}
          disabled={!this.state.formIsValid}
        >
          Submit
        </button>
      </form>

    );
  }
}

export default FormContainer;