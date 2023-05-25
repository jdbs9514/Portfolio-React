import React from 'react';
import '../style/Skills.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import webpack from '../assets/webpack.png';
import postgres from '../assets/postgres.png';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.png';
import bootstrap from '../assets/bootstrap.png';

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
    { id: 9, skill: bootstrap },
  ];

  return (
    <section className="skills-container">
      <div className="skill-container-title">
        <h2 className="skills-title">Skills</h2>
      </div>
      <div className="skill-item">
        {skillArr.map((item) => (
          <div key={item.id} className="div-skill">
            <img className="skill" src={item.skill} alt="skills" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
