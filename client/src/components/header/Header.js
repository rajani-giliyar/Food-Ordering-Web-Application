import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <h1 className="header-title">FoodTime</h1>
      </div>
      <div className="right-section">
        <Link to="/addrestaurant" className="header-link">
          Add Restaurant
        </Link>
        <Link to="/cart" className="header-link">
          Cart
        </Link>
        <Link to="/register" className="header-link">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
