import React from 'react'
import ReactDOM from 'react-dom'
import Peter from '../react/src/Peter'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <Peter />
    </BrowserRouter> ), document.getElementById('app'));
})
