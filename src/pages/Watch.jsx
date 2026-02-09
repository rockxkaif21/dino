import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import VideoPlayer from '../components/VideoPlayer'
import { flatVideos } from '../data/dataset'
import { usePlayer } from '../context/PlayerContext'

export default function Watch() {
  const navigate = useNavigate()
  const { videoId } = useParams()
  const { currentVideo, openVideo, isPlaying, minimizePlayer } = usePlayer()

  const activeVideo = currentVideo?.id === videoId ? currentVideo : flatVideos.find((video) => video.id === videoId)

  const relatedVideos = useMemo(() => {
    if (!activeVideo) return []
    return flatVideos.filter((video) => video.category.slug === activeVideo.category.slug && video.id !== activeVideo.id)
  }, [activeVideo])

  if (!activeVideo) return null

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 130 || info.velocity.y > 850) {
      minimizePlayer()
      navigate('/')
    }
  }

  const switchVideo = (nextVideoId) => {
    openVideo(nextVideoId)
    navigate(`/watch/${nextVideoId}`, { replace: true })
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={activeVideo.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.2 }}
        className="mx-auto min-h-screen max-w-4xl bg-zinc-950 pb-28"
      >
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 240 }}
          dragElastic={{ top: 0, bottom: 0.22 }}
          onDragEnd={handleDragEnd}
          className="touch-pan-y"
        >
          <VideoPlayer video={activeVideo} isPlaying={isPlaying} />
        </motion.div>

        <section className="space-y-3 px-4 pt-4">
          <h1 className="text-lg font-semibold text-zinc-100">{activeVideo.title}</h1>
          <p className="text-sm text-zinc-400">{activeVideo.category.name}</p>
        </section>

        <section className="mt-6 px-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold text-zinc-200">Related videos</h2>
            <span className="text-xs text-zinc-500">Swipe up/down to explore</span>
          </div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="space-y-3"
          >
            {relatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} onClick={() => switchVideo(video.id)} />
            ))}
          </motion.div>
        </section>
      </motion.main>
    </AnimatePresence>
  )
}
