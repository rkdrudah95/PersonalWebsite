import React from "react";
import Navbar from "./Navbar.js";

function Contact() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>CONTACT</h1>
    </div>
  );
}

export default Contact;
