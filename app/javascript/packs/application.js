import React from 'react'
import ReactDOM from 'react-dom'
import Peter from '../react/src/Peter'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <Peter />,
      reactElement
    )
  }
})
