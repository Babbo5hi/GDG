import { Router } from "express";

import { CourseModel } from "../models/courses";

const router = Router();

router.get("/", async (req, res) => {
  const courses = await CourseModel.find();
  res.status(200).json(courses);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const courses = await CourseModel.findById(id);
  res.status(200).json(courses);
});

export default router;
