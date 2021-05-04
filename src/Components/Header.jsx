import React from "react";
import { NavLink } from "react-router-dom";
import Sayans from "./Sayans";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <ul className="nav-container">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Sayans">
            Sayans
          </NavLink>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
