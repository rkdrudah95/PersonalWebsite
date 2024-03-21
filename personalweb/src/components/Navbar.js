import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbarIndex.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        {/* left side */}
        <div className="navbar-links-left">
          <div className="nav-link">
            <Link to="/">KYEONGMO AUSTIN KANG</Link>
          </div>
        </div>
        {/* right side */}
        <div className="navbar-links-left">
          <div className="nav-link">
            <Link to="/aboutme">ABOUT ME</Link>
          </div>
          <div className="nav-link">
            <Link to="/resume">RESUME</Link>
          </div>
          <div className="nav-link">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
