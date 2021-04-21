import React, { useState, Fragment } from "react";
import "../styles/Experience.scss";

export const Experience = () => {
  const [chosenCompany, setCompany] = useState("Mapster");

  return (
    <div className="Experience" id="Experience">
      <div className="header">
        <span>02.</span>
        <h1>Where I've Worked</h1>
      </div>
      <div className="detail">
        <ul className="companies">
          <li onClick={() => setCompany("Mapster")} className={chosenCompany === "Mapster" && "chosenCompany"}>
            Mapster
          </li>
          <li onClick={() => setCompany("Onikon")} className={chosenCompany === "Onikon" && "chosenCompany"}>
            Onikon
          </li>
          <li onClick={() => setCompany("Kater")} className={chosenCompany === "Kater" && "chosenCompany"}>
            Kater
          </li>
          <li onClick={() => setCompany("Euroline")} className={chosenCompany === "Euroline" && "chosenCompany"}>
            Euroline
          </li>
          <li onClick={() => setCompany("INI")} className={chosenCompany === "INI" && "chosenCompany"}>
            INI
          </li>
        </ul>

        <div className="info">
          {chosenCompany === "Mapster" && (
            <Fragment>
              <h2>
                Jr. Web Developer <span>@ Mapster Technology Inc.</span>
              </h2>
              <h4>Oct 2020 - Current</h4>
              <ul>
                <li>Developed performant, responsive, maintainable code for a diverse array of client and internal projects</li>
                <li>Worked with a variety of different platforms, frameworks, languages and CMSs, such as, React/Redux, Gatsby, Wordpress, Next, React Native, Moodle and Unity</li>
                <li>Co-operated and communicated with multi-disciplinary teams of developers, engineers, designers and clients on a daily basis</li>
                <li>Architectured and implemented the front-end of many web products to meet the clients' requirements and provide them superb UX/UI</li>
              </ul>
            </Fragment>
          )}

          {chosenCompany === "Onikon" && (
            <Fragment>
              <h2>
                Jr. Frontend Developer <span>@ Onikon Creative Inc.</span>
              </h2>
              <h4>Jan 2020 - Oct 2020</h4>
              <ul>
                <li>Collected and documented clients' requirements and developed logical and physical specifications</li>
                <li>Consulted with clients and designers to finalize and implement the product UI designs</li>
                <li>Maintained the website with up-to-date contents and client's new requested features</li>
                <li>Developed highly interactive and responsive websites upon client's request</li>
                <li>Helped solidify a brand direction for the company to span across marketing, designing, and developing</li>
              </ul>
            </Fragment>
          )}

          {chosenCompany === "Kater" && (
            <Fragment>
              <h2>
                Web Developer Intern <span>@ Kater Technologies Inc.</span>
              </h2>
              <h4>July 2019 - Nov 2019</h4>
              <ul>
                <li>Developed the front-end UI components and features for the drivers to register and modify their work-shift information</li>
                <li>Implemented the logic and feature for the drivers to modify their account credentials</li>
                <li>Collaborated with various clients, engineers, and designers to shape the user-friendly UI</li>
                <li>Interfaced with clients/drivers on a weekly basis, sharing and resolving technical issues</li>
                <li>Tested and performed QA and optimized code for performance and maintainability</li>
                <li>Worked closely with designers to develop, document and manage the components developed for a newly created company website</li>
              </ul>
            </Fragment>
          )}

          {chosenCompany === "Euroline" && (
            <Fragment>
              <h2>
                Product Engineer <span>@ Euroline Windows</span>
              </h2>
              <h4>Aug 2018 - Mar 2019</h4>
              <ul>
                <li>Improved product manufacturing process through 5S lean implementation</li>
                <li>Designed of production tooling, component, and assembly with AutoCAD</li>
                <li>Analyzed project specifications and designed the products to meet project requirements</li>
                <li>Developed and improved product concepts to meet design and budgetary constraints</li>
                <li>Manufactured windows, glasses and doors referring to National Building Codes</li>
              </ul>
            </Fragment>
          )}

          {chosenCompany === "INI" && (
            <Fragment>
              <h2>
                Software Technician <span>@ INI Solutions</span>
              </h2>
              <h4>Sept 2015 - Aug 2018</h4>
              <ul>
                <li>Maintained the technical user guide manuals up to date on daily a basis</li>
                <li>Gathered market information and provided the strategic partnership services to clients</li>
                <li>Installed company's software to our clients' business and provided after-sales services</li>
                <li>Implemented, modified and resolved clients' technical requests with the software</li>
                <li>Created products for the clients with the company's softare</li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
