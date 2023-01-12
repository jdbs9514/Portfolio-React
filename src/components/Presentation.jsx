/* eslint-disable react/self-closing-comp */
import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Form from './Form';
import Footer from './Footer';

function Presentation() {
  return (
    <>
      <section className="presentation">
        <div className="resume">
          <div className="social-images">
            <h3>Josue Benavides</h3>
            <ul>
              <li className="github"><i className="fa-brands fa-github"></i></li>
              <li className="linkedin"><i className="fa-brands fa-linkedin"></i></li>
              <li className="twitter"><i className="fa-brands fa-twitter"></i></li>
            </ul>
          </div>
          <div>
            <span><img src="#" alt="Josue Benavides" /></span>
            <h1>Nice to meet you! I am Josue Benavides</h1>
            <p>
              Based in Perú, i am a Full-stack developer passionate about
              building accesible web apps that users love.
            </p>
            <h3>Contact me</h3>
          </div>
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
