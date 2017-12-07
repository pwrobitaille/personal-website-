import React from 'react'
import project from '../../../../../app/assets/images/OnTour.png'

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = props => {
  return(
    // once I have more projects, I will create a database to house them and pull from that to display on this page
      <div className="home-page">
        <h1 className="project">Projects</h1>
        <div className="projects-container">
          <div className="projects-grid">
              <div className="project-image"><img src={project} size="30%"></img></div>
              <a href="http://www.concertsontour.com" target="_blank" className="project-title">OnTour</a>
                <div className="project-text">
                <p>OnTour is an interactive app that lets users document and track their concert history. Users can enter concert details such as band, venue, opener, and attendees and view data points like total concerts, top artist and top venue.</p>
                <p className="demo-account">Demo Account:</p>
                <div>email: concertsontour@gmail.com</div>
                <div>password: testconcertsontour</div>
              </div>
            <div className="icon-grid">
              <a href="https://github.com/pwrobitaille/OnTour" target="_blank"><div id="logo" className="fa fa-github" aria-hidden="true"></div></a>
              <a href="http://www.concertsontour.com" target="_blank"><div id="logo" className="fa fa-link" aria-hidden="true"></div></a>
            </div>
          </div>
        </div>
        <div className="scroll-link">Contact</div>
          <Link activeClass="active" className="fa fa-chevron-down" to="contact" spy={true} smooth={true} duration={500}></Link>
    </div>
  )
}

export default Projects
