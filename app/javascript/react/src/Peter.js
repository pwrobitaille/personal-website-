import React, { Component } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Peter extends React.Component{
  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="nav navbar-nav">
                <Link activeClass="active" className="about-text" to="same" spy={true} smooth={true} duration={500} >About</Link>
                <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
                <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="text element">
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
         <Link activeClass="active" className="about-text" to="same" spy={true} smooth={true} duration={500} >About</Link>
      </div>

        <Element id="same" className="element">
          <About />
          <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
        </Element>


        <Element id="projects" className="element">
          <Projects />
          <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
        </Element>

        <Element id="contact" className="element">
          <Contact />
        </Element>

        <a onClick={this.scrollToTop} duration={500}>To the top!</a>

      </div>
    );
  }
};


export default Peter;
