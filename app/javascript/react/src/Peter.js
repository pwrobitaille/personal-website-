import React from 'react'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Peter = props => {
  return (
      <div className="text">
        <div className="title-container">
          <div className="title">Peter Robitaille</div>
        </div>

         <div className="link-container">
           <div className="link-grid">
             <a href="https://github.com/pwrobitaille" target="_blank"><div className="fa fa-github" aria-hidden="true"></div></a>
             About
             <a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
          </div>
       </div>
    </div>
  )
}

export default Peter;
