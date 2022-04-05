import React, { useState } from 'react';
import LoginForm from '../AuthPages/LoginForm';
import SignUpForm from '../AuthPages/SignUpForm';
import FormButton from '../Components/FunctionBased/FormButton';
import {useLocation} from 'react-router-dom';

function Auth(props) {
  const [login, setlogin] = useState(true);
  const formtoggler = () => {
    console.log('inside toggle');
    setlogin((state) => {
      return !state;
    });
  };
  
  return (
    <div>
      {login && <LoginForm  />}
      {!login && <SignUpForm  />}
      <FormButton
        onsubmit={formtoggler}
        description={login ? 'SignUp' : 'Login'}
      />
    </div>
  );
}

export default Auth;
