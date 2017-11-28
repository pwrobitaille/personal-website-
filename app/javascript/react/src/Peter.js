import React, { Component } from 'react'


class Peter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div class="container">
        <div class="title">Peter Robitaille</div>
          <a href="https://github.com/pwrobitaille"><div class="fa fa-github" aria-hidden="true"></div></a>
          <a href="https://www.linkedin.com/in/pwrobitaille/"><div class="fa fa-linkedin" aria-hidden="true"></div></a>

        <hr class="horizontal-line"></hr>

        <div class="menu">
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>

    )
  }

}

export default Peter;
