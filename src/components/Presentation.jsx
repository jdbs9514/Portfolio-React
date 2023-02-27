import React from 'react';
import josue from '../assets/josue.png';
import '../style/Presentation.css';

function Presentation() {
  return (
    <>
      <div className="container">
        <div className="card-content">
          <div className="card-img">
            <img src={josue} alt="josue" className="imagen" />
          </div>
          <div className="card-info">
            <h1 className="name">Josue Benavides</h1>
            <p className="presentation">
              Hi friends! Iam a software Developer who specializes
              in building functional and professional software for
              big companies. I am open to learn new technologies,
              and contribute with a grain of sand in professional
              projects.
            </p>
            <div className="social-media-div">
              <ul className="social-media">
                <li className="github">
                  <a href="https://github.com/jdbs9514">
                    <i className="fa-brands fa-github" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/macoin/">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/JODA1015">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
