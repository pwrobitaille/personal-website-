import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'


class Home extends Component {
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
                <div><NavLink to="/About">About</NavLink></div>
                <div><NavLink to="/Projects">Projects</NavLink></div>
                <div><NavLink to="/Resume">Resume</NavLink></div>
          </div>
        </div>
      </div>

    )
  }

}

export default Home;
