import { Router } from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validateMiddleware";
import { createNoteSchema, updateNoteSchema } from "../schemas/noteSchema";

const router = Router();

router.use(authMiddleware);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", validate(createNoteSchema), createNote);
router.patch("/:id", validate(updateNoteSchema), updateNote);
router.delete("/:id", deleteNote);

export default router;
