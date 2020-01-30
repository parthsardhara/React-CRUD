import React, { Component } from 'react';

class Form extends Component {

  state = {
    email: 'email',
    password: 'password',
    emailValid: false,
    passwordValid: false,
    isValid: false
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formValidation = () => {
    if (this.state.passwordValid && this.state.emailValid) {
      this.setState({ isValid: true });
    }
  }

  submitHandler = (event) => {
    this.formValidation();
    if (this.state.isValid) {
      console.log('Valid', this.state);
    } else {
      console.log('inValid', this.state);
    }
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" className="form-control" name="email" onChange={this.inputChangeHandler} value={this.state.email} />
          <small id="emailHelp" className="form-text text-danger">{this.state.email ? '' : 'Please enter valid Email id.'}</small>
        </div >
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={this.inputChangeHandler} value={this.state.password} />
          <small id="emailHelp" className="form-text text-danger">{this.state.password ? this.state.password.length > 5 ? '' : 'Password should be more then 5 letter.' : 'Please enter valid password.'}</small>
        </div >
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form >
    );
  }
}

export default Form;
