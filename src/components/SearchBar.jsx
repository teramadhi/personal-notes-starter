// src/components/SearchBar.jsx
// Komponen untuk fitur pencarian
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari catatan..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchBar