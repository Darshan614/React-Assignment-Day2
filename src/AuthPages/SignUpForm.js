import React, { Fragment, useState } from 'react';
import FormInput from '../Components/FunctionBased/FormInput';
import FormButton from '../Components/FunctionBased/FormButton';
import classes from './SignUpForm.module.css';

function SignUpForm() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [userdetail, setuserdetail] = useState();

  const onEmailChangeHandler = (event) => {
    setemail(event.target.value)
  };
  const onPasswordChangeHandler = (event) => {
    setpassword(event.target.value);
  };
  const onUserDetailChangeHandler = (event) => {
    setuserdetail(event.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, userdetail);
  };

  return (
    <Fragment>
      <div className={classes.signupform}>
        <h1 className={classes.headerTitle}>SignUp</h1>
        <form>
          <FormInput
            description="Email"
            type="email"
            onchange={onEmailChangeHandler}
          />
          <FormInput
            description="Password"
            type="password"
            onchange={onPasswordChangeHandler}
          />
          <FormInput
            description="User Detail"
            type="textarea"
            onchange={onUserDetailChangeHandler}
          />

          <div className={classes.row}>
            <label>SignUp as:</label>
            <select id="gender" name="gender">
              <option value="Male">Admin</option>
              <option value="Male">Employee</option>
              <option value="Male">Student</option>
            </select>
          </div>
          <FormButton onsubmit={onSubmitHandler} description="SignUp" />
        </form>
      </div>
    </Fragment>
  );
}

export default SignUpForm;
