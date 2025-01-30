// src/App.jsx
import React, { useState } from 'react';
import { initialNotes } from './utils/data' // Impor data awal
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import NoteList from './components/NoteList'

function App() {
  // State untuk menyimpan data catatan
  const [notes, setNotes] = useState(initialNotes)
  // State untuk pencarian
  const [searchQuery, setSearchQuery] = useState('')

  // Fungsi untuk menambahkan catatan baru
  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(), // Generate ID unik
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    }
    setNotes([...notes, newNote])
  }

  // Fungsi untuk menghapus catatan
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  // Fungsi untuk mengarsipkan catatan
  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? {...note, archived: !note.archived} : note
    ))
  }

  // Filter catatan berdasarkan pencarian
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pisahkan catatan aktif dan arsip
  const activeNotes = filteredNotes.filter(note => !note.archived)
  const archivedNotes = filteredNotes.filter(note => note.archived)

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm addNote={addNote} />
      
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <>
          <h2>Catatan Aktif</h2>
          <NoteList 
            notes={activeNotes} 
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
          
          <h2>Catatan Arsip</h2>
          <NoteList 
            notes={archivedNotes} 
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
        </>
      )}
    </div>
  );
}

export default App;