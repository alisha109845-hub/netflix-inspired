function Navbar({
  searchTerm,
  onSearchChange,
  genres,
  selectedGenre,
  onGenreChange,
  onLogout,
  activeTab,
  onTabChange,
}) {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <h1 className="text-red-600 text-3xl font-bold tracking-tight">NETFLIX</h1>
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-6 text-sm">
          {['home', 'tv', 'movies', 'mylist'].map((tab) => (
            <li
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`cursor-pointer transition ${
                activeTab === tab ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab === 'tv' ? 'TV Shows' : tab === 'mylist' ? 'My List' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>

        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="bg-black/60 border border-gray-500 text-white text-sm px-2 py-1 rounded outline-none focus:border-white transition"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-black/60 border border-gray-500 text-white text-sm px-3 py-1 rounded outline-none focus:border-white transition w-24 md:w-auto"
        />

        <button onClick={onLogout} className="text-gray-300 hover:text-white text-sm">
          Sign Out
        </button>
      </div>
    </nav>
  )
}

export default Navbar