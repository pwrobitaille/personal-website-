import React from 'react'
import OnTour from '../../../../../app/assets/images/OnTour.png'
import SongBook from '../../../../../app/assets/images/SongBook-logo.png'

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = props => {
  return(
    // once I have more projects, I will create a database to house them and pull from that to display on this page
      <div className="home-page">
        <h1 className="project">Projects</h1>
        <div className="projects-container">
          <div className="projects-grid">
              <div className="project-image"><img src={OnTour} size="30%"></img></div>
              <a href="http://www.concertsontour.com" target="_blank" className="project-title">OnTour</a>
                <div className="project-text">
                <p>OnTour is an interactive app that lets users document and track their concert history. Users can enter concert details such as band, venue, opener, and attendees and view data points like total concerts, top artist and top venue.</p>
              </div>
              <div>
                <div className="demo-account">Demo Account:</div>
                <div className="test">
                  <div className="float-test">
                  <div className="email-password">email: concertsontour@gmail.com</div>
                  <div className="email-password">password: testconcertsontour</div>
                </div>
                  <div className="project-icons">
                    <a href="https://github.com/pwrobitaille/OnTour" target="_blank"><div id="logo" className="fa fa-github icon" aria-hidden="true"></div></a>
                    <a href="http://www.concertsontour.com" target="_blank"><div id="logo" className="fa fa-link icon" aria-hidden="true"></div></a>
                  </div>
                </div>
            </div>
          </div>
          <div className="projects-grid">
              <div className="project-image"><img src={SongBook} size="25%"></img></div>
              <a href="https://github.com/pwrobitaille/SongBook-Native" target="_blank" className="project-title">SongBook</a>
                <div className="project-text">
                <p>SongBook is a mobile app that allows musicians to keep track of each song they know how to play. Each song a user enters includes the lyrics, chords, tuning, and song notes.</p>
              </div>
              <div>
                <div className="project-icons">
                  <a href="https://github.com/pwrobitaille/SongBook-Native" target="_blank"><div id="logo" className="fa fa-github icon" aria-hidden="true"></div></a>
                </div>
            </div>
          </div>
        </div>
        <div className="scroll-link">Contact</div>
          <Link activeClass="active" className="fa fa-chevron-down" to="contact" spy={true} smooth={true} duration={500}></Link>
    </div>
  )
}

export default Projects
