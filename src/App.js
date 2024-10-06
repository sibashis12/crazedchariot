import Navbar from './Navbar';
import Hero from './Hero';
import Transactions from './Transactions';
import About from './About';
import Edit from './Edit';
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
          <Route path="/transactions" exact>
            <Transactions />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route path="/edit/:id" exact>
            <Edit/>
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
