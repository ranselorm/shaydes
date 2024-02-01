// pages/api/courses/[id].js
import Course from "../../../models/courseModel";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const course = await Course.findById(id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
}
