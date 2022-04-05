import React, { Fragment, useState } from 'react';
import FormInput from '../Components/ClassBased/FormInput';
import classes from './LoginForm.module.css';
import FormButton from '../Components/FunctionBased/FormButton';
import { AuthContext } from '../App';

function LoginForm(props) {
  const { dispatch } = React.useContext(AuthContext);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [level, setlevel] = useState();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //     password: '',
  //     level: '',
  //   };
  //   this.usernamechangehandler = this.usernamechangehandler.bind(this);
  //   this.passwordchangehandler = this.passwordchangehandler.bind(this);
  //   this.levelchangehandler = this.levelchangehandler.bind(this);
  //   this.onsubmithandler = this.onsubmithandler.bind(this);
  // }
  const usernamechangehandler = (event) => {
    // this.setState({
    //   username: event.target.value,
    //   password: this.state.password,
    //   level: this.state.level,
    // });
    setusername(event.target.value);
    // console.log(this.state);
  };
  const passwordchangehandler = (event) => {
    // this.setState({
    //   username: this.state.username,
    //   password: event.target.value,
    //   level: this.state.level,
    // });
    setpassword(event.target.value);
  };
  const levelchangehandler = (event) => {
    // this.setState({
    //   username: this.state.username,
    //   password: this.state.password,
    //   level: event.target.value,
    // });
    setlevel(event.target.value);
  };
  const onsubmithandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    //fetch request on firebase
    // console.log('class props',this.props);
    // this.props.onlogin(this.state.username,this.state.password);
    dispatch({
      type: 'LOGIN',
      payload: { user:username, password },
    });
  };
  // render() {
  return (
    <Fragment>
      <div className={classes.loginform}>
        <h1 className={classes.headerTitle}>Login </h1>
        <form onSubmit={onsubmithandler}>
          <FormInput
            description="Username"
            type="text"
            onchang={usernamechangehandler}
          />
          <FormInput
            description="Password"
            type="password"
            onchang={passwordchangehandler}
          />

          <div className={classes.row}>
            <label>Login as:</label>
            <select onChange={levelchangehandler} id="level" name="level">
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <FormButton description="Login" type="submit" />
        </form>
      </div>
    </Fragment>
  );
}
// }

export default LoginForm;
