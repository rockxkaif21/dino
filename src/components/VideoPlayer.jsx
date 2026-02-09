import { useMemo } from 'react'

function youtubeAutoplayUrl(uri, isPlaying) {
  const separator = uri.includes('?') ? '&' : '?'
  return `${uri}${separator}autoplay=${isPlaying ? 1 : 0}&mute=0&playsinline=1&rel=0`
}

export default function VideoPlayer({ video, isPlaying, className = '' }) {
  const src = useMemo(() => youtubeAutoplayUrl(video.mediaUri, isPlaying), [video.mediaUri, isPlaying])

  return (
    <div className={`relative w-full overflow-hidden bg-black ${className}`}>
      <div className="aspect-video w-full">
        {video.mediaType === 'YOUTUBE' ? (
          <iframe
            title={video.title}
            src={src}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video src={video.mediaUri} controls autoPlay className="h-full w-full" />
        )}
      </div>
    </div>
  )
}
