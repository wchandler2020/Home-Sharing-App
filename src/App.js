import {Component} from "react";
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/utility/Navbar/Navbar";
import SingleVenue from "./components/pages/SingleVenue/SingleVenue";

class App extends Component{
  render(){
    return(
      <Router>
        <Route path="/" component={Navbar} />
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/venue/:vid" exact component={SingleVenue} />
        </div>
      </Router>
    )
  }
}

export default App;


