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
    backgroundColor   : 'rgba(67, 145, 217, 0.75)'
  },
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    padding                : '40px',
    // marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '700px'

  }
};

class Peter extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <div>
          <div className="title-container">
            <div className="title">Peter Robitaille</div>
          </div>

           <div className="link-container">
             <div className="link-grid">
               <div onClick={this.openModal}>Projects</div>
               <Modal
                 isOpen={this.state.modalIsOpen}
                 onAfterOpen={this.afterOpenModal}
                 onRequestClose={this.closeModal}
                 style={customStyles}
                 contentLabel="Projects"
                 >
                 <h2 ref={subtitle => this.subtitle = subtitle}>Projects</h2>
                  <Projects />
                 <button onClick={this.closeModal}>close</button>
               </Modal>
                 <a href="https://github.com/pwrobitaille"><div className="fa fa-github" aria-hidden="true"></div></a>
                 <a href="https://www.linkedin.com/in/pwrobitaille/"><div className="fa fa-linkedin" aria-hidden="true"></div></a>
              <div>Resume</div>
            </div>
            {/* </div>
           </div> */}
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
