import React from 'react';
import '../style/Projects.css';
import PP from '../assets/PP.jpg';

function Projects() {
  return (
    <section>
      <div className="projects">
        <div className="title">
          <img src={PP} alt="project 1" className="photo-project" />
        </div>
        <div className="cards">
          <h2>Lorem, ipsum.</h2>
          <h4>Lorem.</h4>
          <h4>Lorem.</h4>
          <h3>View Project</h3>
          <h3>View Code</h3>
        </div>
      </div>
    </section>
  );
}
export default Projects;
