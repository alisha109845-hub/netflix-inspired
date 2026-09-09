function MovieCard({ movie, onClick }) {
  const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  const displayTitle = movie.title || movie.name

  return (
    <div onClick={onClick} className="relative flex-shrink-0 w-40 md:w-48 group cursor-pointer">
      <img src={posterUrl} alt={displayTitle} className="w-full rounded-md group-hover:scale-105 group-hover:brightness-75 transition duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/90 to-transparent rounded-b-md">
        <p className="text-white text-sm font-semibold truncate">{displayTitle}</p>
        <p className="text-green-500 text-xs font-medium">{Math.round(movie.vote_average * 10)}% match</p>
      </div>
    </div>
  )
}

export default MovieCard