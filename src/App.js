import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage"
import Nav from "./components/nav"
import Footer from "./components/footer"
import Home from "./components/home"
import About from "./components/about"
import Login from "./components/login"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Nav/>

        <Route exact path="/home" component={Home}/>


        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
       <Route exact path="/" component={LandingPage}/>

       <Footer/>
      </>
    );
  }
}

export default App;
