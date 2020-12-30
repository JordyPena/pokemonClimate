import React from "react";
import { Link } from "react-router-dom";
import "../styling/nav.css";

function Nav(props) {
  return (
    <>
      <nav className="Nav">
        <div className="bg-container">
          <div className="background-img container"></div>

          <div className="link-style container">
            <Link to="/home">
              <h3>Home</h3>
            </Link>

            <Link to="/about">
              <h3>About</h3>
            </Link>
            {props.isLoggedIn === false && ( 
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
