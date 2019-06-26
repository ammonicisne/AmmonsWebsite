import React, { Component } from "react";
import axios from "axios";

import ProjectItem from "../projects/projectitem";

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my projects",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getProjectItems() {
    axios
      .get("https://ammonicisne.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  projectItems() {
    return this.state.data.map(item => {
      return <ProjectItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getProjectItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return <div className="project-items-wrapper">{this.projectItems()}</div>;
  }
}
