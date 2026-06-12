import { Request, Response } from "express";
import { noteRepository } from "../repositories/note.repository";

type requestBody = {
  title: string;
  content: string;
};

export const getAllNotes = async (req: Request, res: Response) => {
  const notes = await noteRepository.findAllByUser(req.userId);

  res.json(notes);
};

export const getNoteById = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const note = await noteRepository.findById(id);

  res.json(note);
};

export const createNote = async (req: Request, res: Response) => {
  const { title, content }: requestBody = req.body;
  const note = await noteRepository.create({
    title,
    content,
    userId: req.userId,
  });

  res.status(201).json(note);
};

export const updateNote = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const { title, content }: requestBody = req.body;

  const note = await noteRepository.update(id, { title, content });

  res.json(note);
};

export const deleteNote = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  await noteRepository.delete(id);

  res.status(204).send();
};
