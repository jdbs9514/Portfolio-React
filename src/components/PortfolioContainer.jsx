import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import ProjectFirst from './ProjectFirst';
import ProjectSecond from './ProjectSecond';
import ProjectThird from './ProjectThird';
import Form from './Form';
import Footer from './Footer';

function PortfolioContainer() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <ProjectFirst />
      <ProjectSecond />
      <ProjectThird />
      <Form />
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
