import React, { useState } from "react";
import Navbar from "./Navbar.js";
import "../styles/aboutmeIndex.css";
import "../styles/slideIndex.css";

function Aboutme() {
  return (
    <div>
      <Navbar />
      <div className="aboutme">
        <Years />
      </div>
    </div>
  );
}

function HoverComponent({ children, onClick }) {
  const [hover, setHover] = useState(false);

  const style = {
    cursor: "pointer",
    color: hover ? "orange" : "white",
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Years() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };

  return (
    <div className="aboutme-main-container">
      <HoverComponent onClick={toggleVisibility1}>1995</HoverComponent>
      {isVisible1 && (
        <div className="slideDown">
          <Content1995 />
        </div>
      )}

      <HoverComponent onClick={toggleVisibility2}>2014</HoverComponent>
      {isVisible2 && (
        <div className="slideDown">
          <Content2014 />
        </div>
      )}

      <HoverComponent onClick={toggleVisibility3}>2024</HoverComponent>
      {isVisible3 && (
        <div className="slideDown">
          <Content2024 />
        </div>
      )}
    </div>
  );
}

function Content1995() {
  return (
    <div className="aboutme-content">
      I was born in Busan, <span style={{ color: "orange" }}>South Korea</span>.
      <br></br>Ever since I was young, I liked
      <span style={{ color: "orange" }}> making</span> things myself.
      <br></br>The <span style={{ color: "orange" }}> young child</span> spent
      the whole day <span style={{ color: "orange" }}> daydreaming</span>
      <br></br>and looking at the sea
      <br></br>in a pretty nice house with a{" "}
      <span style={{ color: "orange" }}> view</span> of the sea.
    </div>
  );
}

function Content2014() {
  return (
    <div className="aboutme-content">
      The 20-year-old's <span style={{ color: "orange" }}>first major</span> was
      creative writing.
      <br></br>
      The young man who served in the military <br></br>is unable to find
      enjoyment <br></br>in writing and eventually{" "}
      <span style={{ color: "orange" }}>gives up</span> on his major.
      <br></br>And then years of wandering begin.
      <br></br>And finally, the young man discovers
      <br></br>his aptitude for{" "}
      <span style={{ color: "orange" }}>computer science.</span>
    </div>
  );
}

function Content2024() {
  return (
    <div className="aboutme-content">
      He is currently studying
      <br></br>at the University of Minnesota Twin Cities.
      <br></br>No one knows his future.
      <br></br>However, one thing is certain:{" "}
      <span style={{ color: "orange" }}>he is a person full of passion.</span>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Aboutme;
