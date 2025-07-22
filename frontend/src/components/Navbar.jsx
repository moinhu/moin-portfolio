import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="neon-text">Welcome To My Portfolio</h1>
      <div className="nav-links">
        <Link to="home" smooth>Home</Link>
        <Link to="skills" smooth>Skills</Link>
        <Link to="projects" smooth>Projects</Link>
        <Link to="contact" smooth>Contact</Link>
        <a href="/assets/resume.pdf" download>Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
