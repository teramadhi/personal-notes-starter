import React from 'react';

const NoteItem = ({ note, onDelete, onArchive }) => {
    return (
      <div className="note-item">
        {/* Bagian konten catatan */}
        <div className="note-item__content">
          <h3 className="note-item__title">{note.title}</h3>
          <p className="note-item__date">
            {new Date(note.createdAt).toLocaleDateString('id-ID', {
              dateStyle: 'full',
            })}
          </p>
          <p className="note-item__body">{note.body}</p>
        </div>
        
        {/* Tombol aksi */}
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => onDelete(note.id)}
          >
            Hapus
          </button>
          <button
            className="note-item__archive-button"
            onClick={() => onArchive(note.id)}
          >
            {note.archived ? 'Aktifkan' : 'Arsipkan'}
          </button>
        </div>
      </div>
    )
  }
  
  export default NoteItem