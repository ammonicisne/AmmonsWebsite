import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faGithub, faLinkedin, faInstagram);

import selfImage from "../images/selfImage.png";

export default function() {
  return (
    <div className="containerContact">
      <div className="contactTitle">contact me</div>
      <div className="dropDown">
        <div className="iconPhone">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div id="contact">
          <div className="info">ammon cisneros</div>
          <div className="info">801-814-9083</div>
          <div className="info">ammon.15.2015.ci@gmail.com</div>
          <div className="info">
            <a href="https://github.com/ammonicisne">
              <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
            </a>
          </div>
          <div className="info">
            <a href="https://www.linkedin.com/in/ammon-cisneros/">
              <FontAwesomeIcon className="icons" icon={["fab", "linkedin"]} />
            </a>
          </div>
          <div className="info">
            <a href="https://www.instagram.com/ammoncodes/">
              <FontAwesomeIcon className="icons" icon={["fab", "instagram"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
