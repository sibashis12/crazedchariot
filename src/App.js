import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Add from './Add';
import NotFound from './NotFound';
import Visualize from './Visualize';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route exact path="/visualize">
            <Visualize /> 
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <About />
      </div>
    </Router>
  );
}

export default App;
