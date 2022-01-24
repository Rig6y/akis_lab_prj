import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer class="py-3 fixed-bottom">
          <div class="container">
            <p class="m-0 text-center text-dark">
              Made by Roman Rudenko
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;