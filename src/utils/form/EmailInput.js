import React from 'react';

const EmailInput = (props) => {
  let inputClassName="field"
  if (props.touched && !props.valid) {
    inputClassName = 'field error';
}
  return (
    <div className={inputClassName}>
    <label>{props.label}</label>
    <input
      type="email"
      {...props}/>
      
  </div>
  );
}

export default EmailInput;
