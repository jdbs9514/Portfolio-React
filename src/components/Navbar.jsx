import React from 'react';
import '../style/Navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="logo-container">
            <span className="logo">Logo</span>
          </div>
          <div className="menu-container" id="menu-container">
            <span className="ham-btn"><i className="fa-sharp fa-solid fa-bars" /></span>
            <div className="list-container">
              <ul className="list-menu">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact me</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
