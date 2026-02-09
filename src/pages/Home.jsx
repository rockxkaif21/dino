import { useNavigate } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { dataset } from '../data/dataset'
import { usePlayer } from '../context/PlayerContext'

export default function Home() {
  const navigate = useNavigate()
  const { openVideo, restorePlayer } = usePlayer()

  const openWatch = (videoId) => {
    openVideo(videoId)
    restorePlayer()
    navigate(`/watch/${videoId}`)
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Video Feed</h1>
        <p className="mt-1 text-sm text-zinc-400">Mobile-first category feed with smooth transitions.</p>
      </header>

      <section className="space-y-8">
        {dataset.map((group) => (
          <div key={group.category.slug}>
            <h2 className="mb-3 text-lg font-semibold text-zinc-200">{group.category.name}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.contents.map((video) => (
                <VideoCard key={video.id} video={{ ...video, category: group.category }} onClick={() => openWatch(video.id)} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
