import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Innovatech VR Pro</h1>
      <nav>
        <Link to="/" className="header-link">
          Product Overview
        </Link>
        <Link to="/pre-order" className="header-link">
          Pre-Order
        </Link>
        <Link to="/news" className="header-link">
          Updates
        </Link>
        <Link to="/contact" className="header-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
