import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Work from './pages/Work/Work'
import Books from './pages/Books/Books'
import Quotes from './pages/Quotes/Quotes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-172429206-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log('mammoth')
  }, [])
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/quotes">
            <Quotes />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
