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
import moderateRain from "../images/moderate-rain.png";
import lightRain from "../images/light-rain.png";
import scatteredClouds from "../images/scattered-clouds.png";
import lightSnow from "../images/light-snow.png";
import misty from "../images/misty.png";
import ball from "../images/ball.png";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityZipcode: "",
      weather: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //get weather from weather api
  // when user submits a city name
  handleSubmit = (event) => {
    console.log(this.state.cityZipcode)
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.cityZipcode}&units=imperial&appid=${process.env.REACT_APP_TOKEN}`
    )
      .then((response) => {
        if (response.status === 404) {
          throw new Error("City not found")
        }
        return response.json()
      })
      .then((data) => {
        this.setState({
          weather: data,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  //conditionally testing weather description
  //from openweather api
  //check if the description includes certain words
  //to than render different pokemon and backgrounds
  //that match the current weather climate
  getPokemon = () => {
    console.log(this.state.weather)
    const temp = this.state.weather.weather[0].description;

    if (temp.includes("light rain")) return [lightRain, "rain"];
    if (temp.includes("overcast clouds")) return [cloudy, "clouds"];
    if (temp.includes("clear sky")) return [sunny, "sunny"];
    if (temp.includes("fog")) return [fog, "fog"];
    if (temp.includes("few clouds")) return [lightClouds, "clouds"];
    if (temp.includes("broken clouds")) return [brokenClouds, "clouds"];
    if (temp.includes("moderate rain")) return [moderateRain, "rain"];
    if (temp.includes("scattered clouds")) return [scatteredClouds, "clouds"];
    if (temp.includes("light snow")) return [lightSnow, "snow"];
    if (temp.includes("ice")) return [cold, "ice"];
    if (temp.includes("heat")) return [hot, "hot"];
    if (temp.includes("heavy rain")) return [rainy, "rain"];
    if (temp.includes("moderate snow")) return [snow, "snow"];
    if (temp.includes("snow")) return [snow, "snow"];
    if (temp.includes("thunder")) return [storm, "thunder"];
    if (temp.includes("mist")) return [misty, "mist"];
    if (temp.includes("drizzle")) return [lightRain, "rain"];
    return [lightClouds,"clouds"]// normal type pokemon, normal background
  };

  render() {
    //if i have weather in state
    // invoke getPokemon function
    // create variables to use in jsx
    
    const [pokemon, bgImage] = this.state.weather && this.getPokemon()
    
    return (
      <>
        {!this.props.isLoggedIn && <Redirect to="/login" />}

        <header className="header-home">
          <h1>Pokemon Climate</h1>
        </header>

        <form className="city-search" onSubmit={this.handleSubmit}>
          <label className="label">Enter city zipcode or city zipcode and country code</label>
          <input
            type="text"
            name="cityZipcode"
            value={this.state.cityZipcode}
            onChange={this.handleChange}
            placeholder="Dallas"
            required
          />
          <button type="submit" className="city-button">
            Search
          </button>
        </form>
        {this.state.weather && (
          <section className={`results ${bgImage}`}>
            <h2 className="city-header">{this.state.weather.name}</h2>

            <img src={pokemon} alt="pokemon img" />

            <p className="results-p">Current Temperature</p>
            <h3 className="results-p">{this.state.weather.main.temp} &deg;</h3>

            <h3 className="results-p">
              {this.state.weather.weather[0].description}
            </h3>
            <p className="results-p">Feels like</p>
            <h3 className="results-p">
              {this.state.weather.main.feels_like} &deg;
            </h3>
            <p className="results-p">Humidity</p>
            <h3 className="results-p">{this.state.weather.main.humidity}%</h3>
          </section>
        )}

        <div className="pokeballs">
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
          <img src={ball} alt="pokeball" />
        </div>
      </>
    );
  }
}

export default Home;
