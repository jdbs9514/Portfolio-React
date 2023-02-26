/* eslint-disable react/self-closing-comp */
import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Form from './Form';
import Footer from './Footer';
import coding from '../assets/coding.jpg';
// import freelance from '../assets/freelance.png';
import software from '../assets/software.jpg';
import pp from '../assets/PP.jpg';

function Presentation() {
  return (
    <>
      <section className="presentation">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={coding} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                <h5>Remote</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img src={software} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Freelance Service</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pp} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Pair Programming</h5>
                <p>Some representative placeholder content for the first slide.</p>
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
        <Skills />
        <Projects />
        <Form />
        <Footer />
      </section>
    </>
  );
}

export default Presentation;
