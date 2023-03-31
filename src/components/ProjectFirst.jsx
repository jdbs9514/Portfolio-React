import React from 'react';
import '../style/Projects.css';
import picProject1 from '../assets/project1/img1.png';
import picProject2 from '../assets/project1/img2.png';
import picProject4 from '../assets/project1/img4.png';
import picProject5 from '../assets/project1/img5.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

function ProjectFirst() {
  const arrObject = [
    {
      img: [
        picProject1,
        picProject2,
        picProject4,
        picProject5,
      ],

      logos: [
        html,
        css,
        js,
        react,
      ],
    },
  ];
  return (
    <section>
      <div className="projects">
        <div className="projects-div">
          <h1 className="projects-title">Projects</h1>
        </div>
        <div className="div-img">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={arrObject[0].img[0]}
                  className="w-80 photo-project"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img src={arrObject[0].img[1]} className="w-80 photo-project" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={arrObject[0].img[2]} className="w-80 photo-project" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={arrObject[0].img[3]} className="w-80 photo-project" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="div-text">
          <h2 className="project-name">Book Fair Page</h2>
          <div className="skill-container">
            <ul className="skills">
              <li><img src={arrObject[0].logos[0]} alt="html" className="html" /></li>
              <li><img src={arrObject[0].logos[1]} alt="css" className="css" /></li>
              <li><img src={arrObject[0].logos[2]} alt="js" className="js" /></li>
            </ul>
          </div>
          <p className="text-project">
            The book fair page is a page dedicated
            to all the lovers of reading, in this
            page you can find information about the
            last book fair in Peru where several well-known
            writers were presented.
          </p>
        </div>
        <div className="div-button">
          <button className="see-btn" type="button">
            <a href="https://jdbs9514.github.io/Capstone-project/">
              See Project
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProjectFirst;
