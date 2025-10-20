import React from 'react'
import { cn } from '../lib/utils'

interface HighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  action?: 'underline' | 'highlight'
  color?: string
}

const Highlighter: React.FC<HighlighterProps> = ({
  action = 'highlight',
  color = '#ffeb3b',
  className,
  children,
  ...props
}) => {
  if (action === 'underline') {
    return (
      <span
        className={cn('relative inline-block', className)}
        {...props}
        style={{
          backgroundImage: `linear-gradient(transparent calc(100% - 0.15em), ${color} 0)`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn('rounded-sm px-1', className)}
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Highlighter
