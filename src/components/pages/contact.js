import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="containerContact">
      <div className="contactTitle">contact me</div>
      <div className="dropDown">
        <div className="iconPhone">
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </div>
    </div>
  );
}
