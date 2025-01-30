// src/components/NoteForm.jsx
import { useState } from 'react'

const NoteForm = ({ addNote }) => {
  // State untuk menyimpan input pengguna
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const maxTitleLength = 50 // Batas maksimal karakter judul

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return // Validasi input kosong
    addNote(title, body)
    setTitle('')
    setBody('')
  }

  return (
    <div className="note-input">
      <h2 className="note-input__title">Buat Catatan Baru</h2>
      <form onSubmit={handleSubmit}>
        {/* Input judul dengan batas karakter */}
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxTitleLength - title.length}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Judul catatan..."
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
        />
        
        {/* Textarea untuk isi catatan */}
        <textarea
          className="note-input__body"
          placeholder="Tuliskan isi catatan di sini..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        
        {/* Tombol submit */}
        <button type="submit">Buat Catatan</button>
      </form>
    </div>
  )
}

export default NoteForm