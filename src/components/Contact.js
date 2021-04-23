import React from "react";
import "../styles/Contact.scss";
import Zoom from "react-reveal/Zoom";

export const Contact = () => {
  return (
    <Zoom>
      <div className="Contact" id="Contact">
        <div className="header">
          <span>04.</span>
          <h1>What's Next?</h1>
        </div>

        <div className="content">
          <h1>Get In Touch</h1>
          <p>
            Thank you so much for dropping by and taking your time to checkout my portfolio! If you have any projects in mind, want to get a project started, need help with something or just want to
            say hi, then hit me up!
          </p>
        </div>

        <a href="mailto:dongyunrhee@gmail.com" target="_blank" rel="noreferrer">
          <button className="contactBtn">Say Hello!</button>
        </a>
      </div>
    </Zoom>
  );
};
