import { memo } from 'react'

function VideoCard({ video, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full overflow-hidden rounded-2xl bg-zinc-900 text-left shadow-lg ring-1 ring-white/10 transition-transform active:scale-[0.99]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs text-zinc-100">
          {video.duration}
        </span>
      </div>
      <div className="space-y-2 p-3">
        <p className="text-sm font-semibold text-zinc-100">{video.title}</p>
        <span className="inline-flex rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200">
          {video.category.name}
        </span>
      </div>
    </button>
  )
}

export default memo(VideoCard)
