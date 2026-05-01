import { Router } from "express";
import { EventModel } from "../models/events";

const router = Router();

router.get("/", async (req, res) => {
  const events = await EventModel.find();
  res.status(200).json(events);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const events = await EventModel.findById(id);
    res.status(200).json(events);
  } catch (e) {
    console.error("error: ", e);
    res.status(400).json({ message: "id not found" });
  }
});

export default router;
