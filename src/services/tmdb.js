const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
}

export async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week`, options)
  const data = await res.json()
  return data.results
}

export async function fetchByCategory(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`, options)
  const data = await res.json()
  return data.results
}
export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list`, options)
  const data = await res.json()
  return data.genres
}
export async function fetchTrailer(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/videos`, options)
  const data = await res.json()
  const trailer = data.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  )
  return trailer ? trailer.key : null
}
export async function fetchTrendingTV() {
  const res = await fetch(`${BASE_URL}/trending/tv/week`, options)
  const data = await res.json()
  return data.results
}