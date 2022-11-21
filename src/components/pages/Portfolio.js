import React from 'react';
import project1 from '../../project1.png';
import project2 from '../../project2.png';
import module3 from '../../module3.png';
import module4 from '../../module4.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
            <article id="app1" class="apps">
                <a href="https://sagirikenaga.github.io/whats-the-word/">
                  <img src={project1} alt="'What's the Word?' Game" height="400"></img>
                </a>
            </article>
        </div>
        <div class="container__image-secondary">
            <article class="apps">
                <a href="https://petplace2141.herokuapp.com/">
                    <img src={project2} alt="Pet's Place Site" height="400"></img>
                </a>
            </article>
            <article class="apps">
                <a href="https://github.com/sagirikenaga/random-password-generator">
                    <img src={module3} alt="Random Password Generator App" height="400"></img>
                </a>
            </article>
            <article class="apps">
                <a href="https://sagirikenaga.github.io/coding-quiz/">
                    <img src={module4} alt="Coding Quiz" height="400"></img>
                </a>
            </article>
            <article class="apps">
                <a href="https://si-note-taker.herokuapp.com/">
                    <img src={module4} alt="Coding Quiz" height="400"></img>
                </a>
            </article>
            <article class="apps">
                <a href="https://github.com/sagirikenaga">
                    <img alt="link will take you to my main Github page" src="./assets/images/coming-soon.png"></img>
                </a>
            </article>
            <article class="apps">
                <a href="https://github.com/sagirikenaga">
                    <img alt="link will take you to my main Github page" src="./assets/images/coming-soon.png"></img>
                </a>
            </article>
        </div>
    </div>
  );
}

// THIS WILL THE PORTFOLIO SECTION
// 6 APPLICATIONS WITH LINKS TO THE DEPLOYED APPLICATION AND GITHUB REPO
