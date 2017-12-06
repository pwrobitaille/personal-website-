import React from 'react'
import ReactDOM from 'react-dom'
import Peter from '../react/src/Peter'
import About from '../react/src/components/About'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Peter /> , document.getElementById('app'));
})
