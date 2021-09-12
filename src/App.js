
import './App.css';
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Headers from "./components/Headers";
import "./pages/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Staff from './pages/staff';
function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/staff">
            <Staff />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
