import React from 'react'
import { cn } from '../lib/utils'

interface ScrollVelocityContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ScrollVelocityContainer: React.FC<ScrollVelocityContainerProps> = ({ className, children }) => {
  return (
    <div className={cn('relative flex w-full flex-col items-center justify-center overflow-hidden', className)}>
      {children}
    </div>
  )
}

interface ScrollVelocityRowProps extends React.HTMLAttributes<HTMLDivElement> {
  baseVelocity?: number
  direction?: 1 | -1
}

export const ScrollVelocityRow: React.FC<ScrollVelocityRowProps> = ({
  baseVelocity = 20,
  direction = 1,
  className,
  children,
}) => {
  return (
    <div
      className={cn('flex w-full whitespace-nowrap py-2 text-neutral-500', className)}
      style={{
        animation: `scroll-velocity ${Math.max(1, 60 / Math.abs(baseVelocity))}s linear infinite`,
        animationDirection: direction === -1 ? 'reverse' : 'normal',
      }}
    >
      {children}
    </div>
  )
}

export const scrollVelocityStyles = `
@keyframes scroll-velocity {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}`
