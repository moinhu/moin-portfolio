import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Interactive Love Letter",
    desc: "Designed and developed an interactive multi-step message delivery platform using HTML, CSS, and JavaScript.",
    github: "https://github.com/moinhu/interactive-love-letter.git",
    demo: "https://amazon-clone-moin.vercel.app/"
  },
  {
    title: "NeuroTalk 3D",
    desc: "A deep learning-based 3D emotion detection system. Used Python, DL, and visualization.",
    github: "https://github.com/momoin737/NeuroTalk3D",
    demo: "https://neurotalk-3d.vercel.app/"
  },
  {
    title: "Multilingual Video Recording Platform",
    desc: "Built a multilingual video recording platform , Integrated Dlib HOG, FFmpeg, and a Tkinter-based GUI with modular role.",
    github: "https://github.com/momoin737/data-dashboard",
    demo: "https://data-dashboard-moin.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
