import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import AuthContext from './store/auth-context';
import AuthLink from './Components/AuthLink';
import Courses from './Pages/Courses';
import { useEffect, useContext } from 'react';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      // localStorage.setItem('token', JSON.stringify(action.payload.token));
      console.log('user logged in',action.payload.user);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
export default function App() {
  // const ctx = useContext(AuthContext);
  // export const AuthContext = React.createContext();
  // const initialState = {
  //   isAuthenticated: false,
  //   user: null
  // };
  // const [isLogged, setisLogged] = useState(false);
  // const providerValue = useMemo(() => isLogged, []);
  // useEffect(() => {
  //   const loginstatus = localStorage.getItem('isLoggedIn');
  //   if (loginstatus) {
  //     setisLogged(true);
  //   }
  // }, []);
  // const signuphandler = (email, password) => {
  //   console.log('User Signed Up with', email, password);
  // };
  // const loginhandler = (username, password) => {
  //   console.log('User Logged In with', username, password);
  //   localStorage.setItem('isLoggedIn', true);
  //   setisLogged(true);
  // };
  // const logouthandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setisLogged(false);
  // };
  // console.log('isLogged', isLogged, localStorage.getItem('isLoggedIn'));

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const logouthandler = () => {
    dispatch('LOGOUT');
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {/* <p>{ctx.isLoggedIn ? 'True' : 'False'}</p> */}
        {/* if user is not logged in show login form */}
        {!state.isAuthenticated && <AuthLink />}

        {/* if user is logged in show courses*/}
        {state.isAuthenticated && (
          <button onClick={logouthandler}>Logout</button>
        )}

        {state.isAuthenticated && <Courses />}
      </AuthContext.Provider>
    </div>
  );
}
