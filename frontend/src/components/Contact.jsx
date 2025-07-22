import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/projects/contact', form);
      alert("Message sent successfully!");
      setForm({ name: '', email: '', message: '',  rating: 5 });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-title"
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required />

          <label className="rating-label">Rate this site: <strong>{form.rating}/10</strong></label>
          <input type="range" name="rating" min="1" max="10" value={form.rating} onChange={handleChange} />

          <button type="submit">🚀 Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
