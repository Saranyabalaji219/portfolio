import React from "react";
import "./Footer.css";
import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/Github.png";
import gmail from "../../assets/gmail.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side */}
        <div className="footer-left">
          <h2>Saranya B</h2>
          <p>Java Fullstack Developer</p>
        </div>

        {/* Middle navigation */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social media */}
        <div className="footer-socials">
          <a href="mailto:saranyabalaji219@gmail.com">
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/saranya-b-b0b9a21b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Saranyabalaji219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saranya B. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
