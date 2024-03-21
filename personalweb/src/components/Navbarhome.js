import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbarIndex.css";

function Navbarhome() {
  return (
    <div>
      <nav style={{ fontFamily: "Silkscreen", padding: "10px" }}>
        {/* left side */}
        <div className="navbar-links-left">
          <div className="nav-link" style={{ marginLeft: "40px" }}>
            <Link to="/">KYEONGMO AUSTIN KANG</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarhome;
