import { Navigate, Route, Routes } from 'react-router-dom'
import MiniPlayer from './components/MiniPlayer'
import { PlayerProvider } from './context/PlayerContext'
import Home from './pages/Home'
import Watch from './pages/Watch'

export default function App() {
  return (
    <PlayerProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<Watch />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <MiniPlayer />
      </div>
    </PlayerProvider>
  )
}
