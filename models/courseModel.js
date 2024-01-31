const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  id: String,
  name: String,
  videourl: String,
  overview: String,
});

const chapterSchema = new mongoose.Schema({
  id: String,
  section: Number,
  name: String,
  content: [contentSchema],
});

const courseSchema = new mongoose.Schema({
  id: String,
  name: String,
  backdrop: String,
  chapters: [chapterSchema],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
