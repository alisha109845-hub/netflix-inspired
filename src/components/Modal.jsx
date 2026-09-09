import { useState, useEffect } from 'react'
import { fetchTrailer } from '../services/tmdb'

function Modal({ movie, onClose, isSaved, onToggleSave }) {
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    if (movie) {
      setTrailerKey(null)
      fetchTrailer(movie.id).then((key) => setTrailerKey(key))
    }
  }, [movie])

  if (!movie) return null

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-neutral-900 max-w-2xl w-full rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {trailerKey ? (
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ) : (
          <img src={backdropUrl} alt={movie.title} className="w-full h-64 object-cover" />
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
          <p className="text-green-500 text-sm mb-3">
            {Math.round(movie.vote_average * 10)}% match · {movie.release_date?.slice(0, 4)}
          </p>
          <p className="text-gray-300 mb-6">{movie.overview}</p>
          <div className="flex gap-3">
            <button
              onClick={onToggleSave}
              className={`px-4 py-2 rounded font-semibold transition ${
                isSaved ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isSaved ? '✓ In My List' : '+ Add to My List'}
            </button>
            <button onClick={onClose} className="bg-gray-500/70 text-white px-4 py-2 rounded font-semibold hover:bg-gray-500/50 transition">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal