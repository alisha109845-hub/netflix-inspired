import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Browse from './pages/Browse'
import { useAuth } from './hooks/useAuth'

function App() {
  const { isLoggedIn, login, logout } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing onLogin={login} />} />
        <Route
          path="/browse"
          element={isLoggedIn ? <Browse onLogout={logout} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App