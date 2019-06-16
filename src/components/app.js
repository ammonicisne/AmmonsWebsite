import React, { Component } from "react";
import Navbar from "./navbar";
import Animate from "./animate";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Animate />
      </div>
    );
  }
}
