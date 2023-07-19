import React, { useState } from 'react';
import '../style/Navbar.css';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Presentation',
    },
  ];

  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="logo-container">
            <span className="logo">Logo</span>
          </div>
          <div className="menu-container" id="menu-container">
            <button className="ham-btn" type="button" onClick={handleToggle}>
              {navbarOpen ? (
                <>
                  <i className="fa-solid fa-xmark" />
                  <ul className="list-menu">
                    {links.map((index) => (
                      <li key={index.id}><a href={index.path}>{index.text}</a></li>
                    ))}
                  </ul>
                </>
              ) : (
                <i className="fa-sharp fa-solid fa-bars" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
