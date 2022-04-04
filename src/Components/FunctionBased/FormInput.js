import React from 'react';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className={classes.row}>
      <label>{props.description}</label>
      <input onChange={props.onchange} type={props.type} />
    </div>
  );
};

export default FormInput;
