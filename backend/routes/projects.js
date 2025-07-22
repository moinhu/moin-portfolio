const express = require('express');
const router = express.Router();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require('nodemailer');

// CSV Writer Setup
const csvWriter = createCsvWriter({
  path: 'contacts.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'email', title: 'Email' },
    { id: 'message', title: 'Message' },
    { id: 'inquiry', title: 'Inquiry' },
    { id: 'rating', title: 'Rating' },
    { id: 'date', title: 'Date' }
  ],
  append: true
});

// 📩 POST /api/projects/contact
router.post('/contact', async (req, res) => {
  const { name, email, message, inquiry, rating } = req.body;

  const newEntry = {
    name,
    email,
    message,
    inquiry,
    rating,
    date: new Date().toLocaleString()
  };

  try {
    // 🔽 Save to CSV
    await csvWriter.writeRecords([newEntry]);
    console.log("Saved to CSV");

    // 📧 Send Email
   const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'New Message from Portfolio Contact Form',
      text: `
You received a new message from your portfolio:

Name: ${name}
Email: ${email}
Inquiry: ${inquiry}
Rating: ${rating}/10

Message:
${message}

Time: ${newEntry.date}
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    res.status(200).json({ success: true, msg: "Message saved and emailed!" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ success: false, msg: "Something went wrong. Try again later." });
  }
});

module.exports = router;
