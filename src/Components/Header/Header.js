import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="https://namati.org/wp-content/uploads/2012/08/undp-logo.jpg"
          alt=""
        />
      </div>
      <div className="header-content">
        <h1>THE SDGS IN ACTION</h1>
        <h5>
          CHANGE THE CLIMATE.
        </h5>
        <h2>COUNTRY BUDGET: $100 million</h2>
      </div>
    </div>
  );
};

export default Header;
