import React, { Component } from "react";
import "../styling/login.css";
import Signup from "../components/signup";
import { withRouter } from "react-router-dom";

const URL = process.env.REACT_APP_DB_URL;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      modal: false,
      signUp: false,
      login: true,
    };
  }

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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //get account when user
  //submits login form with a username and password
  handleSubmit = (event) => {
    const { username, password } = this.state;
    const data = { username, password };
    event.preventDefault();
    fetch(`${URL}/api/accounts/account`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.showModal();
        } else {
          this.props.handleSuccessfulAuth(this.props);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleClick = () => {
    this.setState({
      signUp: true,
      login: false,
    });
  };

  render() {
    //create modal
    //to render when username is not in database
    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <p>Username doesn't exist please register</p>
          <button className="modal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );

    const loginForm = (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
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
          <div className="member-p">
            <p>Demo credentials</p>
            <p>Username: demo</p>
            <p>Password: Password1!</p>
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
          <div className="member-p">
            Not a member?
            <button onClick={() => this.handleClick()}>Signup</button>
          </div>
        </form>
      </div>
    );
    const pleaseLogin = <div className="warning">Please Login First</div>;

    return (
      <>
        {this.props.history === undefined ||
          (this.props.history.action === "REPLACE" && pleaseLogin)}
        {this.state.login ? loginForm : ""}
        {this.state.modal ? modal : ""}
        {this.state.signUp && (
          <Signup
            handleSuccessfulAuth={this.props.handleSuccessfulAuth}
            handleLogin={this.props.handleLogin}
            history={this.history}
          />
        )}
      </>
    );
  }
}

export default withRouter(Login);
