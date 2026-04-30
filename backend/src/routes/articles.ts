import { Router } from "express";

import { ArticleModel } from "../models/articles";

const router = Router();

router.get("/", async (req, res) => {
  const courses = await ArticleModel.find();
  res.status(200).json(courses);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const courses = await ArticleModel.findById(id);
  res.status(200).json(courses);
});

export default router;
