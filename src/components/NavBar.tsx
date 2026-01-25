import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Content.css";
import logo from "../assets/img/logos/lakmus.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        Lakmus Teater
        <div>
          <img src={logo} height={60} alt="" />
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/kommende">Kommende forestillinger</NavLink>
        </li>
        <li>
          <NavLink to="/bilder">Portefølje og bilder</NavLink>
        </li>
        <li>
          <NavLink to="/om_oss">Om oss</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
