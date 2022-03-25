import { FC, useState } from 'react'
import Image from 'next/image'
import { Card } from './Card'
import { Icon } from './Icon'

export const Video: FC<{ thumbnail: { url: string; alt: string }; videoId: string }> = ({ thumbnail, videoId }) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <Card shadow className="w-full">
      {showVideo ? (
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            loading="lazy"
            title="Intro to Contentlayer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      ) : (
        <div className="relative -mb-2">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width="800"
            height="450"
            placeholder="blur"
            blurDataURL={thumbnail.url}
          />
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
            onClick={() => setShowVideo(true)}
          >
            <div className="relative w-16 text-violet-600 hover:text-violet-500 dark:text-violet-500 dark:hover:text-violet-400">
              <Icon name="play-button" />
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
