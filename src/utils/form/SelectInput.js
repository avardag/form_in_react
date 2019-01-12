import React from 'react';

const SelectInput = props => {
  let inputClassName = "field"
  if (props.touched && !props.valid) {
    inputClassName = 'field error';
  }

  return (
    <div className={inputClassName}>
      <label>{props.label}</label>
      <select value={props.value} className='ui dropdown selection' onChange={props.onChange} name={props.name}>
        {props.options.map(option => (
          <option value={option.value} className='item' key={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
    ); 
  
}

export default SelectInput;