import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageIcon, Loader2 } from 'lucide-react'

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
          className="relative rounded-2xl overflow-hidden shadow-xl group"
        >
          {!imageLoaded && !imageError && (
            <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
          )}
          
          {imageError && (
            <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center border-2 border-dashed border-blue-200">
              <ImageIcon className="w-12 h-12 text-blue-400 mb-3" />
              <p className="text-gray-600 font-medium">{alt}</p>
            </div>
          )}
          
          <img
            src={src}
            alt={alt}
            className={`w-full h-80 object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            } group-hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 italic mt-4 text-center"
        >
          {caption}
        </motion.p>
      </div>
    </div>
  )
}

export default StoryImage
