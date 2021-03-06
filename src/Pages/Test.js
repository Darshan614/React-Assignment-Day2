import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Components/Question';
import Answer from '../Components/Answer';
import Score from '../Components/Score';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';

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
  // const { dispatch } = React.useContext(AuthContext);
  let params = useParams();

  const dispatch = useDispatch();
  const arr = useSelector((state) => state.arr);

  const questionhandler = () => {
    dispatch({ type: params.coursetitle });
  };
  console.log(arr);

  // const { state: authState } = React.useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log(AuthContext)
  // useEffect(() => {
  //   console.log('context', state);
  //   // if (!ctx.isLoggedIn) {
  //   //   console.log('hello');
  //   //   navigate('/');
  //   // }
  // }, []);

  // const { state: authState } = React.useContext(AuthContext);

  const [answersheet, setanswersheet] = useState({
    Q1: 'e',
    Q2: 'e',
    Q3: 'e',
    Q4: 'e',
    Q5: 'e',
    Q6: 'e',
    Q7: 'e',
  });
  const [score, setscore] = useState(0);
  const [time, settime] = useState(1 * 2);
  const [showtimer, setshowtimer] = useState(true);
  const [seconds, setseconds] = useState();
  const [minutes, setminutes] = useState();
  let interval;
  const startTimer = () => {
    const Timebegin = new Date(new Date().getTime() + 1 * 60000);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = Timebegin - now;
      console.log(distance);
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      if (distance < 0) {
        setshowtimer(false);
        clearInterval(interval);
      } else {
        setminutes(minutes);
        setseconds(seconds);
      }
    }, 1000);
    questionhandler();
  };

  useEffect(() => {
    // startTimer();
    questionhandler();
  }, []);

  const submitAnswer = (answer, ques) => {
    console.log('insca', answer, ques);
    setanswersheet({ ...answersheet, [ques]: answer });
    console.log(answersheet);
  };

  let course = params.coursetitle;
  let id = params.id;
  let questionSet = testQuestions.filter((courseSet) => {
    // console.log(courseSet, Object.keys(courseSet)[0]);
    if (Object.keys(courseSet)[0] == course) {
      return courseSet;
    }
  });

  const qalist = arr.map((qa) => {
    return (
      <div key={Object.keys(qa)[0]}>
        <div>
          <Question question={Object.keys(qa)[0]} />
        </div>
        <div>
          <Answer
            optiona={Object.values(qa)[0][0]}
            optionb={Object.values(qa)[0][1]}
            optionc={Object.values(qa)[0][2]}
            optiond={Object.values(qa)[0][3]}
            submitAnswer={submitAnswer}
            ques={Object.keys(qa)[0]}
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
          Minutes:{minutes} Seconds:{seconds}
        </div>
      )}
      {showtimer && <div>{qalist}</div>}
      {!showtimer && (
        <div>
          Result : You Passed with{' '}
          <Score answersheet={answersheet} correctanswers={questionSet[0]} />
        </div>
      )}
    </div>
  );
}

export default Test;
