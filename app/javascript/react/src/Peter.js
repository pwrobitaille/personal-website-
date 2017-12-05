import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Peter = props => {
  return (
    <div>
      <Switch>
        <Route exact path='/About' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default Peter;
