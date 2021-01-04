import React, { Component } from "react";
import "../styling/landingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landingPage-content">
          <header className="landing-header">
            <h1>Welcome</h1>
          </header>

          <section>
            <div className="welcome-h">
              <p className="welcome-p">To Pokemon Climate</p>
              <p className="welcome-p">
                This app is created for kids as a learning app, To increase
                interest in meteorology and climate.
              </p>
              <p className="welcome-p">
                In order to use the app please create an account.
              </p>
              <p className="welcome-p">
                Teachers and parents please create an account to grant access to
                the app for your students or your children.
              </p>
              <p className="welcome-p">
                In the search bar type in the name of a city in the US.
              </p>
              <p className="welcome-p">
                Your results will return the weather along with a pokemon sprite
                to demonstrate the weather at that time.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
