import React from 'react';

const RadioInput = props => {
  let inputClassName = "field"
  if (props.touched && !props.valid) {
    inputClassName = 'field error';
  }

  return (
    <div className={inputClassName}>
      <label>{props.label}</label>
      {props.options.map(option => (
        <div className="ui" key={option.value}>
          
          <input type="radio"
            name={props.name}
            value={option.value}
            onChange={props.onChange}
            className={inputClassName}
          />
          <label>{option.displayValue}</label>
        </div>
      ))}
    </div>
  );

}

export default RadioInput;