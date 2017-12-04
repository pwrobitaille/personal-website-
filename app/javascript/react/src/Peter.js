import React, { Component } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Modal from 'react-modal';


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(54, 28, 32, 0.75)'
  },
  content : {
    borderRadius      : '25px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    padding                : '40px',
    // marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '700px',
    backgroundColor       : 'rgb(242,234,222)'

  }
};

class Peter extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <div className="text">
          <div className="title-container">
            <div className="title">Peter Robitaille</div>
          </div>

           <div className="link-container">
             <div className="link-grid">
               <div onClick={this.openModal} className="resume">Projects</div>
               <Modal
                 isOpen={this.state.modalIsOpen}
                 onAfterOpen={this.afterOpenModal}
                 onRequestClose={this.closeModal}
                 style={customStyles}
                 contentLabel="Projects"
                 >
                  <Projects />
               </Modal>
                 <a href="https://github.com/pwrobitaille" target="_blank"><div className="fa fa-github" aria-hidden="true"></div></a>
                 <a href="https://www.linkedin.com/in/pwrobitaille/" target="_blank"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
              <div><a href="/Peter Robitaille Resume.pdf" target="_blank" className="resume">Resume</a></div>
            </div>
         </div>

           <hr className="horizontal-line"></hr>

           <div>
             <About />
          </div>
         </div>
    );
  }
}

export default Peter;
