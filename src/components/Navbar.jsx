import React from "react";
import logo from "../assets/Vector.png";
import navRightLogo from "../assets/Group 3.png";

const Navbar = () => {
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <div className="nav-right">
            <img src={navRightLogo} alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
