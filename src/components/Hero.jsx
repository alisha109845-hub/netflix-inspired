function Hero({ movie }) {
  if (!movie) return null

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  return (
    <div
      className="relative h-[80vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 p-10 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{movie.title}</h1>
        <p className="text-gray-200 line-clamp-2 md:line-clamp-3 mb-6 text-sm md:text-base">{movie.overview}</p>   
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/50 transition">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero