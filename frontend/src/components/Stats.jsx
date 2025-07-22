import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const stats = [
  { title: "500+ DSA Problems", value: "500+" },
  { title: "10+ Projects", value: "10+" },
  { title: "3+ Tech Domains", value: "Web, AI, Data" },
  { title: "1M+ Lines of Code", value: "1M+" },
];

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Journey
      </motion.h2>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="value">{stat.value}</div>
            <div className="title">{stat.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
