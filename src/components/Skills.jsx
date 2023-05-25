import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import webpack from '../assets/webpack.png';
import postgres from '../assets/postgres.png';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.png';

function Skills() {
  const skillArr = [
    { id: 1, skill: html },
    { id: 2, skill: css },
    { id: 3, skill: js },
    { id: 4, skill: react },
    { id: 5, skill: webpack },
    { id: 6, skill: postgres },
    { id: 7, skill: ruby },
    { id: 8, skill: rails },
  ];

  return (
    <section>
      <div className="skills-container">
        {skillArr.map((item) => (
          <div key={item.id} className="skill-item">
            <img className="skills" src={item.skill} alt="skills" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
