import "./pskeleton.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
const PSkeleton = (props) => {
  return (
    <div className="project_container">
      <div className="proj_info">
        <div className="proj_name">{props.name}</div>
        <div className="skills_used">
          Made with:{" "}
          {props.skills.map((skill) => (
            <img
              className="proj_skill"
              key={skill}
              src={skill[0]}
              alt={skill[1]}
            />
          ))}{" "}
        </div>

        <div className="proj_desc">{props.desc}</div>
        <div className="video"></div>
      </div>
      <div className="proj_links">
        {" "}
        <a
          className="proj_link"
          href={props.yt}
          target="_blank"
          rel="noreferrer"
        >
          <div className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
            <span>Demo</span>
          </div>
        </a>
        <a
          className="proj_link"
          href={props.git}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <div className="github">
            <FontAwesomeIcon icon={faGithub} className="icons" />
            GitHub
          </div>{" "}
        </a>
      </div>
    </div>
  );
};

export default PSkeleton;
