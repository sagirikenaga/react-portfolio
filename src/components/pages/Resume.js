import React from "react";
import '../styles/ResumePage.css';
import resume from "../../images/resume.png";
import resume2 from "../../images/resume2.png";
import resumepdf from "../../files/bootcamp-resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div id="resume-box">
        <img
          src={resume}
          alt="Resume"
          height="600"
          width="450"
          id="resume-img"
        ></img>
        <img
          src={resume2}
          alt="Resume"
          height="600"
          width="450"
          id="resume-img"
        ></img>
      </div>
      <div id="download-box">
      <a href={resumepdf} download>
        <button id="resume-btn">Download Resume</button>
      </a>
      </div>
    </div>
  );
}
