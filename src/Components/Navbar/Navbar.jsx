import React, { useState } from "react";
import "./Navbar.css";
import Ahillogo from "../../assets/Ahillogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <nav className="navbar">
      <img src={Ahillogo} alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <AnchorLink className="anchor-link" offset={80} href="#home" onClick={handleLinkClick}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={80} href="#about" onClick={handleLinkClick}>
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={80} href="#services" onClick={handleLinkClick}>
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={80} href="#projects" onClick={handleLinkClick}>
            My Works
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={80} href="#contact" onClick={handleLinkClick}>
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </nav>
  );
};

export default Navbar;
