import { Router } from "express";
import { EventModel } from "../models/events";

const router = Router();

router.get("/", async (req, res) => {
  const events = await EventModel.find();
  res.status(200).json(events);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const events = await EventModel.findById(id);
  res.status(200).json(events);
});

export default router;
