// src/App.jsx
import { useState } from 'react'
import { initialNotes } from './utils/data'
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import NoteList from './components/NoteList'

function App() {
  // State management untuk aplikasi
  const [notes, setNotes] = useState(initialNotes)
  const [searchQuery, setSearchQuery] = useState('')

  // Fungsi untuk menambahkan catatan baru
  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
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

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan Pribadi</h1>
      </header>
      
      <main className="note-app__body">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <NoteForm addNote={addNote} />
        
        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={filteredNotes.filter(note => !note.archived)} 
          onDelete={deleteNote}
          onArchive={toggleArchive}
        />
        
        <h2>Arsip Catatan</h2>
        <NoteList 
          notes={filteredNotes.filter(note => note.archived)} 
          onDelete={deleteNote}
          onArchive={toggleArchive}
        />
      </main>
    </div>
  )
}

export default App