import React from 'react';
import '../style/Project3.css';
import picProject1 from '../assets/project3/img1.png';
import picProject2 from '../assets/project3/img2.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

function ProjectThird() {
  const arrObject2 = [
    {
      img: [picProject1, picProject2],

      logos: [html, css, js, react],
    },
  ];
  return (
    <section>
      <div className="projects">
        <div className="separate3">
          <div className="div-img">
            <div id="carouselExample3" className="carousel slide">
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
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample3"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample3"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="div-text">
            <h2 className="project-name3">Web App</h2>
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
            <p className="text-project3">
              if you like a lot of cryptocurrency markets then I
              recommend you this site that contains real-time information
              about the cryptocurrency market.
            </p>
          </div>
        </div>
        <div className="div-button">
          <button className="see-btn" type="button">
            <a href="https://dreamy-twilight-dc3eda.netlify.app/">
              See Project
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProjectThird;
