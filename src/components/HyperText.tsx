import React from 'react'
import { cn } from '../lib/utils'

interface HyperTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

const HyperText: React.FC<HyperTextProps> = ({ as: Component = 'span', className, children, ...props }) => {
  return (
    <Component
      className={cn('page-title', className)}
      style={{ color: 'var(--ink)' }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default HyperText
