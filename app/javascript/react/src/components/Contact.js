import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Contact = props => {
  return(
    <div className="home-page">
      <div className="contact-container">
        <div className="contact-grid">
          <h1 className="contact-header">Contact</h1>
              <div className="say-hi">Feel free to say hi!</div>
            <div className="contact-info">
              <div>Peter Robitaille</div>
            </div>
            <div className="contact-info">
              <div>(978) 505-2753</div>
            </div>
            <div className="contact-info-email">
              <div><a href="mailto:pwrobitaille@gmail.com" className="email">pwrobitaille@gmail.com</a></div>
            </div>
          <div className="contact-info-grid">
            <div className="contact-info-resume">
              <div><a href="https://github.com/pwrobitaille" target="_blank"><div id="logo" className="fa fa-github" aria-hidden="true"></div></a></div>
              <div><a href="/Peter Robitaille Resume.pdf" target="_blank" className="resume">Resume</a></div>
              <div><a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><div id="logo" className="fa fa-linkedin" aria-hidden="true"></div></a></div>
            </div>
          </div>
        </div>
      </div>
        <div className="scroll-link">Home</div>
        <a onClick={props.scroll} duration={500} className="fa fa-chevron-up"></a>
    </div>
  )
}

export default Contact
