import React from 'react'
import headshot from '../../../../../app/assets/images/peter-headshot.jpg'
import Skills from '../containers/Skills.js'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class About extends React.Component {
  constructor() {
    super();

    this.state = {
      skillsArray: ["Ruby on Rails", "JavaScript", "React.js", "HTML", "CSS", "PostgreSQL", "Git/GitHub", "Responsive Design", "Agile Workflow", "Pair Programming"]
    };
  }

  render() {

    let skills = this.state.skillsArray.map(skill => {
      return(
        <Skills
          skill={skill}
        />
      )
    })

    return(
      <div className="home-page">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-me">
              <div className="name-intro">Hi I'm Peter Robitaille!</div>
              <br />
              <div><img src={headshot} alt="" className="pic" />Born and raised outside of Boston, I'm a drummer, guitar player, avid concert goer, diehard Patriots, Celtics and Liverpool fan, lover of the outdoors and all things active.</div>
              <p>My journey to become a developer began in college. On a whim, I took an intro to computer science course and was fascinated with the creative and problem solving aspects of programming. After graduating college, I worked in account management for five years where I used my knowledge of HTML and CSS to help my clients. It was there I realized I truly had a passion and interest to learn more about coding. A few online courses later and I was hooked! </p>
              <p>I decided to join the three month intensive bootcamp <a href="https://launchacademy.com/" className="launch-link" target="_blank">Launch Academy</a> and pursue my desire to become a programmer. While at Launch, I established an understanding of full stack development and gained experience with fundamental programming concepts, such as pair programming, collaborative development, agile methodologies, and object oriented programming (OOP). I'm beyond excited to put these skills to work as a full stack developer! Feel free to check out my projects and please reach out with any questions.</p>
              Fun fact: I'm on Spotify! I was in a band in high school and we were able to record an album of originals. Check it out! (Don't worry, only the first song is in spanish)
              <br />
              <br />
              <div className="spotify-flex">
                <iframe className="spotify" src="https://open.spotify.com/embed/album/04gqWWBnr9UPVpob4tN2Si" height="100" frameborder="0" allowtransparency="true"></iframe>
              </div>
            </div>
          </div>
          <div className="skills-learning-container">
            <div className="skills-grid">
              <div className="skills-title">Skills</div>
              <div className="skills">
                <div className="skills-loop">{skills}</div>
              </div>
            </div>
            <div className="skills-grid">
              <div className="skills-title">Learning</div>
              <div className="skills">
                <div className="skills-name">Python </div>
              </div>
            </div>
          </div>
        </div>
      <div className="scroll-link">Projects</div>
      <Link activeClass="active" className="fa fa-chevron-down" to="projects" spy={true} smooth={true} duration={500}></Link>
    </div>
    )
  }
}
export default About
