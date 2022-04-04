import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function App() {
  
  return (
    <div>
      Welcome to home page!
      Go to available courses
      <Link to='/courses'><p>Courses</p></Link>
    </div>
  );
}
