import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import ProjectFirst from './ProjectFirst';
import Form from './Form';
import Footer from './Footer';

function PortfolioContainer() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <ProjectFirst />
      <Form />
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
