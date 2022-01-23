import "./CHeader.css";
import React, { Component } from "react";
import logo from "../logo.svg";

class CHeader extends Component {
    render() {
      return(
          <header>
              <img src={logo} className="headerLogo" alt="logo" />
          </header>
      )
    }
  }
  
  export default CHeader;