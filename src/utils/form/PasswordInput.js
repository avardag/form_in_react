import React from 'react';

const PasswordInput = (props) => {
  let inputClassName = "field"
  if (props.touched && !props.valid) {
    inputClassName = 'field error';
  }
  return (
    <div className={inputClassName}>
      <label>{props.label}</label>
      <input
        type="password"
        {...props} />

    </div>
  );
}

export default PasswordInput;
