// backend/routes/noteRoutes.js
import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// POST: Create new note
router.post("/", async (req, res) => {
  console.log("🟡 Incoming Request Body:", req.body);  // Debugging

  const { title, content } = req.body;

  // Validation: Title or content missing
  if (!title || !content) {
    return res.status(400).json({ error: "Title and Content are required." });
  }

  try {
    const newNote = new Note({ title, content });
    const saved = await newNote.save();
    console.log("✅ Note saved to DB:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error while saving note:", err);
    res.status(500).json({ error: "Failed to save note" });
  }
});

// GET: Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error("❌ Error fetching notes:", err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

export default router;
