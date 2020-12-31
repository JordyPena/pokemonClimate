import React, { Component } from "react";
import "../styling/landingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOver13: false,
      modal: true,
    };
  }

  handleChange = (event) => {
    this.setState({
      isOver13: event.target.checked,
    });
  };

  hideModal = (event) => {
    event.preventDefault();
    this.setState({
      modal: false,
    });
    this.props.history.push("/login")
  };

  showModal = () => {
    this.setState({
      modal: true,
    });
  };

  render() {
    const { isOver13 } = this.state;

    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <h3>Are you 13 years old?</h3>
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={isOver13}
            onChange={this.handleChange}
            required
          />
          <label>{isOver13 ? "Yes" : "No"}</label>

          <button className="modal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );
    return (
      <>
        {this.state.modal ? modal : ""}

        <div className="landingPage-content">
          <header className="landing-header">
            <h1>LandingPage</h1>
          </header>

          <section>
            <div className="welcome">
              <h3>Welcome</h3>
              <p>
                Welcome to Pokemon Climate, this app was created for kids as a
                learning app, To increase interest in meteorology and climate.
              </p>
              <p>In order to use the app please create an account.</p>
              <p>
                Teachers and parents please create an account to grant access to
                the app for your students or your children.
              </p>
              <p>
                In the search bar please type in the name of a city, Your
                results will return the weather along with a pokemon sprite to
                demonstrate the weather at that time.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
