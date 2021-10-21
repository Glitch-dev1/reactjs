import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Index'
import './App.css';

const App = () => {

  return (
    <Router>
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    </Switch>
    </Router>
  )
}

export default App;