import React, { Component } from "react";
import "../styling/home.css";
import hot from "../images/hot.png";
import rainy from "../images/rainy.png";
import snow from "../images/snow.png";
import storm from "../images/storm.png";
import sunny from "../images/sunny.png";
import cold from "../images/cold.png";
import cloudy from "../images/cloudy.png";
import lightClouds from "../images/light-clouds.png";
import fog from "../images/fog.png";
import brokenClouds from "../images/broken-clouds.png";
import moderateRain from "../images/moderate-rain.png"
import lightRain from "../images/light-rain.png"
import scatteredClouds from "../images/scattered-clouds.png"
import lightSnow from "../images/light-snow.png"
import misty from "../images/misty.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      weather: "",
      isOver13: false,
      modal: true,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=imperial&appid=${process.env.REACT_APP_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("weather results", data);
        this.setState({
          weather: data,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  getPokemon = () => {
    const temp = this.state.weather.weather[0].description;
  
    if (temp.includes("light rain")) return lightRain
    if (temp.includes("overcast clouds")) return cloudy
    if (temp.includes("clear sky")) return sunny
    if (temp.includes("fog")) return fog
    if (temp.includes("few clouds")) return lightClouds
    if (temp.includes("broken clouds")) return brokenClouds
    if (temp.includes("moderate rain")) return moderateRain
    if (temp.includes("scattered clouds")) return scatteredClouds
    if (temp.includes("light snow")) return lightSnow
    if (temp.includes("ice")) return cold
    if (temp.includes("heat")) return hot
    if (temp.includes("heavy rain")) return rainy
    if (temp.includes("moderate snow")) return snow
    if (temp.includes("thunder")) return storm
    if (temp.includes("mist")) return misty
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

  handleCheckbox = (event) => {
    this.setState({
      isOver13: event.target.checked,
    });
  };

  
  render() {
    
    
    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <h3>Are you 13 years old?</h3>
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={this.state.isOver13}
            onChange={this.handleCheckbox}
            required
          />
          <label>{this.state.isOver13 ? "Yes" : "No"}</label>

          <button className="modal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );
   
    return (
      <>
      {this.props.isLoggedIn ? "" : modal}

        <header className="header-home">
          <h1>Pokemon Climate</h1>
        </header>

        <form className="city-search" onSubmit={this.handleSubmit}>
          <label>Enter city name</label>
          <input
            type="text"
            name="cityName"
            value={this.state.cityName}
            onChange={this.handleChange}
            placeholder="Dallas"
            required
          />
          <button type="submit" className="city-button">
            Search
          </button>
        </form>
        {this.state.weather && (
          <section className="results">
            <h2 className="weather">{this.state.weather.name}</h2>
            <img src={this.getPokemon()} alt="pokemon img" />
            <p>Current Temperature</p>
            <h3>{this.state.weather.main.temp} Degrees</h3>
            <p>Description</p>
            <h3>{this.state.weather.weather[0].description}</h3>
            <p>Feels like</p>
            <h3>{this.state.weather.main.feels_like} Degrees</h3>
            <p>Humidity</p>
            <h3>{this.state.weather.main.humidity}%</h3>
          </section>
        )}
      </>
    );
  }
}

export default Home;
