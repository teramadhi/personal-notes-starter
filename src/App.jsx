// src/App.jsx
import React, { useState } from 'react';
import { initialNotes } from './utils/data';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';
import './styles/style.css';

/**
 * Komponen utama aplikasi catatan.
 * 
 * @component
 * @returns {JSX.Element} Elemen JSX yang mewakili aplikasi catatan.
 * 
 * @example
 * return (
 *   <App />
 * )
 * 
 * @description
 * Komponen ini mengelola catatan dengan fitur pencarian, penambahan, penghapusan, dan pengarsipan catatan.
 * 
 * @function
 * @name App
 * 
 * @property {Array} notes - Daftar catatan yang dikelola oleh aplikasi.
 * @property {Function} setNotes - Fungsi untuk memperbarui daftar catatan.
 * @property {string} searchQuery - Query pencarian untuk memfilter catatan.
 * @property {Function} setSearchQuery - Fungsi untuk memperbarui query pencarian.
 * 
 * @method
 * @name addNote
 * @description Menambahkan catatan baru ke daftar catatan.
 * @param {string} title - Judul catatan.
 * @param {string} body - Isi catatan.
 * 
 * @method
 * @name deleteNote
 * @description Menghapus catatan berdasarkan ID.
 * @param {number} id - ID catatan yang akan dihapus.
 * 
 * @method
 * @name toggleArchive
 * @description Mengubah status arsip catatan berdasarkan ID.
 * @param {number} id - ID catatan yang akan diubah status arsipnya.
 * 
 * @property {Array} filteredNotes - Daftar catatan yang difilter berdasarkan query pencarian.
 * @property {Array} activeNotes - Daftar catatan yang tidak diarsipkan.
 * @property {Array} archivedNotes - Daftar catatan yang diarsipkan.
 */
function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div id="root">
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat catatan</h2>
          <NoteForm addNote={addNote} />
        </div>
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={activeNotes}
          onDelete={deleteNote}
          onArchive={toggleArchive}
        />
        <h2>Catatan Arsip</h2>
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          <NoteList
            notes={archivedNotes}
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
        )}
      </div>
    </div>
  );
}

export default App;