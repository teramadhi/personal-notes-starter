// src/components/SearchBar.jsx
// Komponen untuk fitur pencarian
import React from 'react';

/**
 * Komponen SearchBar untuk input pencarian catatan.
 *
 * @param {Object} props - Properti yang diterima oleh komponen.
 * @param {string} props.searchQuery - Nilai dari input pencarian.
 * @param {Function} props.setSearchQuery - Fungsi untuk mengubah nilai input pencarian.
 * @returns {JSX.Element} Elemen input untuk pencarian catatan.
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari catatan..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;