// src/components/NoteForm.jsx
import { useState } from 'react'
import React from 'react';

// Komponen form untuk membuat catatan baru
const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const maxTitleLength = 50 // Batas maksimal karakter judul

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addNote(title, body)
    setTitle('')
    setBody('')
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="note-form__char-limit">
        Sisa karakter: {maxTitleLength - title.length}
      </div>
      <input
        type="text"
        className="note-form__title"
        placeholder="Judul catatan..."
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
      />
      <textarea
        className="note-form__body"
        placeholder="Isi catatan..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Buat Catatan</button>
    </form>
  )
}

export default NoteForm