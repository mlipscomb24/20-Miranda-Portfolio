import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <h1>Miranda Lipscomb</h1>
      <nav>
        <NavLink to="/" end onClick={() => setCurrentSection("About Me")}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" onClick={() => setCurrentSection("Portfolio")}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" onClick={() => setCurrentSection("Contact")}>
          Contact
        </NavLink>
        <NavLink to="/resume" onClick={() => setCurrentSection("Resume")}>
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
