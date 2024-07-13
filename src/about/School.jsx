import React from "react";
import "./school.css";
import umdLogo from "../../assets/umd.png";
const School = () => {
  return (
    <div className="edu_box">
      <div className="title">My Education</div>
      <div className="content">
        <img className="umd_logo" src={umdLogo} alt="umd_logo" />
        <ul className="text">
          <div className="bach">Bachelor of Computer Science</div>
          <div className="uni">University of Maryland College Park</div>

          <ul>
            {" "}
            <li>Graduated May 2024</li>
            <li>GPA: 3.48 / 4</li>
            <li>Computer Science Major</li>
            <li>Business Minor</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default School;
