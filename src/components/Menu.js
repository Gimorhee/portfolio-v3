import React, { useState } from "react";
import "../styles/Menu.scss";

export const Menu = ({ showMobileMenu, setMobileMenu }) => {
  //   const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="Menu">
      <div className="logo">
        <a href="/">
          <i className="fab fa-dailymotion"></i>
        </a>
      </div>
      <ul className="headers">
        <li>
          <a href="#About">
            <span>01.</span>About
          </a>
        </li>
        <li>
          <a href="#Experience">
            <span>02.</span>Experience
          </a>
        </li>
        <li>
          <a href="#Work">
            <span>03.</span>Work
          </a>
        </li>
        <li>
          <a href="#Contact">
            <span>04.</span>Contact
          </a>
        </li>
      </ul>
      <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" className="resume" target="_blank" rel="noreferrer">
        RESUME
      </a>

      <button className="hamburger" onClick={() => setMobileMenu(true)}>
        <i className="fas fa-bars"></i>
      </button>

      <div className={showMobileMenu ? "showMobileMenu mobileMenu" : "mobileMenu"}>
        <i className="fas fa-times closeButton" onClick={() => setMobileMenu(false)}></i>

        <ul className="mobileHeaders">
          <li>
            <a href="#About" onClick={() => setMobileMenu(false)}>
              <span>01.</span>About
            </a>
          </li>
          <li>
            <a href="#Experience" onClick={() => setMobileMenu(false)}>
              <span>02.</span>Experience
            </a>
          </li>
          <li>
            <a href="#Work" onClick={() => setMobileMenu(false)}>
              <span>03.</span>Work
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setMobileMenu(false)}>
              <span>04.</span>Contact
            </a>
          </li>
        </ul>

        <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" className="mobileResume" target="_blank" rel="noreferrer">
          RESUME
        </a>
      </div>
    </div>
  );
};
