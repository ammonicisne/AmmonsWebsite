import React from "react";
const navbar = props => {
  console.log(props);
  return (
    <div className="navbar">
      <div className="nbAbout">About</div>
      <div className="nbProjects">Projects</div>
      <div className="nbContact">Contact Info</div>
      <div className="nbAmmon">Ammon</div>
    </div>
  );
};

export default navbar;
