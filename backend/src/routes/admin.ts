import { Router } from "express";
import { ArticleModel } from "../models/articles";
import { CourseModel } from "../models/courses";
import { EventModel } from "../models/events";

const router = Router();
//TODO: Create a good error handling
//TODO: Implement ZOD

const server_error_message = "Internal Server Error";
const mongo_duplicate_key_error = 11000;

router.delete("/events", async (req, res) => {
  await EventModel.deleteMany({});
  res.status(200).json({ message: "Deleted All events successfully" });
});
router.delete("/articles", async (req, res) => {
  await ArticleModel.deleteMany({});
  res.status(200).json({ message: "Deleted All articles successfully" });
});
router.delete("/courses", async (req, res) => {
  await CourseModel.deleteMany({});
  res.status(200).json({ message: "Deleted All courses successfully" });
});

router.post("/articles", async (req, res) => {
  const body_error_message = "Body should have fields {title,article,author}";
  if (!req.body) return res.status(400).json({ message: body_error_message });
  const { title, article, author } = req.body;
  if (!(title && article && author))
    return res.status(400).json({ message: body_error_message });
  try {
    await ArticleModel.create({ title, article, author });
    res.status(201).json({ message: "created article successfully" });
  } catch (e: any) {
    //MONGODB CODE FOR DUPLICATE KEY
    if (e.code === mongo_duplicate_key_error) {
      return res.status(409).json({
        message: "Duplicate entry found. This Title already exists.",
      });
    }
    console.error(`Error creating article: `, e);
    res.status(500).json({ message: server_error_message });
  }
});

router.post("/courses", async (req, res) => {
  const body_error_message = "Body should have fields {title,url}";
  if (!req.body) return res.status(400).json({ message: body_error_message });
  const { title, desc, url, image, faq } = req.body;
  if (!(title && url))
    return res.status(400).json({
      message: body_error_message,
    });
  try {
    await CourseModel.create({ title, desc, url, image, faq });
    res.status(201).json({ message: "created course successfully" });
  } catch (e: any) {
    if (e.code == mongo_duplicate_key_error) {
      return res.status(409).json({ message: "Duplicate entry found {title}" });
    }
    console.error("Error creating course ", e);
    res.status(500).json({ message: server_error_message });
  }
});

router.post("/events", async (req, res) => {
  const body_error_message =
    "Body should have fields {title,article}, could have {image} ";
  if (!req.body)
    return res.status(400).json({
      message: body_error_message,
    });
  const { title, article, image } = req.body;
  if (!(title && article))
    return res.status(400).json({ message: body_error_message });
  try {
    const event = await EventModel.create({ title, article, image });
    res.status(201).json({ message: "created event successfully", event });
  } catch (e: any) {
    if (e.code == mongo_duplicate_key_error)
      return res.status(409).json({ message: "Duplicate entry found {title}" });
    console.error("Error creating Event", e);
    return res.status(500).json({ message: server_error_message });
  }
});

export default router;
