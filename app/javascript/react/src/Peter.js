import React, { Component } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


class Peter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <div className="title-container">
        <div className="title">Peter Robitaille</div>
      </div>

        <div className="link-container">
          <div className="link-grid">
            <a href="https://github.com/pwrobitaille"><div className="fa fa-github" aria-hidden="true"></div></a>
            <a href="https://www.linkedin.com/in/pwrobitaille/"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
          </div>
        </div>

        <hr className="horizontal-line"></hr>

        <div className="menu-container">
          <div className="menu-grid">
            <div className="about">About</div>
            <div className="projects">Projects</div>
            <div className="contact">Contact</div>
          </div>
        </div>
      </div>

    )
  }

}

export default Peter;
