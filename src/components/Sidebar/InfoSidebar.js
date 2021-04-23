import React from "react";
import Fade from "react-reveal/Fade";
import "../../styles/Sidebar.scss";

export const InfoSidebar = () => {
  return (
    <Fade left>
      <div className="InfoSidebar">
        <a href="https://github.com/Gimorhee" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/drhee-dev/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://codepen.io/Gimorhee" target="_blank" rel="noreferrer">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="tel:604-788-7787" target="_blank" rel="noreferrer">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:dongyunrhee@gmail.com" target="_blank" rel="noreferrer">
          <i className="far fa-envelope"></i>
        </a>

        <div className="line"></div>
      </div>
    </Fade>
  );
};
