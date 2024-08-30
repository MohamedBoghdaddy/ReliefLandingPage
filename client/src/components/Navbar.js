import React from "react";
import "./styles/Navbar.css";
import logo from "./assets/images/reliefeg-logo-120.webp"; // Assuming you download the logo
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="ReliefEG Logo" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/donate" className="nav-links nav-links-button">
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
