import "./CreateNote.css";
import { useState } from "react";

function CreateNote() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const note = { title, content };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const data = await res.json();
      console.log("✅ Saved:", data);

      settitle("");
      setcontent("");

      alert("Note Saved Successfully!");
    } catch (err) {
      console.error("❌ Error saving note:", err);
      alert("Failed to save note");
    }
  };

  return (
    <div className="container">
      <h2>Create a New Note</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Title of Note</label>
        <input
          type="text"
          id="title"
          placeholder="write..."
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="content">Content of Note</label>
        <input
          type="text"
          id="content"
          placeholder="write..."
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">DONE!!</button>
      </form>
    </div>
  );
}

export default CreateNote;
