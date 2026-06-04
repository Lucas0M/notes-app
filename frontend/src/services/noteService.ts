import { type Note } from "../types";

const API_URL = "https://notes-app-ba6y.onrender.com";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

export const getAllNotes = async (): Promise<Note[]> => {
  const response = await fetch(`${API_URL}/notes`, {
    headers: authHeaders(),
  });
  return response.json();
};

export const createNote = async (
  title: string,
  content: string,
): Promise<Note> => {
  const response = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ title, content }),
  });

  return response.json();
};

export const deleteNote = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
};
