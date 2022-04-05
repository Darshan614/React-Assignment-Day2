import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AuthContext from './store/auth-context';
import AuthLink from './Components/AuthLink';
import Courses from './Pages/Courses';
import { useEffect, useContext } from 'react';

export default function App() {
  const [isLogged, setisLogged] = useState(false);
  const ctx = useContext(AuthContext);
  useEffect(() => {
    const loginstatus = localStorage.getItem('isLoggedIn');
    if (loginstatus) {
      setisLogged(true);
    }
  }, []);
  const signuphandler = (email, password) => {
    console.log('User Signed Up with', email, password);
  };
  const loginhandler = (username, password) => {
    console.log('User Logged In with', username, password);
    localStorage.setItem('isLoggedIn', true);
    setisLogged(true);
  };
  const logouthandler = () => {
    localStorage.removeItem('isLoggedIn');
    setisLogged(false);
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLogged,
        }}
      >
        <p>{ctx.isLoggedIn ? 'True' : 'False'}</p>
        {/* if user is not logged in show login form */}
        {!isLogged && <AuthLink onlogin={loginhandler} />}

        {/* if user is logged in show courses*/}
        {isLogged && <button onClick={logouthandler}>Logout</button>}

        {isLogged && <Courses />}
      </AuthContext.Provider>
    </div>
  );
}
