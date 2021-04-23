import React from "react";
import "../styles/Work.scss";
import Zoom from "react-reveal/Zoom";
import { FeaturedWork } from "./Work/FeaturedWork";
import { OtherWork } from "./Work/OtherWork";

export const Work = () => {
  return (
    <div className="Work" id="Work">
      <Zoom>
        <div className="header">
          <span>03.</span>
          <h1>Things I've Built</h1>
        </div>
      </Zoom>

      <div className="projectsContainer">
        <div className="featuredProjects">
          <FeaturedWork />
        </div>
        <div className="otherProjects">
          <OtherWork />
        </div>
      </div>
    </div>
  );
};
