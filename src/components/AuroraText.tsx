import React from 'react'
import { cn } from '../lib/utils'

interface AuroraTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

const AuroraText: React.FC<AuroraTextProps> = ({ children, className, as: Component = 'span', ...props }) => {
  return (
    <Component className={cn('aurora-text', className)} {...props}>
      {children}
    </Component>
  )
}

export default AuroraText
