import { useState, useEffect } from 'react'
import { fetchByCategory } from '../services/tmdb'
import MovieCard from './MovieCard'

function Row({ title, endpoint, movies: providedMovies, onMovieClick }) {
  const [fetchedMovies, setFetchedMovies] = useState([])

  useEffect(() => {
    if (endpoint) {
      fetchByCategory(endpoint).then((data) => setFetchedMovies(data))
    }
  }, [endpoint])

  const movies = providedMovies || fetchedMovies

  if (movies.length === 0) return null

  return (
    <div className="px-6 mb-8">
      <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
        ))}
      </div>
    </div>
  )
}

export default Row