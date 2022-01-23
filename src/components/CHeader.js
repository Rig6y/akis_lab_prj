import "./CHeader.css";
import React, { Component } from "react";
import logo from "../logo.svg";

class CHeader extends Component {
    render() {
      return(
          <header className="headerContainer">
              <a href="./Kami.js">Kami</a>
              <img src={logo} className="headerLogo" alt="logo" />
              <a>Text2</a>
          </header>
      )
    }
  }
  
  export default CHeader;