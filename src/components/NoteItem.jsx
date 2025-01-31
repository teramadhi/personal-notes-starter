import React, { useState } from 'react';

/**
 * Komponen NoteItem menampilkan item catatan dengan opsi untuk menghapus atau mengarsipkan catatan.
 *
 * @param {Object} props - Properti yang diterima oleh komponen ini.
 * @param {Object} props.note - Objek catatan yang berisi informasi catatan.
 * @param {string} props.note.id - ID unik dari catatan.
 * @param {string} props.note.title - Judul catatan.
 * @param {string} props.note.body - Isi catatan.
 * @param {string} props.note.createdAt - Tanggal pembuatan catatan.
 * @param {boolean} props.note.archived - Status arsip catatan.
 * @param {Function} props.onDelete - Fungsi yang dipanggil saat tombol hapus diklik.
 * @param {Function} props.onArchive - Fungsi yang dipanggil saat tombol arsip diklik.
 *
 * @returns {JSX.Element} Elemen JSX yang mewakili item catatan.
 */
const NoteItem = ({ note, onDelete, onArchive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Panjang maksimum teks sebelum dipotong

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayText = () => {
    if (isExpanded || note.body.length <= maxLength) {
      return note.body;
    }
    return `${note.body.substring(0, maxLength)}...`;
  };

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
        <p className="note-item__body">
          {getDisplayText()}
          {note.body.length > maxLength && (
            <button onClick={toggleReadMore} className="note-item__read-more">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
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
  );
};

export default NoteItem;