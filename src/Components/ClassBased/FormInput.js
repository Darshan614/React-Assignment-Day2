import React from 'react';
import classes from './FormInput.module.css';

class FormInput extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={classes.row}>
        <label>{this.props.description}</label>
        <input onChange={this.props.onchang} type={this.props.type} />
      </div>
    );
  }
}

export default FormInput;
