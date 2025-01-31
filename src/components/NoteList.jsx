// src/components/NoteList.jsx
import NoteItem from './NoteItem'
import React from 'react';

// Komponen untuk menampilkan daftar catatan
/**
 * Komponen NoteList untuk menampilkan daftar catatan.
 *
 * @param {Object} props - Properti yang diterima oleh komponen ini.
 * @param {Array} props.notes - Daftar catatan yang akan ditampilkan.
 * @param {Function} props.onDelete - Fungsi yang dipanggil saat catatan dihapus.
 * @param {Function} props.onArchive - Fungsi yang dipanggil saat catatan diarsipkan.
 * @returns {JSX.Element} Elemen JSX yang mewakili daftar catatan.
 */
const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        notes.map(note => (
          <NoteItem 
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </div>
  )
}

export default NoteList