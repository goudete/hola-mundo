import './App.css';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Work from './pages/Work/Work'
import ReadingList from './pages/ReadingList/ReadingList'
import Quotes from './pages/Quotes/Quotes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
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
            <ReadingList />
          </Route>
        </Switch>
      </Router>
    </div>
    // <div className="App">
    //   <Navbaroo />
    //   <header className="App-header">
    //     <h1>
    //       Welcome friend.
    //     </h1>
    //     <h3>
    //       Have a look around. If you have any questions, <br />
    //       This is where you can find me: <br />

    //     </h3>
    //     <p>
          
    //       Twitter: @EnriqueGoudet <br />
    //       Instagram: @quiquegdt
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
