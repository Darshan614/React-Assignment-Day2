import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Components/Question';
import Answer from '../Components/Answer';

const testQuestions = [
  {
    React: [
      { Q1: ['a', 'b', 'c', 'd', 'b'] },
      { Q2: ['a', 'b', 'c', 'd', 'a'] },
      { Q3: ['a', 'b', 'c', 'd', 'd'] },
      { Q4: ['a', 'b', 'c', 'd', 'a'] },
      { Q5: ['a', 'b', 'c', 'd', 'c'] },
      { Q6: ['a', 'b', 'c', 'd', 'c'] },
      { Q7: ['a', 'b', 'c', 'd', 'a'] },
    ],
  },
  {
    Angular: [
      { Q1: ['a', 'b', 'c', 'd', 'b'] },
      { Q2: ['a', 'b', 'c', 'd', 'a'] },
      { Q3: ['a', 'b', 'c', 'd', 'd'] },
      { Q4: ['a', 'b', 'c', 'd', 'a'] },
      { Q5: ['a', 'b', 'c', 'd', 'c'] },
      { Q6: ['a', 'b', 'c', 'd', 'c'] },
      { Q7: ['a', 'b', 'c', 'd', 'a'] },
    ],
  },
];

function Test() {
  const [score, setscore] = useState(0);
  const [time, settime] = useState(1 * 60);
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

  const checkAnswer = (answer, correctAnswer) => {
    console.log('insca', answer, correctAnswer);
    if (answer == correctAnswer) {
      setscore((prev) => prev + 1);
      console.log('Right');
    } else {
      setscore((prev) => prev - 1);
    }
  };

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
        <div>
          <Question question={Object.keys(qa)[0]} />
        </div>
        <div>
          {Object.values(qa)[0]}
          <Answer
            optiona={Object.values(qa)[0][0]}
            optionb={Object.values(qa)[0][1]}
            optionc={Object.values(qa)[0][2]}
            optiond={Object.values(qa)[0][3]}
            checkAnswer={checkAnswer}
            correctAnswer={Object.values(qa)[0][4]}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{course} Test</div>
      <div>TestID:{id}</div>
      {showtimer && (
        <div>
          Minutes:{Math.floor(time / 60)} Seconds:{time % 60}
        </div>
      )}
      {showtimer && <div>{qalist}</div>}
      {!showtimer && <div>Result : You Passed with {score} marks</div>}
    </div>
  );
}

export default Test;
