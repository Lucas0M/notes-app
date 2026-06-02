import { useEffect, useState } from "react";
import { createNote, deleteNote, getAllNotes } from "../services/noteService";
import { type Note } from "../types";

function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getAllNotes().then(setNotes); // nao sei oq isso faz sinceramente
  }, []);

  const handleCreate = async () => {
    if (!title || !content) return;
    const newNote = await createNote(title, content);
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Notes</h1>

        <div className="bg-gray-900 rounded-xl p-6 mb-8 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <button
            onClick={handleCreate}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Add Note
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-gray-900 rounded-xl p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{note.title}</h3>
                  <p className="text-gray-400 mt-1">{note.content}</p>
                </div>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-red-400 hover:text-red-300 text-sm ml-4 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
