import React from 'react'
import { cn } from '../lib/utils'

interface ProgressiveBlurProps {
  position?: 'top' | 'bottom'
  height?: string
  className?: string
}

const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  position = 'bottom',
  height = '25%',
  className,
}) => {
  const isBottom = position === 'bottom'

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0',
        isBottom ? 'bottom-0' : 'top-0',
        className,
      )}
      style={{ height }}
    >
      <div
        className={cn(
          'h-full w-full',
          isBottom
            ? 'bg-gradient-to-t from-neutral-100 via-neutral-100/40 to-transparent'
            : 'bg-gradient-to-b from-neutral-100 via-neutral-100/40 to-transparent',
        )}
      />
    </div>
  )
}

export default ProgressiveBlur
