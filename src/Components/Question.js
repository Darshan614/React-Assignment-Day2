import React from 'react';
import classes from './Question.module.css';

function Question(props){
  return (
    <div className={classes.ques}>
      {props.question}
    </div>
  )
}

export default Question;