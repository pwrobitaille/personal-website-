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
        <div className="element">
          <div className="home-page">
            <div className="title-container">
              <div className="title">Peter Robitaille</div>
            </div>

             <div className="link-container">
               <div className="link-grid">
                 <a href="https://github.com/pwrobitaille" target="_blank"><div className="fa fa-github" aria-hidden="true"></div></a>
                 <a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
              </div>
           </div>
           <div className="navbar-container">
             <div className="navbar-grid">
               <Link activeClass="active" className="nav-text" to="same" spy={true} smooth={true} duration={500} >About</Link>
               <div className="dot">・</div>
               <Link activeClass="active" className="nav-text" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
               <div className="dot">・</div>
               <Link activeClass="active" className="nav-text" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
             </div>
           </div>
           <div className="scroll-link">About</div>
           <Link activeClass="active" className="fa fa-chevron-down" to="same" spy={true} smooth={true} duration={500} ></Link>
         </div>
      </div>

        <Element id="same" className="element">
          <About />
        </Element>


        <Element id="projects" className="element">
          <Projects />
        </Element>

        <Element id="contact" className="element">
          <Contact scroll={this.scrollToTop}/>
        </Element>

        {/* <a onClick={this.scrollToTop} duration={500}>To the top!</a> */}

      </div>
    );
  }
};


export default Peter;
