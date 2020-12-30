import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Login from "./components/login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    console.log("logged in", this.state.isLoggedIn)
    return (
      <>
        <Nav isLoggedIn={this.state.isLoggedIn}/>

        <Route
          exact
          path="/home"
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
              />
            );
          }}
        />

        <Route exact path="/" component={LandingPage} />

        <Footer />
      </>
    );
  }
}

export default App;
