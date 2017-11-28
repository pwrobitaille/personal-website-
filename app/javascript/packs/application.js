import React from 'react'
import ReactDOM from 'react-dom'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <h1>Hello from React-Rails (webpacker) Boilerplate</h1>,
      reactElement
    )
  }
})
