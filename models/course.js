const mongoose = require("mongoose");

const { Schema, Types } = mongoose;

const contentSchema = new Schema({
  name: String,
  videourl: String,
  overview: String,
});

const chapterSchema = new Schema({
  section: Number,
  name: String,
  content: [contentSchema],
});

const courseSchema = new Schema({
  name: String,
  backdrop: String,
  chapters: [chapterSchema],
});

if (mongoose.models.Course) {
  delete mongoose.models.Course;
}

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
