import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top w-100">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">Navbar</a>
          <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="d-flex justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
