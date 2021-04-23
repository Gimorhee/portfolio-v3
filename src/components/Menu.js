import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Menu.scss";

export const Menu = ({ showMobileMenu, setMobileMenu }) => {
  return (
    <div className="Menu">
      <Fade top>
        <div className="logo">
          <a href="/">
            <i className="fab fa-dailymotion"></i>
          </a>
        </div>
        <ul className="headers">
          <Fade top>
            <li className="order1">
              <a href="#About">
                <span>01.</span>About
              </a>
            </li>
          </Fade>
          <Fade top>
            <li className="order2">
              <a href="#Experience">
                <span>02.</span>Experience
              </a>
            </li>
          </Fade>
          <Fade top>
            <li className="order3">
              <a href="#Work">
                <span>03.</span>Work
              </a>
            </li>
          </Fade>
          <Fade top>
            <li className="order4">
              <a href="#Contact">
                <span>04.</span>Contact
              </a>
            </li>
          </Fade>
        </ul>
        <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" className="resume" target="_blank" rel="noreferrer">
          RESUME
        </a>

        <button className="hamburger" onClick={() => setMobileMenu(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </Fade>

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
