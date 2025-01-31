// src/components/NoteForm.jsx
import { useState } from 'react'
import React from 'react';

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
      <div>  
        <input  
          type="text"  
          className="note-form__title"  
          placeholder="Judul catatan..."  
          value={title}  
          onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}  
        />  
      </div>  
      <div>  
        <textarea  
          className="note-form__body"  
          placeholder="Isi catatan..."  
          value={body}  
          onChange={(e) => setBody(e.target.value)}  
        />  
      </div>  
      <div>  
        <button type="submit">Buat Catatan</button>  
      </div>  
    </form>  
  )
}

export default NoteForm