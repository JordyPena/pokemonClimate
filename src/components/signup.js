import React, { Component } from "react";
import Login from "../components/login";
import { withRouter } from "react-router-dom";
// variable used for 4 checks
// lower case, upper case, number
// 1 special character
//at the end checks string for no empty spaces
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
const URL = process.env.REACT_APP_DB_URL;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      error: null,
      modal: false,
      signUp: true,
      login: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hideModal = (event) => {
    event.preventDefault();
    this.setState({
      modal: false,
    });
  };

  showModal = () => {
    this.setState({
      modal: true,
    });
  };
  //creates a account
  //when signup form is submitted
  //check if password meets registration requirements

  handleSubmit = (event) => {
    const { username, password } = this.state;
    const data = { username, password };
    event.preventDefault();
    if (password.length < 8) {
      return this.setState({
        error: "Password must be longer than 8 characters",
      });
    }
    if (password.length > 72) {
      return this.setState({
        error: "Password must be less than 72 characters",
      });
    }
    if (password.startsWith(" ") || password.endsWith(" ")) {
      return this.setState({
        error: "Password must not start or end with empty spaces",
      });
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return this.setState({
        error:
          "Password must contain 1 upper case letter, lower case letter, number and special character",
      });
    }

    fetch(`${URL}/api/accounts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("User already exist");
        }
        if (response.status === 400) {
          throw new Error("Fill out all inputs");
        }

        return response.json();
      })
      .then((data) => {
        this.props.handleSuccessfulAuth(this.props);
      })
      .catch((err) => {
        this.showModal(err.message);
        console.error(err);
      });
  };

  handleClick = () => {
    this.setState({
      signUp: false,
      login: true,
    });
  };

  render() {
    //create modal
    //to render when username is already in database
    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <p>Username already exists, try signing in</p>
          <button className="modal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );

    const signupForm = (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign up</h1>
          <div className="txt-field">
            <input
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt-field">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt-field">
            <input
              type="password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
            <span></span>
            <label>Password Confirmation</label>
          </div>
          {this.state.error}
          <button className="signup-button" type="submit">
            Sign up
          </button>
          <div className="member-p">
            <button onClick={() => this.handleClick()}>Login</button>
          </div>
        </form>
      </div>
    );
    return (
      <>
        {this.state.signUp && signupForm}
        {this.state.modal && modal}
        {this.state.login && (
          <Login
            handleSuccessfulAuth={this.props.handleSuccessfulAuth}
            handleLogin={this.props.handleLogin}
            history={this.props.history}
          />
        )}
      </>
    );
  }
}

export default withRouter(Signup);
