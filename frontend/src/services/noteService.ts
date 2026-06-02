import { type Note } from "../types";

const API_URL = "http://localhost:3333/notes";

export const getAllNotes = async (): Promise<Note[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createNote = async (
  title: string,
  content: string,
): Promise<Note> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  return response.json();
};

export const deleteNote = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
