import React from "react";
import "../../styles/Sidebar.scss";

export const InfoSidebar = () => {
  return (
    <div className="InfoSidebar">
      {/* <i class="fab fa-github-square"></i> */}
      <a href="https://github.com/Gimorhee" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/drhee-dev/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://codepen.io/Gimorhee" target="_blank">
        <i class="fab fa-codepen"></i>
      </a>
      <a href="tel:604-788-7787" target="_blank">
        <i class="fas fa-phone"></i>
      </a>
      <a href="mailto:dongyunrhee@gmail.com" target="_blank">
        <i class="far fa-envelope"></i>
      </a>

      <div className="line"></div>
    </div>
  );
};
