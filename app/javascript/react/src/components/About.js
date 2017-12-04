import React from 'react'
import headshot from '../../../../../app/assets/images/peter-headshot.jpg'

const About = props => {
  return(
    <div>
      <div className="about-container">
        <div className="about-grid">
          <img src={headshot} alt="" className="pic" />
          <div className="about-me">
            <div>Hi I'm Peter Robitaille! Born and raised outside of Boston, I'm a drummer, guitar player, avid concert goer, die hard Patriots, Celtics and Liverpool fan and lover of the outdoors and all things active.</div>
            <p>My journey to become a developer began in college. On a whim, I took an intro to computer science course and was fascinated with the creative and problem solving aspects of programming. After graduating college and working in account management for five years while using my knowlege of HTML and CSS to assist my clients, I realized I truly had a passion and interest to learn more. A few online courses later and I was hooked! </p>
            <p>I decided to join the three month intensive bootcamp <a href="https://launchacademy.com/" className="email">Launch Academy</a> and solidify my desire to become a programmer. While at Launch, I established an understanding of full stack development and gained experience with fundamental programming concepts, such as pair programming, collaborative development, agile methodologies, and object oriented programming (OOP). I'm beyond excited to put these skills to work as a full stack developer! Feel free to check out my projects and please reach out with any questions.</p>
          </div>
        </div>
      </div>
      <div className="contact about-me">
        <div className="contact-info">
          <div>(978) 505-2753</div>
        </div>
        <div className="contact-info">
          <div><a href="mailto:pwrobitaille@gmail.com" className="email">pwrobitaille@gmail.com</a></div>
        </div>
      </div>
    </div>
  )
}

export default About
