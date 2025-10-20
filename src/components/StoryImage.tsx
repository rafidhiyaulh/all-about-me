import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageIcon, Loader2 } from 'lucide-react'
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
    <div className={`text-center mb-6 ${className}`}>
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl shadow-xl group"
        >
          {!imageLoaded && !imageError && (
            <div className="flex h-80 w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
              <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
            </div>
          )}
          
          {imageError && (
            <div className="flex h-80 w-full flex-col items-center justify-center border-2 border-dashed border-neutral-300 bg-gradient-to-br from-neutral-100 to-neutral-200">
              <ImageIcon className="mb-3 h-12 w-12 text-neutral-500" />
              <p className="font-medium text-neutral-600">{alt}</p>
            </div>
          )}
          
          {!imageError && (
            <Lens className="h-80 w-full" lensSize={160} zoomFactor={2} ariaLabel={`Pembesaran ${alt}`}>
              <img
                src={src}
                alt={alt}
                className={cn(
                  'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
                  imageLoaded ? 'opacity-100' : 'opacity-0',
                )}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </Lens>
          )}
          
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-600 italic mt-4 text-center"
        >
          {caption}
        </motion.p>
      </div>
    </div>
  )
}

export default StoryImage
