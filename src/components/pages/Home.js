import React from 'react';
import myphoto from '../../images/my-photo.png'

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={myphoto} alt="Sagiri" height="400"></img>
      <div id="textbox">
      <p>
      Hello! My name is Sagiri (pronounced suh-gear-ee) Ikenaga and I am a student in the Full Stack Developer coding Bootcamp at University of Toronto SCS. 
      I completed a Bachelor of Science in Neuroscience and I am currently finishing up a Master of Engineering in Biomedical Engineering. 
      I am passionate about the growing technology and software field, and hope to eventually integrate my work in these fields and apply my knowledge within the medical field. 
      </p>
      <p>Some of the programming languages and frameworks I've worked with are:</p>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
      </ul>
      </div>
    </div>
  );
}
