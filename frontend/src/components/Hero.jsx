import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import { ReactTyped } from 'react-typed'; 


const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.img
          src={avatar}
          alt="Mo Moin Avatar"
          className="avatar"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <h1 className="neon-text">Mo Moin</h1>
        <ReactTyped
          strings={[
            "4th Year Biotech B.Tech @ NIT Warangal",
            "Full-Stack Developer",
            "Data Analyst | Deep Learning Enthusiast",
          ]}
          typeSpeed={40}
          backSpeed={30}
          loop
          className="typed-text"
        />

        <div className="buttons">
          <a href="#contact" className="btn-red">Let's Talk</a>
          <a href="/assets/resume.pdf" className="btn-blue" download>Resume</a>
        </div>

        <div className="stats">
          <div>500+<br />DSA Problems</div>
          <div>5+<br />Projects</div>
          <div>95%<br />Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
