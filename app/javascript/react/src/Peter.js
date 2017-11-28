import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'


class Peter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path='/About' component={About} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Resume' component={Resume} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>

    )
  }

}

export default Peter;
