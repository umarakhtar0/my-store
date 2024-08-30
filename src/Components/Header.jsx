/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.scss'; // Ensure you have this file for custom styles
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <header>
      <Navbar expand="lg" className="navbar-light">
        <div className="container">
          <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
              
              <Nav.Link as={Link} to="#about" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="#projects" className="nav-link">Projects</Nav.Link>
              <Nav.Link as={Link} to="#contact" className="nav-link">Contact</Nav.Link>
            </Nav>

            <Form.Check 
              type="switch"
              id="theme-switch"
              className="ms-auto toggle-switch"
              onChange={handleToggle}
              checked={darkMode}
              label="" // Removed text label
            />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
*/
/*
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'; // Import Form from react-bootstrap
import { Link } from 'react-scroll';
import '../App.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      <Form.Check 
              type="switch"
              id="theme-switch"
              className="ms-auto toggle-switch"
              onChange={handleToggle}
              checked={darkMode}
              label="" // Removed text label
            />
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
       
      </div>
      
    </header>
  );
};

export default Header;
*/


import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import '../App.scss';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      <div className="theme-switcher" onClick={handleToggle}>
        <span className="icon">
          {darkMode ? <FaSun /> : <FaMoon />}
        </span>
      </div>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </header>
  );
};

export default Header;
