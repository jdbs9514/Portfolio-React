import React from 'react';
import '../style/Project2.css';
import picProject1 from '../assets/project2/img1.png';
import picProject2 from '../assets/project2/img2.png';
import picProject3 from '../assets/project2/img3.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

function ProjectSecond() {
  const arrObject2 = [
    {
      img: [picProject1, picProject2, picProject3],

      logos: [html, css, js, react],
    },
  ];
  return (
    <section>
      <div className="projects">
        <div className="div-img">
          <div id="carouselExample2" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={arrObject2[0].img[0]}
                  className="w-80 photo-project2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={arrObject2[0].img[1]}
                  className="w-80 photo-project2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={arrObject2[0].img[2]}
                  className="w-80 photo-project2"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="div-text">
          <h2 className="project-name2">Math Magician</h2>
          <div className="skill-container">
            <ul className="skills">
              <li>
                <img src={arrObject2[0].logos[0]} alt="html" className="html" />
              </li>
              <li>
                <img src={arrObject2[0].logos[1]} alt="css" className="css" />
              </li>
              <li>
                <img src={arrObject2[0].logos[2]} alt="js" className="js" />
              </li>
              <li>
                <img
                  src={arrObject2[0].logos[3]}
                  alt="react"
                  className="react"
                />
              </li>
            </ul>
          </div>
          <p className="text-project2">
            The Math Magician app is a website made with react for the use of
            simple mathematical operations, in theory, it is an online
            calculator so that children can do their basic operations and adapt
            to the web world.
          </p>
        </div>
        <div className="div-button">
          <button className="see-btn" type="button">
            <a href="https://elaborate-malabi-9452c6.netlify.app/">
              See Project
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProjectSecond;
