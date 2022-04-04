import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Components/Question';

const testQuestions = [
  { React: [{ Q1: 'A1' }, { Q2: 'A2' }] },
  { Angular: [{ Q1: 'A1' }, { Q2: 'A2' }] },
];

function Test() {
  const [time, settime] = useState(2*60);
  const [showtimer, setshowtimer] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      settime((prev) => prev - 1);
      // console.log(time);
      if (time == 0) {
      //   console.log(time);
      //   // clearInterval(id);
        setshowtimer(false);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  let params = useParams();
  let course = params.coursetitle;
  let id = params.id;
  let questionSet = testQuestions.filter((courseSet) => {
    // console.log(courseSet, Object.keys(courseSet)[0]);
    if (Object.keys(courseSet)[0] == course) {
      return courseSet;
    }
  });

  // questionSet = Object.values(questionSet[0])[0];
  // console.log(questionSet[0]);
  // console.log(Object.values(questionSet[0])[0]);
  const qalist = Object.values(questionSet[0])[0].map((qa) => {
    return (
      <div key={Object.keys(qa)[0]}>
        <div><Question question={Object.keys(qa)[0]}/></div>
        <div>{Object.values(qa)[0]}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{course} Test</div>
      <div>TestID:{id}</div>
      {showtimer && <div>Minutes:{Math.floor(time/60)} Seconds:{time%60}</div>} 
      {showtimer && <div>{qalist}</div>}
      {!showtimer && <div>Result : You Passed</div>}
    </div>
  );
}

export default Test;
