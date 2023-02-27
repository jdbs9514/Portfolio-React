/* eslint-disable react/self-closing-comp */
import React from 'react';
import coding from '../assets/coding.jpg';
import software from '../assets/software.jpg';
import pp from '../assets/PP.jpg';

function Carousel() {
  return (
    <>
      <section className="presentation">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={coding} className="d-block w-100 opacity-75" alt="..." />
              <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                <h5>Remote</h5>
                <p>Scrum habits for professional web development enviroment.</p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img src={software} className="d-block w-100 opacity-75" alt="..." />
              <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                <h5>Freelance Service</h5>
                <p>
                  Freelance service is provided for the development of
                  web applications for companies, start up, projects,
                  etc.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pp} className="d-block w-100 opacity-75" alt="..." />
              <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                <h5>Pair Programming</h5>
                <p>
                  Available to work on an open source project together
                  with professional developers in the field. and Able to
                  learn more technologies on demand.
                </p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Carousel;
