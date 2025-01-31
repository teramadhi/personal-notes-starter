// src/components/NoteForm.jsx
import React, { useState } from 'react';

// Komponen form untuk membuat catatan baru
/**
 * Komponen NoteForm digunakan untuk membuat catatan baru.
 * 
 * @param {Object} props - Properti yang diterima oleh komponen ini.
 * @param {Function} props.addNote - Fungsi untuk menambahkan catatan baru.
 * 
 * @returns {JSX.Element} Formulir untuk membuat catatan baru.
 * 
 * @example
 * <NoteForm addNote={handleAddNote} />
 */
function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label htmlFor="note-title">Title</label>
        <input
          type="text"
          id="note-title"
          name="note-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="note-body">Body</label>
        <textarea
          id="note-body"
          name="note-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;