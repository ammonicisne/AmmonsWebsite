import React from "react";

export default function() {
  return (
    <div class="containerHome">
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
        <circle cx="170" cy="170" r="160" stroke="#989898" />
        <circle cx="170" cy="170" r="135" stroke="#858585" />
        <circle cx="170" cy="170" r="110" stroke="#707070" />
        <circle cx="170" cy="170" r="85" stroke="#5D5D5D" />
        <circle cx="170" cy="170" r="60" stroke="#4E4E4E" />
        <circle cx="170" cy="170" r="35" stroke="#3E3E3E" />
        <circle cx="170" cy="170" r="10" stroke="#2E2E2E" />
        <circle cx="170" cy="170" r="0.5" stroke="#DA2D2D" />
      </svg>
    </div>
  );
}
