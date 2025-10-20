import React from 'react'
import { cn } from '../lib/utils'

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative h-full overflow-y-auto overscroll-contain', className)}
      {...props}
    >
      {children}
    </div>
  ),
)
ScrollArea.displayName = 'ScrollArea'

export default ScrollArea
