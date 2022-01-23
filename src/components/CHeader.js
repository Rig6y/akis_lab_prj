import "./CHeader.css";
import React, { Component } from "react";
import logo from "../logo.svg";

class CHeader extends Component {
    render() {
      return(
          <header className="headerContainer">
              <p>Text1</p>
              <img src={logo} className="headerLogo" alt="logo" />
              <p>Text2</p>
          </header>
      )
    }
  }
  
  export default CHeader;