import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

const initialNotes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  // Tambahkan data awal lainnya jika diperlukan
];

/**
 * Komponen utama aplikasi catatan.
 *
 * @param {Object} props - Properti yang diterima oleh komponen.
 * @param {Function} props.toggleDarkMode - Fungsi untuk mengubah mode gelap.
 * @param {boolean} props.isDarkMode - Status mode gelap saat ini.
 * @returns {JSX.Element} Elemen utama aplikasi catatan.
 */
function App({ toggleDarkMode, isDarkMode }) {
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
    <main>
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </header>
      <div id="container_toolbar">
        <button id="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Normal Mode' : 'Dark Mode'}
        </button>
      </div>
      <section className="note-app__body">
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
      </section>
    </main>
  );
}

export default App;