import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbarhome from "./Navbarhome";
import Typewriter from "typewriter-effect";
import "../styles/homeIndex.css";
import "../styles/slideIndex.css";

function Home() {
  return (
    <div>
      <Navbarhome />
      <div className="main-container">
        <div className="left-content">
          <Introduction />
        </div>
        <div className="right-content">
          <Slide />
        </div>
      </div>
    </div>
  );
}

function HoverLink({ children }) {
  const [hover, setHover] = useState(false);

  const style = {
    cursor: "pointer",
    color: hover ? "orange" : "white",
  };

  return (
    <p
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </p>
  );
}

function Slide() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = () => {
    setIsVisible(!isVisible);
  };

  const linkStyle = {
    display: "block",
    marginBottom: "5px",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <button className="slide-button" onClick={toggleComponent}>
        More About Me
      </button>
      {isVisible && (
        <div
          className={`component ${
            isVisible ? "slideIn slide-link" : "slideOut slide-link"
          }`}
        >
          <div>
            <Link to="/aboutme" style={linkStyle}>
              <HoverLink>ABOUT ME</HoverLink>
            </Link>
          </div>
          <div>
            <Link to="/resume" style={linkStyle}>
              <HoverLink>RESUME</HoverLink>
            </Link>
          </div>
          <div>
            <Link to="/contact" style={linkStyle}>
              <HoverLink>CONTACT</HoverLink>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <h2>Hi! I'm</h2>
      <h1>Kyeongmo_Austin.</h1>
      <h2>I'm a CS student based in Minnesota.</h2>
      <div className="typewriter-wrapper">
        <span className="static-text">I like to </span>
        <span className="dynamic-text">
          <Typewriter
            options={{
              strings: [
                '<span class="style1">"CONNECT"</span>',
                "<span class='style2'>{CODE /}</span>",
                '<span class="style3">"DEVELOP"</span>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Home;
