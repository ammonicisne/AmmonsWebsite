import React from "react";

const animate = props => {
  console.log(props);
  return (
    <div class="container">
      <div className="welcome">W</div>
      <div className="welcome">e</div>
      <div className="welcome">l</div>
      <div className="welcome">c</div>
      <div className="welcome">o</div>
      <div className="welcome">m</div>
      <div className="welcome">e</div>

      <svg
        class="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="160" stroke="#19fc46" />
        <circle cx="170" cy="170" r="135" stroke="#01E9FA" />
        <circle cx="170" cy="170" r="110" stroke="#19fc46" />
        <circle cx="170" cy="170" r="85" stroke="#01E9FA" />
        <circle cx="170" cy="170" r="60" stroke="#19fc46" />
        <circle cx="170" cy="170" r="35" stroke="#01E9FA" />
        <circle cx="170" cy="170" r="10" stroke="#19fc46" />
      </svg>
    </div>
  );
};

export default animate;
