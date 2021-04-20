import React from "react";
import "../styles/Front.scss";

export const Front = () => {
  return (
    <div className="Front" id="testing">
      <h1 className="intro">
        Hi <span className="wave">👋</span> I'm Danny,
        <br />
      </h1>

      <div>
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">Web Developer,</li>
              <li className="content__container__list__item">Frontend Developer,</li>
              <li className="content__container__list__item">UI Developer,</li>
              <li className="content__container__list__item">Fullstack Developer,</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h2 className="extra">who derives great satisfaction from building better, more efficient code as well as working in details and designs of the product to achieve superb UX/UI.</h2>
      </div>
    </div>
  );
};

// Vancouver-based Web Developer who
