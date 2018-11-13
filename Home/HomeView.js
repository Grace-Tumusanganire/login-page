import React, { components } from "react";

import "./home.css";

class HomeView extends components {
  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li>Home </li>
            <li>Contact</li>
            <li>AboutUs</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default HomeView;
