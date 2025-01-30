import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button onClick={() => deleteNote(note.id)}>Hapus</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
