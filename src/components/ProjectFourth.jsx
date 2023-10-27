import React from 'react';
import '../style/Project4.css';
import picProject1 from '../assets/project4/img1.png';
import picProject2 from '../assets/project4/img2.png';
import picProject3 from '../assets/project4/img3.png';
import picProject4 from '../assets/project4/img4.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import webpack from '../assets/webpack.png';

function ProjectFourth() {
  const arrObject = [
    {
      img: [picProject1, picProject2, picProject3, picProject4],

      logos: [html, css, js, webpack],
    },
  ];
  return (
    <section>
      <div className="projects">
        <div className="separate4">
          <div className="div-img">
            <div id="carouselExample4" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={arrObject[0].img[0]}
                    className="w-80 photo-project"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={arrObject[0].img[1]}
                    className="w-80 photo-project"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={arrObject[0].img[2]}
                    className="w-80 photo-project"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={arrObject[0].img[3]}
                    className="w-80 photo-project"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample4"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample4"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="div-text">
            <h2 className="project-name4">Series Pages</h2>
            <div className="skill-container">
              <ul className="skills">
                <li>
                  <img src={arrObject[0].logos[0]} alt="html" className="html" />
                </li>
                <li>
                  <img src={arrObject[0].logos[1]} alt="css" className="css" />
                </li>
                <li>
                  <img src={arrObject[0].logos[2]} alt="js" className="js" />
                </li>
                <li>
                  <img
                    src={arrObject[0].logos[3]}
                    alt="webpack"
                    className="webpack"
                  />
                </li>
              </ul>
            </div>
            <p className="text-project4">
              Series pages is an app made with webpack which resembles Netflix, in
              this page uses asynchronous functions to consume an API and display
              all your content.
            </p>
          </div>
        </div>
        <div className="div-button">
          <button className="see-btn" type="button">
            <a href="https://glittering-kashata-b89a93.netlify.app/">
              See Project
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProjectFourth;
