// server.js
const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/courseModel");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect(
  "mongodb+srv://ranselorm:RAf7p7tyyvyQyu75@mernapp.g3k5zgh.mongodb.net/shadyes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// mongodb+srv://ranselorm:RAf7p7tyyvyQyu75@mernapp.g3k5zgh.mongodb.net/shadyes
// // Middleware
app.use(express.json());
app.use(cors());

// Routes

// Create a new course
app.post("/api/courses", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
