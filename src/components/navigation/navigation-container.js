import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="nav-link-wrapper">
        <NavLink to="/" activeClassName="nav-link-active">
          ammon
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/about-me" activeClassName="nav-link-active">
          about
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/" activeClassName="nav-link-active">
          projects
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/contact-info" activeClassName="nav-link-active">
          contact info
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
