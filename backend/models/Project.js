// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  repoLink: String,
  liveLink: String,
  screenshot: String,
  order: Number
});

module.exports = mongoose.model('Project', projectSchema);
