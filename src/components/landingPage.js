import React, { Component } from "react";
import "../styling/landingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = () => {
    console.log("handleChange landingPage component")
  }
  render() {
    return (
      <>
        <div className="landingPage-content">
          <header className="landing-header">
            <h1>LandingPage</h1>
          </header>

          <section>
            <div className="welcome">
              <h3>Welcome</h3>
              <p>
                Welcome to Pokemon Climate, this app was created for kids as a
                learning app,
              To increase interest in meteorology and climate.
              </p>
              <p>In order to use the app please create an account.</p>
              <p>
                Teachers and parents please create an account to grant
                access to the app for your students or your children.
              </p>
              <p>
                In the search bar please type in the name of a city, Your
                results will return the weather along with a pokemon sprite to
                demonstrate the weather at that time.
              </p>
            </div>
          </section>
          <section className="verification">
            <form>
              <label>
                <h3>Over 13 years old?</h3>
              </label>
              <input
                className="checkbox"
                name="verification"
                type="checkbox"
                checked={this.handleChange}
                onChange={this.handleChange}
              />
              <label>Yes</label>
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
