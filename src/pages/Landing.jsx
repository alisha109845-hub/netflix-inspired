import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Landing({ onLogin }) {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    onLogin()
    navigate('/browse')
  }

  return (
    <div className="min-h-screen bg-black relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/keIgKKyPuTGGiEz2E1MOsu2y0v4.jpg)` }}
      />
      <div className="relative z-10">
        <nav className="flex justify-between items-center px-6 md:px-16 py-6">
          <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        </nav>

        <div className="flex flex-col items-center text-center px-6 mt-20">
          <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl mb-4">
            Unlimited movies, TV shows and more
          </h2>
          <p className="text-white text-lg mb-6">Starts at $6.99. Cancel anytime.</p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full max-w-xl">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-500 text-white outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition whitespace-nowrap"
            >
              Get Started ▶
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Landing