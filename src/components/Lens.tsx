import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../lib/utils'

interface LensProps {
  children: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>
  zoomFactor?: number
  lensSize?: number
  isStatic?: boolean
  ariaLabel?: string
  className?: string
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 2,
  lensSize = 160,
  isStatic = false,
  ariaLabel = 'Area pembesaran',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const onlyChild = useMemo(() => React.Children.only(children), [children]) as React.ReactElement<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const container = containerRef.current
      if (!container || isStatic) return

      const rect = container.getBoundingClientRect()
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY
      const x = clientX - rect.left
      const y = clientY - rect.top
      setCursor({ x, y })
    },
    [isStatic],
  )

  const clearCursor = useCallback(() => {
    if (!isStatic) setCursor(null)
  }, [isStatic])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      setContainerSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const backgroundSize = `${containerSize.width * zoomFactor}px ${containerSize.height * zoomFactor}px`
  const lensPosition = cursor
    ? {
        left: clamp(cursor.x - lensSize / 2, 0, Math.max(0, containerSize.width - lensSize)),
        top: clamp(cursor.y - lensSize / 2, 0, Math.max(0, containerSize.height - lensSize)),
      }
    : null

  const backgroundPosition =
    cursor && containerSize.width && containerSize.height
      ? `-${clamp(cursor.x * zoomFactor - lensSize / 2, 0, containerSize.width * zoomFactor)}px -${clamp(
          cursor.y * zoomFactor - lensSize / 2,
          0,
          containerSize.height * zoomFactor,
        )}px`
      : undefined

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden rounded-2xl', className)}
      onMouseMove={handleMove}
      onMouseLeave={clearCursor}
      onTouchMove={handleMove}
      onTouchEnd={clearCursor}
      aria-label={ariaLabel}
    >
      {React.cloneElement(onlyChild, {
        className: cn('block h-full w-full object-cover select-none', onlyChild.props.className),
        draggable: false,
      })}
      {(cursor || isStatic) && lensPosition && (
        <div
          className="pointer-events-none absolute rounded-full border border-neutral-300/80 shadow-xl transition-opacity duration-150"
          style={{
            width: lensSize,
            height: lensSize,
            left: lensPosition.left,
            top: lensPosition.top,
            backgroundImage: `url(${onlyChild.props.src ?? ''})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize,
            backgroundPosition,
          }}
        />
      )}
    </div>
  )
}

export default Lens
