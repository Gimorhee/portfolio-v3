import React from "react";
import "../../styles/Sidebar.scss";

export const EmailSidebar = () => {
  return (
    <div className="EmailSidebar">
      <a href="mailto:dongyunrhee@gmail.com" target="_blank" className="email" rel="noreferrer">
        dongyunrhee@gmail.com
      </a>
      <div className="line"></div>
    </div>
  );
};
