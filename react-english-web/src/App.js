import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Categories_cards from './components/Categories_cards';
import MainPage from './components/pages/MainPage';
import Test from './components/pages/Test';
import Learn from './components/pages/Learn';
import Word_completion from './components/pages/Word_completion'
import ScrollToTop from './ScrollToTop'
import Game from './components/pages/Game'


function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/main-page' component={MainPage} />
          <Route path='/Categories_cards/:level' component={Categories_cards} />
          <Route path='/Test/:level' component={Test} />
          <Route path='/learn/:level' component={Learn} />
          <Route path='/word_completion/:level' component={Word_completion} />
          <Route path='/game/:level' component={Game} />
        </Switch>
        </ScrollToTop>
      </Router>
      
    </>
  );
  
}

export default App;
