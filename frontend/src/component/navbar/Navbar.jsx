import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <>
      <section className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              alt="Free Frontend Logo"
              className="img-fluid"
              height="300"
              src="/mailam-logo-2-1536x286.png"
              width="360"
            />
          </a>
          <button
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent4"
            data-bs-toggle="collapse"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list-nested"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent4">
            <ul className="navbar-nav ms-auto my-lg-0">
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/">Home</a>
              </li>
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/request">Report</a>
              </li>
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/studentrequest">Student Reports</a>
              </li>
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/studentthinks">View All Found Items</a>
              </li>  
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/admin">Admin login</a>
              </li>
              <li className="nav-item ms-lg-4 ps-3 pt-2">
                <a className="nav-link" id="doc" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
