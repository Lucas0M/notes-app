import { Request, Response } from "express";
import prisma from "../prisma";

type requestBody = {
  title: string;
  content: string;
};

export const getAllNotes = async (req: Request, res: Response) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
};

export const getNoteById = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const note = await prisma.note.findUnique({ where: { id } });

  res.json(note);
};

export const createNote = async (req: Request, res: Response) => {
  const { title, content }: requestBody = req.body;
  const note = await prisma.note.create({
    data: { title, content },
  });

  res.status(201).json(note);
};

export const updateNote = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const { title, content }: requestBody = req.body;

  const note = await prisma.note.update({
    where: { id },
    data: { title, content },
  });

  res.json(note);
};

export const deleteNote = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  await prisma.note.delete({
    where: { id },
  });

  res.status(204).send();
};
