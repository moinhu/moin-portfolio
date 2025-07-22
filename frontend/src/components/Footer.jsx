import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Let’s Connect</h2>
        <div className="footer-links">
          <a href="https://github.com/momoin737" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mo-moin-3a20852ab/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:momoin737@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <a
          href="/resume.pdf"
          download="Mo_Moin_Resume"
          className="resume-button"
        >
          📄 Download Resume
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mo Moin • Built with 💻 MERN & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
