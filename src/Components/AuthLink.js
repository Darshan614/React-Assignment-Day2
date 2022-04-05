import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Pages/Auth';
import LoginForm from '../AuthPages/LoginForm';

function AuthLink(props) {
  return (
    <div>
        <LoginForm onlogin={props.onlogin} />
      {/* {ctx.isLoggedin && <a>Logout</a>} */}
    </div>
  );
}

export default AuthLink;
