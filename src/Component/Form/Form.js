import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
  isSubmited: false
}
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

class Form extends Component {


  state = initialForm;

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.isSubmited) {
      this.formValidation();
    }
  }

  formValidation = () => {
    let emailError = '';
    let passwordError = '';

    if (this.state.password.length < 5) {
      passwordError = 'password should be more then 5 character.'
    } else {
      this.setState({ passwordError: '' });
    }
    if (!this.state.email.includes('@')) {
      emailError = 'Email is invalid';
    } else {
      const isEmailValid = validEmailRegex.test(this.state.email);
      if (isEmailValid) {
        this.setState({ emailError: '' });
      } else {
        this.setState({ emailError: 'Email is invalid.' });
      }
    }

    if (emailError) {
      this.setState({ emailError: emailError });
      return false;
    }

    if (passwordError) {
      this.setState({ passwordError: passwordError });
      return false;
    }

    return true;
  }

  submitHandler = (event) => {
    this.setState({ isSubmited: true });
    event.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      console.log('Valid', this.state);
      localStorage.setItem('Username', this.state.email);
      localStorage.setItem('Password', this.state.password);
      this.setState(initialForm);
      this.props.history.push('/home');
    }
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" className="form-control" name="email" onChange={this.inputChangeHandler} value={this.state.email} />
          <small id="emailHelp" className="form-text text-danger">{this.state.emailError}</small>
        </div >
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={this.inputChangeHandler} value={this.state.password} />
          <small id="emailHelp" className="form-text text-danger">{this.state.passwordError}</small>
        </div >
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form >
    );
  }
}

export default withRouter(Form);
