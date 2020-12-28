import React, { Component } from "react";
import "../styling/home.css";
import charizard from "../images/charizard.png"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",

    };
  }

  handleChange = () => {
    console.log("handleChange home component")
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("handleSubmit home component")
  }

  render() {
    return (
      <>
        <header className="header-home">
          <h1>Pokemon Climate</h1>
        </header>

        <form className="city-search" onSubmit="">
          <label>Enter city name</label>
          <input type="text" name="cityname" value={this.state.value} onChange={this.handleChange} required />
          <button type="submit" className="city-button">
            Search
          </button>
        </form>

        <section className="results">
          <img src={charizard} alt="pokemon img"/>
          <h2 className="weather">Dallas</h2>
          <h3>Sunny</h3>
          <h2>92 degrees</h2>
          <h3>H: 95 L:82</h3>
        </section>
      </>
    );
  }
}

export default Home;
