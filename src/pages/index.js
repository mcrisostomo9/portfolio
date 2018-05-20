import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import whiteboard from '../assets/images/whiteboard.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
          <div>
              <Helmet title={siteTitle}/>

              <section id="one" className="main style1">
                  <div className="grid-wrapper">
                      <div className="col-6">
                          <header className="major">
                              <h2>Who I am</h2>
                          </header>
                          <p>
                              Web developer at Devise
                              Interactive primarily focused on the front end
                              since June 2017.  I've developed multiple responsive
                              web applications for various clients ranging from a headless WordPress site utlizing GatsbyJS,
                              custom fully built fundraising platforms, to Shopify e-commerce websites.



                          </p>
                      </div>
                      <div className="col-6">
                          <span className="image fit"><img src={whiteboard} alt="Whiteboarding session"/></span>
                      </div>
                  </div>
              </section>

              <section id="two" className="main style2">
                  <div className="grid-wrapper">
                      <div className="col-6">
                          <ul className="major-icons">
                              <li><span className="icon style1 major fa-code"/></li>
                              <li><span className="icon style2 major fa-bolt"/></li>
                              <li><span className="icon style3 major fa-camera-retro"/></li>
                              <li><span className="icon style4 major fa-cog"/></li>
                              <li><span className="icon style5 major fa-desktop"/></li>
                              <li><span className="icon style6 major fa-calendar"/></li>
                          </ul>
                      </div>
                      <div className="col-6">
                          <header className="major">
                              <h2>Tech Stack</h2>
                          </header>
                          <p>Current dev stack:</p>
                          <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JavaScript</li>
                              <li>React</li>
                              <li>Redux</li>
                              <li>TypeScript</li>
                          </ul>
                          <p>Technologies/Frameworks I've used/currenlty learning:</p>
                          <ul>
                              <li>NodeJS</li>
                              <li>Kotlin</li>
                              <li>Java</li>
                              <li>Flutter</li>
                              <li>Golang</li>
                          </ul>
                      </div>
                  </div>
              </section>

              <section id="three" className="main style1 special">
                  <div className="grid-wrapper">
                      <div className="col-12">
                          <header className="major">
                              <h2>Adipiscing amet consequat</h2>
                          </header>
                          <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                      </div>

                      <div className="col-4">
                          <span className="image fit"><img src={pic02} alt=""/></span>
                          <h3>Magna feugiat lorem</h3>
                          <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis
                              sed volutpat et nascetur.</p>
                          <ul className="actions">
                              <li><a href="#" className="button">More</a></li>
                          </ul>
                      </div>
                      <div className="col-4">
                          <span className="image fit"><img src={pic03} alt=""/></span>
                          <h3>Magna feugiat lorem</h3>
                          <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis
                              sed volutpat et nascetur.</p>
                          <ul className="actions">
                              <li><a href="#" className="button">More</a></li>
                          </ul>
                      </div>
                      <div className="col-4">
                          <span className="image fit"><img src={pic04} alt=""/></span>
                          <h3>Magna feugiat lorem</h3>
                          <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis
                              sed volutpat et nascetur.</p>
                          <ul className="actions">
                              <li><a href="#" className="button">More</a></li>
                          </ul>
                      </div>

                  </div>
              </section>

              <section id="four" className="main style2 special">
                  <div className="container">
                      <header className="major">
                          <h2>Ipsum feugiat consequat?</h2>
                      </header>
                      <p>Sed lacus nascetur ac ante amet sapien.</p>
                      <ul className="actions uniform">
                          <li><a href="#" className="button special">Sign Up</a></li>
                          <li><a href="#" className="button">Learn More</a></li>
                      </ul>
                  </div>
              </section>
          </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;