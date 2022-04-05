import React from 'react';
import { createStore } from 'redux';

const questionReducer = (state = { arr: [] }, action) => {
  if (action.type === 'Angular') {
    return {
      arr: [
        { Q1: ['a', 'b', 'c', 'd', 'b'] },
        { Q2: ['a', 'b', 'c', 'd', 'a'] },
        { Q3: ['a', 'b', 'c', 'd', 'd'] },
        { Q4: ['a', 'b', 'c', 'd', 'a'] },
        { Q5: ['a', 'b', 'c', 'd', 'c'] },
        { Q6: ['a', 'b', 'c', 'd', 'c'] },
        { Q7: ['a', 'b', 'c', 'd', 'a'] },
      ],
    };
  }
  if (action.type === 'React') {
    return {
      arr: [
        { Q1: ['a', 'b', 'c', 'd', 'b'] },
        { Q2: ['a', 'b', 'c', 'd', 'a'] },
        { Q3: ['a', 'b', 'c', 'd', 'd'] },
        { Q4: ['a', 'b', 'c', 'd', 'a'] },
        { Q5: ['a', 'b', 'c', 'd', 'c'] },
        { Q6: ['a', 'b', 'c', 'd', 'c'] },
        { Q7: ['a', 'b', 'c', 'd', 'a'] },
      ],
    };
  }
  return state;
};

const store = createStore(questionReducer);

export default store;
