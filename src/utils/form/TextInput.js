import React from 'react';

const TextInput = (props) => {
  let inputClassName="field"
  if (!!props.touched && !props.valid) {
    inputClassName = 'field error';
}
  return (
    <div className={inputClassName}>
    <label>{props.label}</label>
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}

      {...props}/>
      
  </div>
  );
}

export default TextInput;
