import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Projects.css';
import PP from '../assets/PP.jpg';

function Projects() {
  return (
    <section>
      <div className="projects">
        <div className="div-img">
          <img src={PP} alt="project 1" className="photo-project" />
        </div>
        <div className="div-text">
          <h2 className="project-name">Lorem, ipsum.</h2>
          <div className="skill-container">
            <ul className="skills">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <p className="text-project">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae aliquid quod expedita tenetur quia, id quas quaerat quam
            repellat ducimus nisi blanditiis, explicabo reprehenderit, sit
            i distinctio officiis ullam fugiat quis. Et vel quod officiis suscipit,
          </p>
        </div>
        <div>
          {/* <span><Link to="/">See Project</Link></span> */}
        </div>
      </div>
    </section>
  );
}
export default Projects;
