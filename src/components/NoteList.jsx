// src/components/NoteList.jsx
import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        notes.map((note) => (
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