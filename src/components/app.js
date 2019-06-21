import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact-info" component={Contact} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
