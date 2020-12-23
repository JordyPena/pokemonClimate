import React, { Component } from "react";
import "../styling/login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <form className="login-bar">
          <label>
            <p className="login-p">Already have an account?</p>
          </label>
          <input
            type="text"
            name="username"
            onChange=""
            onSubmit=""
            required
            placeholder="username"
          />
        </form>
        <form className="login-bar">
          <input
            type="text"
            name="password"
            onChange=""
            onSubmit=""
            required
            placeholder="password"
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <form className="signup-bar">
          <label>
            <p className="signup-p">Create an account</p>
          </label>
          <input type="text" name="username" onChange="" onSubmit="" required />
        </form>
        <form className="signup-bar">
          <input type="text" name="password" onChange="" onSubmit="" required />
          <button className="signup-button" type="submit">
            Sign up
          </button>
        </form>
      </>
    );
  }
}

export default Login;
