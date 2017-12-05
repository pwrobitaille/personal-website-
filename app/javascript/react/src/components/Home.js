import React, { Component } from 'react'
import About from './/About'
import Projects from './Projects'
import Modal from 'react-modal';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'


class Peter extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
        <div className="text">
          <div className="title-container">
            <div className="title">Peter Robitaille</div>
          </div>

           <div className="link-container">
             <div className="link-grid">
               <a href="https://github.com/pwrobitaille" target="_blank"><div className="fa fa-github" aria-hidden="true"></div></a>
               <NavLink to="/About">About</NavLink>
               <a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
            </div>
         </div>
      </div>
    );
  }
}

export default Peter;
