import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

function Navigation() {

  const hoverOutL = e => {
    e.target.style.fontSize = "27px"
    e.target.style.marginRight = "18px"
  }
  const hoverInL = e => {
    e.target.style.fontSize = "23px"
    e.target.style.marginRight = "30px"
  }
  const hoverOutR = e => {
    e.target.style.fontSize = "27px"
    e.target.style.marginLeft = "20px"
  }
  const hoverInR = e => {
    e.target.style.fontSize = "23px"
    e.target.style.marginLeft = "30px"
  }

  return (
    <div className="navigation">
      <nav className="navbar navbar-custom justify-content-center">
        <NavLink onMouseEnter={hoverOutL} onMouseLeave={hoverInL} className="nav-link" to="/about">
                  About
                </NavLink>
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="headerLogo" height="60" alt="logo" />
          </NavLink>
          <NavLink onMouseEnter={hoverOutR} onMouseLeave={hoverInR} className="nav-link" to="/blog">
                  Kami
                </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;