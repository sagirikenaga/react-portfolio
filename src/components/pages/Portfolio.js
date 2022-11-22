import React from "react";
import "../styles/PortfolioPage.css";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import module3 from "../../images/module3.png";
import module4 from "../../images/module4.png";
import module11 from "../../images/module11.png";
import module19 from "../../images/module19.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id="portfolio-box">
      <div className="project">
        <a href="https://sagirikenaga.github.io/whats-the-word/">
          <img
            src={project1}
            alt="'What's the Word?' Game App"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/sagirikenaga/whats-the-word"
        >
          Github Link
        </a>
      </div>
      <div className="project">
        <a href="https://petplace2141.herokuapp.com/">
          <img
            src={project2}
            alt="Pet's Place Site"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/Favour01216/Adoption-site"
        >
          GitHub Link
        </a>
      </div>
      <div className="project">
        <a href="https://github.com/sagirikenaga/random-password-generator">
          <img
            src={module3}
            alt="Random Password Generator App"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/sagirikenaga/random-password-generator"
        >
          GitHub Link
        </a>
      </div>
      <div className="project">
        <a href="https://sagirikenaga.github.io/coding-quiz/">
          <img
            src={module4}
            alt="Coding Quiz App"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/sagirikenaga/coding-quiz"
        >
          GitHub Link
        </a>
      </div>
      <div className="project">
        <a href="https://si-note-taker.herokuapp.com/">
          <img
            src={module11}
            alt="Note Taker App"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/sagirikenaga/note-taker"
        >
          GitHub Link
        </a>
      </div>
      <div className="project">
        <a href="https://si-note-editor.herokuapp.com/">
          <img
            src={module19}
            alt="Text Editor App"
            height="400"
            className="portfolio-img"
          ></img>
        </a>
        <a
          className="github-a"
          href="https://github.com/sagirikenaga/text-editor"
        >
          GitHub Link
        </a>
      </div>
    </div>
    </div>
  );
}
