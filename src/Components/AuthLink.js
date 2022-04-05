import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { Link } from 'react-router-dom';
import Auth from '../Pages/Auth';
import LoginForm from '../AuthPages/LoginForm';

function AuthLink(props) {
  console.log('hi', props.onlogin);
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <div>
      {!ctx.isLoggedin && (
        <LoginForm onlogin={props.onlogin} />
      )}
      {/* {ctx.isLoggedin && <a>Logout</a>} */}
    </div>
  );
}

export default AuthLink;
