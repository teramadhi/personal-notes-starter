import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import style
import './styles/style.css';

/**
 * Data awal yang berisi informasi tentang beberapa item.
 * @type {Array<Object>}
 * @property {number} id - ID unik dari item.
 * @property {string} title - Judul dari item.
 * @property {string} body - Deskripsi atau isi dari item.
 * @property {boolean} archived - Status apakah item diarsipkan atau tidak.
 * @property {string} createdAt - Tanggal dan waktu pembuatan item dalam format ISO 8601.
 */
const initialData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  // ...other initial data...
];

function Main() {
  const [notes, setNotes] = useState(initialData);

  return <App notes={notes} setNotes={setNotes} />;
}

ReactDOM.render(<Main />, document.getElementById('root'));