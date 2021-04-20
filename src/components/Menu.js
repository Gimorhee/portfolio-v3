import React, { useState } from "react";
import "../styles/Menu.scss";

export const Menu = ({ showMobileMenu, setMobileMenu }) => {
  //   const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="Menu">
      <div className="logo">
        <a href="/">
          <i class="fab fa-dailymotion"></i>
        </a>
      </div>
      <ul className="headers">
        <li>
          <a href="#testing">
            <span>01.</span>About
          </a>
        </li>
        <li>
          <a href="#">
            <span>02.</span>Experience
          </a>
        </li>
        <li>
          <a href="#">
            <span>03.</span>Work
          </a>
        </li>
        <li>
          <a href="#">
            <span>04.</span>Contact
          </a>
        </li>
      </ul>
      <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" className="resume" target="_blank">
        RESUME
      </a>

      <button className="hamburger" onClick={() => setMobileMenu(true)}>
        <i class="fas fa-bars"></i>
      </button>

      <div className={showMobileMenu ? "showMobileMenu mobileMenu" : "mobileMenu"}>
        <i class="fas fa-times closeButton" onClick={() => setMobileMenu(false)}></i>

        <ul className="mobileHeaders">
          <li>
            <a href="#">
              <span>01.</span>About
            </a>
          </li>
          <li>
            <a href="#">
              <span>02.</span>Experience
            </a>
          </li>
          <li>
            <a href="#">
              <span>03.</span>Work
            </a>
          </li>
          <li>
            <a href="#">
              <span>04.</span>Contact
            </a>
          </li>
        </ul>

        <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" className="mobileResume" target="_blank">
          RESUME
        </a>
      </div>
    </div>
  );
};
