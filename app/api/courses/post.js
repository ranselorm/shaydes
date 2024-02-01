// pages/api/courses/post.js
import Course from "../../../models/courseModel";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newCourse = new Course(req.body);
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
