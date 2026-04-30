import { Router } from "express";
import { ArticleModel } from "../models/articles";
import { CourseModel } from "../models/courses";
import { EventModel } from "../models/events";

const router = Router();

router.post("/articles", async (req, res) => {
  const { title, article, author } = req.body;
  await ArticleModel.create({ title, article, author });
  res.status(201).send("created article successfully");
});

router.post("/courses", async (req, res) => {
  const { title, desc, url, image, faq } = req.body;
  await CourseModel.create({ title, desc, url, image, faq });
  res.status(201).send("created course successfully");
});

router.post("/events", async (req, res) => {
  const { title, article, image } = req.body;
  await EventModel.create({ title, article, image });
  res.status(201).send("created event successfully");
});

export default router;
