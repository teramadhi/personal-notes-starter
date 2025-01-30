// src/components/SearchBar.jsx
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan berdasarkan judul..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchBar