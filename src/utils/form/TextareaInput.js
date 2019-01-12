import React from 'react';

const TextareaInput = (props) => {
  let inputClassName = "field"
  if (props.touched && !props.valid) {
    inputClassName = 'field error';
  }
  return (
    <div className={inputClassName}>
      <label>{props.label}</label>

      <textarea rows="2"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        {...props}
      ></textarea>
    </div>
  );
}

export default TextareaInput;
