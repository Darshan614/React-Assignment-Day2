import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Auth from './Pages/Auth';
import Courses from './Pages/Courses';
import Test from './Pages/Test';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/Auth" element={<Auth />}></Route> */}
      {/* <Route path="/Courses" element={<Courses />}></Route> */}
      <Route path="/:coursetitle/test/:id" element={<Provider store={store}><Test /></Provider>}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
