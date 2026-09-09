import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Row from '../components/Row'
import Modal from '../components/Modal'
import MovieCard from '../components/MovieCard'
import { useMyList } from '../hooks/useMyList'
import { fetchTrending, fetchGenres, fetchTrendingTV } from '../services/tmdb'

function Browse({ onLogout }) {
  const navigate = useNavigate()
  const { myList, addToList, removeFromList, isInList } = useMyList()

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [activeTab, setActiveTab] = useState('home')
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    fetchTrending()
      .then((data) => setMovies(data))
      .catch((err) => console.error('Fetch failed:', err))
  }, [])

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data))
  }, [])

  useEffect(() => {
    if (activeTab === 'tv' && tvShows.length === 0) {
      fetchTrendingTV().then((data) => setTvShows(data))
    }
  }, [activeTab, tvShows.length])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function renderContent() {
    if (searchTerm) {
      return (
        <div className="pt-24 px-6">
          <h2 className="text-white text-xl font-semibold mb-4">
            Results for "{searchTerm}"
          </h2>
          <div className="flex flex-wrap gap-4">
            {filteredMovies.map((movie) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => setSelectedMovie(movie)}
                className="w-40 rounded-md cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      )
    }

    if (selectedGenre) {
      return (
        <div className="pt-24 px-6">
          <Row
            title={genres.find((g) => g.id === Number(selectedGenre))?.name}
            endpoint={`/discover/movie?with_genres=${selectedGenre}`}
            onMovieClick={setSelectedMovie}
          />
        </div>
      )
    }

    if (activeTab === 'tv') {
      return (
        <div className="pt-24 px-6">
          <h2 className="text-white text-xl font-semibold mb-4">TV Shows</h2>
          <div className="flex flex-wrap gap-4">
            {tvShows.map((show) => (
              <MovieCard key={show.id} movie={show} onClick={() => setSelectedMovie(show)} />
            ))}
          </div>
        </div>
      )
    }

    if (activeTab === 'mylist') {
      return (
        <div className="pt-24 px-6">
          <h2 className="text-white text-xl font-semibold mb-4">My List</h2>
          {myList.length === 0 ? (
            <p className="text-gray-400">Your list is empty. Add movies from Home!</p>
          ) : (
            <div className="flex flex-wrap gap-4">
              {myList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <>
        <Hero movie={movies[0]} />
        <div className="mt-6">
          <Row title="My List" movies={myList} onMovieClick={setSelectedMovie} />
          <Row title="Trending Now" endpoint="/trending/movie/week" onMovieClick={setSelectedMovie} />
          <Row title="Top Rated" endpoint="/movie/top_rated" onMovieClick={setSelectedMovie} />
          <Row title="Action Movies" endpoint="/discover/movie?with_genres=28" onMovieClick={setSelectedMovie} />
          <Row title="Comedy Movies" endpoint="/discover/movie?with_genres=35" onMovieClick={setSelectedMovie} />
        </div>
      </>
    )
  }

  return (
    <div className="bg-black min-h-screen animate-fadeIn">
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        onLogout={() => {
          onLogout()
          navigate('/')
        }}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          setSearchTerm('')
          setSelectedGenre('')
        }}
      />

      {renderContent()}

      <Modal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        isSaved={selectedMovie ? isInList(selectedMovie.id) : false}
        onToggleSave={() => {
          if (!selectedMovie) return
          if (isInList(selectedMovie.id)) {
            removeFromList(selectedMovie.id)
          } else {
            addToList(selectedMovie)
          }
        }}
      />
    </div>
  )
}

export default Browse