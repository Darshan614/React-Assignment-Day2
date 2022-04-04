import React, { Fragment } from 'react';
import FormInput from '../Components/ClassBased/FormInput';
import classes from './LoginForm.module.css';
import FormButton from '../Components/FunctionBased/FormButton';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      level: '',
    };
    this.usernamechangehandler = this.usernamechangehandler.bind(this);
    this.passwordchangehandler = this.passwordchangehandler.bind(this);
    this.levelchangehandler = this.levelchangehandler.bind(this);
    this.onsubmithandler = this.onsubmithandler.bind(this);
  }
  usernamechangehandler(event) {
    this.setState({
      username: event.target.value,
      password: this.state.password,
      level: this.state.level,
    });
    console.log(this.state);
  }
  passwordchangehandler(event) {
    this.setState({
      username: this.state.username,
      password: event.target.value,
      level: this.state.level,
    });
  }
  levelchangehandler(event) {
    this.setState({
      username: this.state.username,
      password: this.state.password,
      level: event.target.value,
    });
  }
  onsubmithandler(e) {
    e.preventDefault();
    console.log(this.state);
    //fetch request on firebase
  }
  render() {
    return (
      <Fragment>
        <div className={classes.loginform}>
          <h1 className={classes.headerTitle}>Login </h1>
          <form onSubmit={this.onsubmithandler}>
            <FormInput
              description="Username"
              type="text"
              onchang={this.usernamechangehandler}
            />
            <FormInput
              description="Password"
              type="password"
              onchang={this.passwordchangehandler}
            />

            <div className={classes.row}>
              <label>Login as:</label>
              <select
                onChange={this.levelchangehandler}
                id="level"
                name="level"
              >
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
}

export default LoginForm;
