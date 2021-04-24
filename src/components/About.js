import React from "react";
import "../styles/About.scss";
import profileImage from "../images/1.JPG";
import Zoom from "react-reveal/Zoom";

export const About = () => {
  return (
    <Zoom>
      <div className="About" id="About">
        <div className="header">
          <span>01.</span>
          <h1>About Me</h1>
        </div>
        <div className="detail">
          <div className="content">
            <div className="info">
              Hello! I am Danny, a formal Product Engineer graduated from{" "}
              <a href="https://www.ubc.ca/" target="_blank" rel="noreferrer">
                UBC
              </a>{" "}
              with a Web Development Diploma attained from{" "}
              <a href="https://www.lighthouselabs.ca/en" target="_blank" rel="noreferrer">
                Lighthouse Labs
              </a>{" "}
              in 2019, turned into a Web developer with a passion of building and designing exceptional digital experiences and products.
              <br />
              <br />
              Fast-forward to today, and I've had the privileage of working as a developer at{" "}
              <a href="https://www.linkedin.com/company/kater-technologies-inc./" target="_blank" rel="noreferrer">
                {" "}
                a start-up (Kater)
              </a>
              ,{" "}
              <a href="https://onikon.com/" target="_blank" rel="noreferrer">
                a marketing/advertisement agency (Onikon)
              </a>{" "}
              and{" "}
              <a href="https://mapster.me/" target="_blank" rel="noreferrer">
                non-profit organization (Mapster)
              </a>{" "}
              where I could develop not only the hands-on technical development skills but also how to work/co-operate efficiently with other designers, developers and clients.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </div>
            <div className="line"></div>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Gatsby</li>
              <li>Vue</li>
              <li>Wordpress</li>
              <li>Node</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="imageContainer">
            <div className="image">
              <img src={profileImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
