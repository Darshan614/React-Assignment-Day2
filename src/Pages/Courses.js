import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
}

export default Courses;
