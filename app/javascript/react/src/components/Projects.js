import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = props => {
  return(
    // once I have more project, I will create a database to house them and pull from that to display on this page
      <div className="home-page">
        <div className="projects-container">
          <div className="projects-grid">
            <h1 className="project">Projects</h1>
              <a href="http://www.concertsontour.com" target="_blank" className="project-title">OnTour</a>
                <div className="project-text">
                <p>OnTour is an interactive app that lets users document and track their concert history. Users can enter concert details such as band, venue, opener, and attendees and view data points like total concerts, top artist and top venue.</p>
                <p>I've been going to concerts for as long as I can remember and it's one of my favorite things to do. I began tracking my concert history in high school so I could look back and remember that I saw Bruce Springsteen at Gillette Stadium in 2008 and he played Rosalita in the encore, or that my 100th concert was Hall and Oates. Looking back on the list of shows brings back some of my favorite memories. Having an easy way to keep track of this information seemed like a perfect way to put my new skills to work!</p>
                <p className="demo-account">Demo Account:</p>
                <div>email: concertsontour@gmail.com</div>
                <div>password: testconcertsontour</div>
              </div>
            <p><a href="https://github.com/pwrobitaille/OnTour" className="source-code" target="_blank">Source Code</a></p>
          </div>
        </div>
        <div className="scroll-link">Contact</div>
          <Link activeClass="active" className="fa fa-chevron-down" to="contact" spy={true} smooth={true} duration={500}></Link>
    </div>
  )
}

export default Projects
