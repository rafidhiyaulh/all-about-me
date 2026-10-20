import React from 'react'
import { cn } from '../lib/utils'

interface HighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  action?: 'underline' | 'highlight'
  /** Accepted for backwards compatibility with existing call sites; the rendered
   * tone always comes from the brand tokens so every highlight stays consistent. */
  color?: string
}

const Highlighter: React.FC<HighlighterProps> = ({
  action = 'highlight',
  className,
  children,
  ...props
}) => {
  if (action === 'underline') {
    return (
      <span
        className={cn('relative inline-block font-semibold', className)}
        style={{
          color: 'var(--ink)',
          backgroundImage: 'linear-gradient(transparent calc(100% - 0.14em), var(--teal) 0)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
        {...props}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn('rounded-sm px-1 font-semibold', className)}
      style={{ background: 'var(--brand-w)', color: 'var(--ink)', boxShadow: 'inset 0 -2px 0 var(--brand)' }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Highlighter
