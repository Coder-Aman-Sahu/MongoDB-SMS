const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, text: true },
  instructor: String,
  credits: Number
});

module.exports = mongoose.model('Course', courseSchema);