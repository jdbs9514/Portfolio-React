import React from 'react';
import josue from '../assets/profile.jpg';
import '../style/Presentation.css';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Presentation() {
  return (
    <>
      <section className="presentation">
        <div className="presentation-container">
          <div className="img-container">
            <img src={josue} alt="foto" className="img" />
          </div>
          <div className="text-container">
            <div className="text-cont">
              <h1 className="name">
                Hi, I am Josue Benavides,
                full stack developer
              </h1>
              <p className="text">
                One of the things I am most passionate
                about in my life is developing functional
                and intuitive web pages for user management.
              </p>
            </div>
          </div>
        </div>
        <div className="social-media">
          <a href="https://github.com/jdbs9514"><img src={github} alt="github" className="github" /></a>
          <a href="https://www.linkedin.com/in/macoin/"><img src={linkedin} alt="linkedin" className="linkedin" /></a>
          <a href="https://twitter.com/JODA1015"><img src={twitter} alt="twitter" className="twitter" /></a>
        </div>
      </section>
    </>
  );
}

export default Presentation;
