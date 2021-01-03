import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/nav.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";

function Nav(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogoutClick = () => {
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
              <AiIcons.AiFillHome />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/about">
              <BsIcons.BsFillInfoCircleFill />
            </Link>
          </li>
          {props.isLoggedIn === false ? (
            <li className="nav-text">
              <Link to="/login">
                <AiIcons.AiOutlineLogin />
              </Link>
            </li>
          ) : (
            <li className="nav-text">
              <button onClick={() => handleLogoutClick()}>
                <FiIcons.FiLogOut />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
