import React, { useState } from 'react'
import Lens from './Lens'
import { cn } from '../lib/utils'

interface StoryImageProps {
  src: string
  alt: string
  caption: string
  className?: string
}

const StoryImage: React.FC<StoryImageProps> = ({ src, alt, caption, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`mb-6 text-center ${className}`}>
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="card relative overflow-hidden" style={{ borderRadius: '12px' }}>
          {!imageLoaded && !imageError && (
            <div className="flex h-80 w-full items-center justify-center" style={{ background: 'var(--panel-alt)' }}>
              <span className="spin inline-block h-6 w-6 rounded-full border-2" style={{ borderColor: 'var(--border-strong)', borderTopColor: 'var(--brand)' }} />
            </div>
          )}

          {imageError && (
            <div
              className="flex h-80 w-full flex-col items-center justify-center"
              style={{ background: 'var(--panel-alt)', border: '1px dashed var(--border-strong)' }}
            >
              <p className="font-medium" style={{ color: 'var(--muted)' }}>{alt}</p>
            </div>
          )}

          {!imageError && (
            <Lens className="h-80 w-full" lensSize={160} zoomFactor={2} ariaLabel={`Pembesaran ${alt}`}>
              <img
                src={src}
                alt={alt}
                className={cn('h-full w-full object-cover', imageLoaded ? 'opacity-100' : 'opacity-0')}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </Lens>
          )}
        </div>

        <p className="mono mt-3 text-center text-xs" style={{ color: 'var(--muted)' }}>
          {caption}
        </p>
      </div>
    </div>
  )
}

export default StoryImage
