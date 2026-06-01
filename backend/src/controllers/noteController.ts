import { Request, Response } from "express";

export const getAllNotes = (req: Request, res: Response) => {
  res.json({ message: "Get all notes" });
};

export const getNoteById = (req: Request, res: Response) => {
  res.json({ message: "Get note by id" });
};

export const createNote = (req: Request, res: Response) => {
  res.json({ message: "Create note" });
};

export const updateNote = (req: Request, res: Response) => {
  res.json({ message: "Update note" });
};

export const deleteNote = (req: Request, res: Response) => {
  res.json({ message: "Delete note" });
};
