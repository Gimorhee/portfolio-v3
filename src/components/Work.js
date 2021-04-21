import React from "react";
import "../styles/Work.scss";
import LS from "../images/projects/LS.png";
import booster from "../images/projects/booster.png";

export const Work = () => {
  return (
    <div className="Work" id="Work">
      <div className="header">
        <span>03.</span>
        <h1>Things I've Built</h1>
      </div>

      <div className="projects">
        <div className="projectContainer">
          {/* LEARN DITIDAHT */}
          <div className="project1">
            <a
              href="https://learnditidaht.ca/"
              target="_blank"
              rel="noreferrer"
              className="image"
              style={{
                backgroundImage: `url(${LS})`,
              }}
            >
              <div className="imageOverlay"></div>
            </a>
            <a className="detail" href="https://learnditidaht.ca/" target="_blank" rel="noreferrer">
              <h4>Featured Project</h4>
              <h2>Learn Ditidaht</h2>
              <p>
                Learn Ditidaht is an interactive language learning tool, built with an intention/effort to preserve the Ditidaht First Nation language as there are only 6 fluent speakers of their
                native language on Vancouver Island. Try learning Ditidaht language!
              </p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Wordpress</li>
                <li>PHP</li>
              </ul>
              <div className="links">
                <a href="">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://learnditidaht.ca/" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </a>
          </div>

          {/* BOOSTER */}
          <div className="project2">
            <a className="detail" href="https://boost3r.netlify.app/" target="_blank" rel="noreferrer">
              <h4>Featured Project</h4>
              <h2>Booster</h2>
              <p>
                Booster is a ping boosting service provider that I designed and developed for my fictional client. Booster provides users with a better internet connection, reduced latency, lower
                ping, and far fewer lost packets to experience a superior gaming experience.
              </p>
              <ul>
                <li>React</li>
                <li>React-Spring</li>
                <li>SCSS</li>
                <li>Netlify</li>
              </ul>
              <div className="links">
                <a href="">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://boost3r.netlify.app/" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </a>

            <a
              href="https://boost3r.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="image"
              style={{
                backgroundImage: `url(${booster})`,
              }}
            >
              <div className="imageOverlay"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
