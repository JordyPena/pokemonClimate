import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/nav.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import TokenService from "../services/token-service";
import tokenService from "../services/token-service";

function Nav(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogoutClick = () => {
    TokenService.clearAuthToken(); // to delete my auth token proving they are logged out
    props.handleLogout();
    if (props.history === undefined) return;
    props.history.push("/");
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <AiIcons.AiFillHome /> Home
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/about">
              <BsIcons.BsFillInfoCircleFill /> About
            </Link>
          </li>
          {/* here is where i can add authtoken conditional instead of state conditional */}
          {!tokenService.hasAuthToken() ? (
            <li className="nav-text">
              <Link to="/login">
                <AiIcons.AiOutlineLogin /> Login
              </Link>
            </li>
          ) : (
            <li className="nav-text">
              <button onClick={() => handleLogoutClick()}>
                <FiIcons.FiLogOut /> Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
