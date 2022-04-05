import React from 'react';
import { Link } from 'react-router-dom';
import Random from '../Components/Random';

function Courses() {
  return (
    <div>
      <h1>Welcome to home page! Go to available Courses</h1>
      <Link to="/React/test/123">
        <p>React</p>
      </Link>
      <Link to="/Angular/test/987">
        <p>Angular</p>
      </Link>
      <Random />
    </div>
  );
}

export default Courses;
