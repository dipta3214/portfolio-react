import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-heading">
        <h1>About</h1>
      </div>
      <div className="about-content-primary">
        <div className="about-content">
          <div>
            <h1>Abidur Rahman Dipta</h1>
            <p className="about-p">
              I am new to software development thanks to General Assembly's
              Software Engineering bootcamp. I've worked mostly with React
              stacks.
            </p>
            <p className="about-p">
              I have a background in industrial refrigeration and property
              management. What I don't know yet, I can learn quickly. Lets work
              together!
            </p>
            <div className="about-buttons">
              <button>LinkedIn</button>
              <button>Gitbhub</button>
            </div>
          </div>
          <div>
            <img src="" alt="Picture of Abidur" />
          </div>
        </div>
      </div>
    </div>
  );
}
