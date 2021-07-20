import React, { useState, Fragment } from "react";
import Zoom from "react-reveal/Zoom";

export const OtherWork = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="otherWorks">
      <Zoom>
        <h2>Other Noteworthy Projects</h2>
      </Zoom>

      {/* URBANFORM */}
      <Zoom>
        <a className="otherWork" href="https://urbanform-frontend-staging.herokuapp.com/" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="https://urbanform-frontend-staging.herokuapp.com/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Urbanform</h3>
            <p>
              Urbanform is the demo version of the website I participated at Mapster for the client in Portland, which aggregates and calculates the spatial ramifications of building regulations.{" "}
            </p>
          </div>

          <div className="stacks">
            <span>React</span>
            <span>Redux</span>
            <span>Firebase</span>
            <span>GoogleMaps</span>
          </div>
        </a>
      </Zoom>

      {/* PALMETTO */}
      <Zoom>
        <a className="otherWork" href="https://www.palmettopark.com" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="https://github.com/mapstertech/palmetto-park" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.palmettopark.com" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Palmetto Park Realty</h3>
            <p>One of the projects I participated as a Frontend dev. at Mapster for the client in US. Users are able to access Real Estate information they need more efficiently and conveniently. </p>
          </div>

          <div className="stacks">
            <span>React</span>
            <span>Redux</span>
            <span>Next</span>
            <span>GoogleMaps</span>
          </div>
        </a>
      </Zoom>

      {/* RAIN MARKETING */}
      <Zoom>
        <a className="otherWork" href="https://rainmarketing.ca/" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="https://rainmarketing.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Rain Marketing</h3>
            <p>Website I built for the client to assist them providing valuable sales and marketing strategies/services to their customers.</p>
          </div>

          <div className="stacks">
            <span>Wordpress</span>
            <span>PHP</span>
            <span>jQuery</span>
            <span>API</span>
          </div>
        </a>
      </Zoom>

      {/* NOMI MALK */}
      <Zoom>
        <a className="otherWork" href="http://evaluations.asknomi.ca/" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="http://evaluations.asknomi.ca/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Nomi Malik Landing Page</h3>
            <p>Custom designed landing page and evaluating website built for one of our clients, Nomi Malik, a Realtor, who specializes in marketing single family houses and condos in Vancouver </p>
          </div>

          <div className="stacks">
            <span>Vue</span>
            <span>PHPMailer</span>
            <span>SCSS</span>
            <span>GoogleMaps</span>
          </div>
        </a>
      </Zoom>

      {/* PLATEAU */}
      <Zoom>
        <a className="otherWork" href="https://plateau.herokuapp.com/" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="https://github.com/Gimorhee/Plateau" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://plateau.herokuapp.com/" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Plateau</h3>
            <p>
              Plateau is my first Full-stack eCommerce website I built with MERN stacks. User login is required to complete orders and a confirmation email will be sent to user's provided email upon
              the order completion
            </p>
          </div>

          <div className="stacks">
            <span>React</span>
            <span>Redux</span>
            <span>Node/Mongo</span>
            <span>SendGrid</span>
          </div>
        </a>
      </Zoom>

      {/* ANDREA CASTRO */}
      <Zoom>
        <a className="otherWork" href="https://andreacastro.ca" target="_blank" rel="noreferrer">
          <div className="topIcons">
            <div className="left">
              <i class="far fa-folder"></i>
            </div>
            <div className="right">
              <a href="https://andreacastro.ca" target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div className="detail">
            <h3>Andrea Castro Realty</h3>
            <p>
              One of the Real Estate websites built for the client. The client and his clients are able to efficiently communicate, access and retrieve the Real Estate information through the custom
              built IDX plugin implemented
            </p>
          </div>

          <div className="stacks">
            <span>Wordpress</span>
            <span>PHP</span>
            <span>jQuery</span>
            <span>API</span>
          </div>
        </a>
      </Zoom>

      {showMore === true && (
        <Fragment>
          {/* PORTFOLIO2 */}
          <Zoom>
            <a className="otherWork" href="https://gimorhee.github.io/portfolio-v2/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://github.com/Gimorhee/portfolio-v2" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://gimorhee.github.io/portfolio-v2/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Portfolio V2</h3>
                <p>Previous version of my portfolio I developed with React</p>
              </div>

              <div className="stacks">
                <span>React</span>
                <span>ReactSpring</span>
                <span>SCSS</span>
                <span>Netlify</span>
              </div>
            </a>
          </Zoom>

          {/* WATCH ME */}
          <Zoom>
            <a className="otherWork" href="https://watchm3.netlify.app/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://github.com/Gimorhee/WatchMe" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://watchm3.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Watch Me</h3>
                <p>
                  Watch Me is an application that specializes in watch trading, repairing and customizing. Watch Me offers a wide assortment of Classic and Luxury watch models and services to suffice
                  all customers needs{" "}
                </p>
              </div>

              <div className="stacks">
                <span>React</span>
                <span>ReactSpring</span>
                <span>SCSS</span>
                <span>Netlify</span>
              </div>
            </a>
          </Zoom>
          {/* MIKE MALFORI */}
          <Zoom>
            <a className="otherWork" href="https://www.mikemarfori.com/grandview-collection-at-grandview-heights/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://www.mikemarfori.com/grandview-collection-at-grandview-heights/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Grandview Collection</h3>
                <p>Advertising website I built for the client to advertise 'Grandview Collection' houses - currently sold out</p>
              </div>

              <div className="stacks">
                <span>Wordpress</span>
                <span>PHP</span>
                <span>jQuery</span>
                <span>API</span>
              </div>
            </a>
          </Zoom>

          {/* BILL DRITSAS */}
          <Zoom>
            <a className="otherWork" href="https://dritsasrealty.com/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://dritsasrealty.com/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Bill Dritsas Realty</h3>
                <p>One of the Real Estate websites built for the client. Custom IDX plugin is implemented</p>
              </div>

              <div className="stacks">
                <span>Wordpress</span>
                <span>PHP</span>
                <span>jQuery</span>
                <span>API</span>
              </div>
            </a>
          </Zoom>

          {/* FRASERPARK REALTY */}
          <Zoom>
            <a className="otherWork" href="http://fraserparkrealty.com/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="http://fraserparkrealty.com/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Fraserpark Realty</h3>
                <p>Website built for advertising purposes. Fraserpark realty specializes in the Property Management of retail, office and industrial properties</p>
              </div>

              <div className="stacks">
                <span>Wordpress</span>
                <span>PHP</span>
                <span>jQuery</span>
                <span>API</span>
              </div>
            </a>
          </Zoom>

          {/* DOLLAR TRACKER */}
          <Zoom>
            <a className="otherWork" href="https://your-dollar-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://github.com/Gimorhee/DollarTracker" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://your-dollar-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Dollar Tracker</h3>
                <p>An expense calculating application built with React for the front and MongoDB for the backend. React Context was used to manage the application states</p>
              </div>

              <div className="stacks">
                <span>React</span>
                <span>ContextAPI</span>
                <span>Node</span>
                <span>MongoDB</span>
              </div>
            </a>
          </Zoom>

          {/* LET's CHAT */}
          <Zoom>
            <a className="otherWork" href="https://www.earthdefenderstoolkit.com/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://www.earthdefenderstoolkit.com/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Earth Defender Toolkit</h3>
                <p>
                  The mission of the Earth Defenders Toolkit is to provide and promote approaches to using technology in a way that supports local autonomy and ownership over tools and data, and
                  reduces reliance on outside support.
                </p>
              </div>

              <div className="stacks">
                <span>WordPress</span>
                <span>PHP</span>
                <span>jQuery</span>
              </div>
            </a>
          </Zoom>

          {/* PORTFOLIO V1 */}
          <Zoom>
            <a className="otherWork" href="https://gimorhee.github.io/portfolio-v1/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://gimorhee.github.io/portfolio-v1/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>Portfolio V1</h3>
                <p>Previous version of my portfolio built with jQuery</p>
              </div>

              <div className="stacks">
                <span>jQuery</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </a>
          </Zoom>

          {/* LET's CHAT */}
          <Zoom>
            <a className="otherWork" href="https://react-lets-chat.netlify.app/" target="_blank" rel="noreferrer">
              <div className="topIcons">
                <div className="left">
                  <i class="far fa-folder"></i>
                </div>
                <div className="right">
                  <a href="https://react-lets-chat.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <div className="detail">
                <h3>LetsChat</h3>
                <p>A real-time chat application built with React, Node, Socket.io where users may create rooms and chat with others online</p>
              </div>

              <div className="stacks">
                <span>React</span>
                <span>SocketIO</span>
                <span>Node</span>
                <span>Heroku</span>
              </div>
            </a>
          </Zoom>
        </Fragment>
      )}

      <Zoom>
        <div style={{ width: "100%" }}>
          <button className="showMoreBtn" onClick={() => setShowMore(!showMore)}>
            Show {showMore ? "Less" : "More"}
          </button>
        </div>
      </Zoom>
    </div>
  );
};
