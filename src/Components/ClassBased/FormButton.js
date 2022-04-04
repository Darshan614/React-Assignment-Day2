import React from 'react';

class FormButton extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <div className={classes.button} className={classes.row}>
    <button  type={this.props.type}>
      {this.props.description}
      </button>
    </div>
  }
}