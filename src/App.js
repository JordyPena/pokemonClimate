import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Login from "./components/login";
import tokenService from "./services/token-service";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: tokenService.hasAuthToken(),
    };
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: tokenService.clearAuthToken(),
    });
  };

  handleSuccessfulAuth = (props) => {
    this.setState({
      isLoggedIn: tokenService.hasAuthToken(),
    });
    props.history.push("/");
  };

  render() {
    return (
      <>
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
        />

        <Route
          exact
          path="/"
          render={(props) => {
            return <Home {...props} isLoggedIn={this.state.isLoggedIn} />;
          }}
        />

        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/login"
          render={(props) => {
            return (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            );
          }}
        />

        <Route
          exact
          path="/welcome"
          render={(props) => {
            return <LandingPage {...props} />;
          }}
        />
      </>
    );
  }
}

export default App;
