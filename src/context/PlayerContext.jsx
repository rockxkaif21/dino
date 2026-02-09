import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { findVideoById } from '../data/dataset'

const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
  const [currentVideoId, setCurrentVideoId] = useState(null)
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const currentVideo = currentVideoId ? findVideoById(currentVideoId) : null

  const openVideo = useCallback((videoId, { mini = false } = {}) => {
    setCurrentVideoId(videoId)
    setIsMiniPlayerOpen(mini)
    setIsPlaying(true)
  }, [])

  const minimizePlayer = useCallback(() => {
    if (currentVideoId) setIsMiniPlayerOpen(true)
  }, [currentVideoId])

  const restorePlayer = useCallback(() => setIsMiniPlayerOpen(false), [])

  const closePlayer = useCallback(() => {
    setCurrentVideoId(null)
    setIsMiniPlayerOpen(false)
    setIsPlaying(false)
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const value = useMemo(
    () => ({
      currentVideo,
      currentVideoId,
      isMiniPlayerOpen,
      isPlaying,
      openVideo,
      minimizePlayer,
      restorePlayer,
      closePlayer,
      togglePlay,
    }),
    [
      closePlayer,
      currentVideo,
      currentVideoId,
      isMiniPlayerOpen,
      isPlaying,
      minimizePlayer,
      openVideo,
      restorePlayer,
      togglePlay,
    ],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used inside PlayerProvider')
  return ctx
}
