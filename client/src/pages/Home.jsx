import "./Home.css";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notes`);
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.error("❌ Failed to fetch notes", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1>Your Notes</h1>
      <div className="note-grid">
        {notes.length === 0 ? (
          <p>⚠️ No notes found.</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="note-card">
              <ul>
                <li>
                  <h2 className="note-title">{note.title}</h2>
                  <p className="note-content">{note.content}</p>
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
