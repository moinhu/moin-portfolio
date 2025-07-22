import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "C++ / DSA", level: 95 },
  { name: "Python", level: 88 },
  { name: "Data Analysis", level: 86 },
  { name: "Deep Learning", level: 82 }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                <span>{skill.level}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
