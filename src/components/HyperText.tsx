import React from 'react'
import { cn } from '../lib/utils'

interface HyperTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

const HyperText: React.FC<HyperTextProps> = ({ as: Component = 'span', className, children, ...props }) => {
  return (
    <Component
      className={cn(
        'relative inline-block bg-clip-text text-transparent transition-colors duration-300',
        'bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 hover:from-neutral-900 hover:to-neutral-900',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default HyperText
