import "./Home.css";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);

  // 👇 Jaise hi page load ho, ye chalega
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/notes");
        const data = await res.json();
        setNotes(data); // 🔥 Set fetched notes into state
      } catch (error) {
        console.error("❌ Failed to fetch notes", error);
      }
    };

    fetchNotes();
  }, []); // empty dependency array -> run only once on mount

  return (
    <div className="container">
      <h1>Your Notes</h1>
      <div className="note-grid">
        {notes.length === 0 ? (
          <p>⚠️ No notes found.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              className="note-card"
            >
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
