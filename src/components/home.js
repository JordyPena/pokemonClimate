import React, { Component } from "react";
import "../styling/home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <header className="header-home">
          <h1>Pokemon Climate</h1>
        </header>

        <form className="city-search" onSubmit="">
          <label>Enter city name</label>
          <input type="text" name="cityname" value="" onChange="" required />
          <button type="submit" className="city-button">
            Search
          </button>
        </form>

        <section className="results">
          <h2>results will render here</h2>
          <p className="weather">weather 90 degrees</p>
        </section>
      </>
    );
  }
}

export default Home;
