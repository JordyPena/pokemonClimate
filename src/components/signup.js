import React, { Component } from "react";

const URL = process.env.REACT_APP_DB_URL;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
      modal: false,
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

  handleSubmit = (event) => {
    const { username, password } = this.state;
    const data = { username, password };
    event.preventDefault();
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
        this.props.handleSuccessfulAuth();
      })
      .catch((err) => {
        this.showModal(err.message);
        console.error(err);
      });
  };

  render() {
    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <p>Username already exists</p>
          <button className="modal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );
    return (
      <>
        {this.state.modal ? modal : ""}
        <form onSubmit={this.handleSubmit} className="signup-bar">
          <label>
            <p className="signup-p">Create an account</p>
          </label>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button className="signup-button" type="submit">
            Sign up
          </button>
        </form>
      </>
    );
  }
}

export default Signup;
