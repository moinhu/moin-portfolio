const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  inquiryType: String,
  rating: Number
});

const Contact = mongoose.model('Contact', contactSchema);

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

module.exports = router;
