import React, { Component } from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';
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
            <Accordion>
              <AccordionItem title="About">
                <div><About /></div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem title="Projects">
                <div><Projects /></div>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem title="Contact">
                <div><Contact /></div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

    )
  }

}

export default Peter;
