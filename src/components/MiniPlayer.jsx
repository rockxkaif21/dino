import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../context/PlayerContext'
import VideoPlayer from './VideoPlayer'

export default function MiniPlayer() {
  const navigate = useNavigate()
  const { currentVideo, isMiniPlayerOpen, isPlaying, restorePlayer, closePlayer, togglePlay } = usePlayer()

  if (!currentVideo) return null

  const handleRestore = () => {
    restorePlayer()
    navigate(`/watch/${currentVideo.id}`)
  }

  return (
    <AnimatePresence>
      {isMiniPlayerOpen && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed inset-x-3 bottom-3 z-50"
        >
          <div className="flex items-center gap-3 overflow-hidden rounded-2xl bg-zinc-900 p-2 shadow-2xl ring-1 ring-white/10">
            <button onClick={handleRestore} className="w-32 overflow-hidden rounded-lg">
              <VideoPlayer video={currentVideo} isPlaying={isPlaying} className="pointer-events-none" />
            </button>
            <button onClick={handleRestore} className="min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-medium text-zinc-100">{currentVideo.title}</p>
              <p className="text-xs text-zinc-400">{currentVideo.category.name}</p>
            </button>
            <button
              aria-label="toggle playback"
              onClick={togglePlay}
              className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-zinc-100"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              aria-label="close player"
              onClick={closePlayer}
              className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-zinc-100"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
