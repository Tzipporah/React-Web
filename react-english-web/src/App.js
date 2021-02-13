import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Cards2 from './components/Cards2'
import firebase from 'firebase';
import styleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/cards2' component={Cards2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
