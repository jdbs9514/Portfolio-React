import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Form from './Form';
import Footer from './Footer';

function PortfolioContainer() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
