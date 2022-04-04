import React , { useState }from 'react';
import LoginForm from '../AuthPages/LoginForm';
import SignUpForm from '../AuthPages/SignUpForm';
import FormButton from '../Components/FunctionBased/FormButton';

function Auth(){
  const [islogin, setislogin] = useState(true);
  const formtoggler = () => {
    console.log("inside toggle")
    setislogin(state=>{
      return !state
    })
  }
  return (
    <div>
      {islogin && <LoginForm />}
      {!islogin && <SignUpForm />}
      <FormButton onsubmit={formtoggler} description={islogin ? "SignUp" : "Login"}/>
    </div>
  )
}

export default Auth;