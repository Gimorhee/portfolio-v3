import React, { Fragment } from "react";
import LS from "../../images/projects/LS.png";
import booster from "../../images/projects/booster.png";
import vsCorona from "../../images/projects/vsCorona.png";
import andreaCastro from "../../images/projects/andreaCastro.png";
import westport from "../../images/projects/westport.png";
import jess from "../../images/projects/jess.png";
import project44 from "../../images/projects/project44.png";
import tindog from "../../images/projects/tindog.png";

import Fade from "react-reveal/Fade";

export const FeaturedWork = () => {
  return (
    <Fragment>
      {/* PROJECT44 */}
      <Fade left>
        <div className="project2">
          <a className="detail" href="https://map.project44.ca/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Project '44</h2>
            <p>Project '44 is a web showcase of the Battle of Normandy that I participated in creating for the Canadian Research and Mapping Association. Currently in beta.</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>MapboxGl</li>
            </ul>
            <div className="links">
              {/* <a href="">
                  <i className="fab fa-github"></i>
                </a> */}
              <a href="https://map.project44.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>

          <a
            href="https://map.project44.ca/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${project44})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
        </div>
      </Fade>

      {/* LEARN DITIDAHT */}
      <Fade right>
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
              Learn Ditidaht is an interactive language learning tool, built with an intention/effort to preserve the Ditidaht First Nation language as there are only 6 fluent speakers of their native
              language on Vancouver Island. Try learning Ditidaht language!
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Wordpress</li>
              <li>PHP</li>
            </ul>
            <div className="links">
              {/* <a href="">
                  <i className="fab fa-github"></i>
                </a> */}
              <a href="https://learnditidaht.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>
        </div>
      </Fade>

      {/* WESTPORT PROPERTIES */}
      <Fade left>
        <div className="project2">
          <a className="detail" href="https://westportproperties.com/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Westport Properties Inc.</h2>
            <p>
              Westport Properties website is one of the Real Estate websites I built upon my client's design and functionality requirements. The client and her clients are able to efficiently
              communicate, access and retrieve the Real Estate information through the custom built IDX plugin implemented
            </p>
            <ul>
              <li>jQuery</li>
              <li>Wordpress</li>
              <li>PHP</li>
              <li>Realty API</li>
            </ul>
            <div className="links">
              {/* <a href="">
                  <i className="fab fa-github"></i>
                </a> */}
              <a href="https://westportproperties.com/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>

          <a
            href="https://westportproperties.com/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${westport})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
        </div>
      </Fade>

      {/* JESS RESTAURANT */}
      <Fade right>
        <div className="project1">
          <a
            href="https://jessrestaurant.ca/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${jess})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
          <a className="detail" href="https://jessrestaurant.ca/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Jess' Restaurant</h2>
            <p>
              One of the Restaurant websites I created upon my client's design and functionality requirements. Co-operated with one of the desingers, and converted the design into the finalized web
              product. From this website, customers are able to checkout the menus and make a reservation.
            </p>
            <ul>
              <li>jQuery</li>
              <li>Wordpress</li>
              <li>PHP</li>
              <li>SSL</li>
            </ul>
            <div className="links">
              {/* <a href="">
                  <i className="fab fa-github"></i>
                </a> */}
              <a href="https://jessrestaurant.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>
        </div>
      </Fade>

      {/* ANDREA CASTRO */}
      <Fade left>
        <div className="project2">
          <a className="detail" href="https://andreacastro.ca/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Andrea Castro</h2>
            <p>
              Andrea Castro Realty is one of the Real Estate websites I built upon my client's design and functionality requirements. The client and her clients are able to efficiently communicate,
              access and retrieve the Real Estate information through the custom built IDX plugin implemented
            </p>
            <ul>
              <li>jQuery</li>
              <li>Wordpress</li>
              <li>PHP</li>
              <li>Realty API</li>
            </ul>
            <div className="links">
              {/* <a href="">
                  <i className="fab fa-github"></i>
                </a> */}
              <a href="https://andreacastro.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>

          <a
            href="https://andreacastro.ca/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${andreaCastro})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
        </div>
      </Fade>

      {/* TINDOG */}
      <Fade right>
        <div className="project1">
          <a
            href="https://we-are-tindog.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${tindog})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
          <a className="detail" href="https://we-are-tindog.herokuapp.com/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Tindog</h2>
            <p>
              Tindog is an online application helping animal lovers find like-minded friends for themselves and for their lovely pets. Try it and find your dogs walk buddies or their true love. Woof!
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>MapboxGL</li>
              <li>API</li>
              <li>Express</li>
            </ul>
            <div className="links">
              <a href="https://github.com/Gimorhee/TD" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://we-are-tindog.herokuapp.com/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>
        </div>
      </Fade>

      {/* VSCORONA */}
      <Fade left>
        <div className="project2">
          <a className="detail" href="https://vscorona.netlify.app/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>vsCorona</h2>
            <p>
              Due to ongoing serious world-wide pandemic situation, I found myself googling to check up current status by going through various websites. I built vsCorona for myself, friends, and
              families to easily and conveniently check up-to-date COVID-19 information in Canada, S. Korea, and the world.
            </p>
            <ul>
              <li>Covid API</li>
              <li>React</li>
              <li>React-Chart</li>
              <li>Postman</li>
            </ul>
            <div className="links">
              <a href="https://github.com/Gimorhee/vsCorona" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://vscorona.netlify.app/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>
          <a
            href="https://vscorona.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="image"
            style={{
              backgroundImage: `url(${vsCorona})`,
            }}
          >
            <div className="imageOverlay"></div>
          </a>
        </div>
      </Fade>

      {/* BOOSTER */}
      <Fade right>
        <div className="project1">
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
          <a className="detail" href="https://boost3r.netlify.app/" target="_blank" rel="noreferrer">
            <h4>Featured Project</h4>
            <h2>Booster</h2>
            <p>
              Booster is a ping boosting service provider that I designed and developed for my fictional client. Booster provides users with a better internet connection, reduced latency, lower ping,
              and far fewer lost packets to experience a superior gaming experience.
            </p>
            <ul>
              <li>React</li>
              <li>React-Spring</li>
              <li>SCSS</li>
              <li>Netlify</li>
            </ul>
            <div className="links">
              <a href="https://github.com/Gimorhee/Booster" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://boost3r.netlify.app/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </a>
        </div>
      </Fade>
    </Fragment>
  );
};
