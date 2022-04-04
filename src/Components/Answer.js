import React from 'react';

function Answer(props){
  const answerhandler = (event) => {
    console.log(event.target.value);
    props.submitAnswer(event.target.value,props.ques)
  } 
  return (
    
    <div>
      Given Options are:
      <div>Option A: {props.optiona}</div>
      <div>Option B: {props.optionb}</div>
      <div>Option C: {props.optionc}</div>
      <div>Option D: {props.optiond}</div>
      <label>Select the correct answer:</label>
      <select onChange={answerhandler}>
      <option value={null}></option>
        <option value={props.optiona}>Option A</option>
        <option value={props.optionb}>Option B</option>
        <option value={props.optionc}>Option C</option>
        <option value={props.optiond}>Option D</option>
      </select>
      </div>
  )
};

export default Answer;