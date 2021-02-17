import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Cards2 from './components/Cards2';
import Learn from './components/pages/Learn';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/cards2/:userName' component={Cards2} />
          <Route path='/learn' component={Learn}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
