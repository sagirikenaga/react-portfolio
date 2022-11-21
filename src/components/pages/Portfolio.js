import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import module3 from '../../images/module3.png';
import module4 from '../../images/module4.png';
import module5 from '../../images/module5.png';
import module11 from '../../images/module11.png';
import module19 from '../../images/module19.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
            <article>
                <a href="https://sagirikenaga.github.io/whats-the-word/">
                  <img src={project1} alt="'What's the Word?' Game App" height="400"></img>
                </a>
            </article>
        </div>
        <div>
            <article>
                <a href="https://petplace2141.herokuapp.com/">
                    <img src={project2} alt="Pet's Place Site" height="400"></img>
                </a>
            </article>
            <article>
                <a href="https://github.com/sagirikenaga/random-password-generator">
                    <img src={module3} alt="Random Password Generator App" height="400"></img>
                </a>
            </article>
            <article>
                <a href="https://sagirikenaga.github.io/coding-quiz/">
                  <img src={module4} alt="Coding Quiz App" height="400"></img>
                </a>
            </article>
            <article>
                <a href="https://sagirikenaga.github.io/work-day-scheduler/">
                    <img src={module5} alt="Work Day Scheduler App" height="400"></img>
                </a>
            </article>
            <article>
                <a href="https://si-note-taker.herokuapp.com/">
                    <img src={module11} alt="Note Taker App" height="400"></img>
                </a>
            </article>
            <article>
                <a href="https://si-note-editor.herokuapp.com/">
                    <img src={module19} alt="Text Editor App" height="400"></img>
                </a>
            </article>
        </div>
    </div>
  );
}

// THIS WILL THE PORTFOLIO SECTION
// 6 APPLICATIONS WITH LINKS TO THE DEPLOYED APPLICATION AND GITHUB REPO
