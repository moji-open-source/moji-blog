'use client'

import { useMemo } from 'react'
import { Badge } from './ui/badge'

interface TechStackOrbitProps<T = string> {
  rings: T[][]
  size?: number
  duration?: number
  gap?: number | number[]
  renderItem?: (item: T) => React.ReactNode
}

function OrbitingItem({
  children,
  radius,
  duration,
  delay,
  reverse,
}: {
  children: React.ReactNode
  radius: number
  duration: number
  delay: number
  reverse?: boolean
}) {
  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `-${delay}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateX(${radius}px)` }}
      >
        <div
          style={{
            animation: `orbit ${duration}s linear infinite`,
            animationDelay: `-${delay}s`,
            animationDirection: reverse ? 'normal' : 'reverse',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export function TechStackOrbit<T = string>({
  rings,
  size = 360,
  duration = 20,
  gap = 60,
  renderItem,
}: TechStackOrbitProps<T>) {
  const ringConfigs = useMemo(() => {
    const maxRadius = size / 2 - 20
    return rings.reduce<{ items: T[]; radius: number }[]>((acc, items, i) => {
      const g = Array.isArray(gap) ? (gap[i] ?? 60) : gap
      const prevRadius = acc.length > 0 ? acc[acc.length - 1].radius : 0
      acc.push({ items, radius: Math.min(prevRadius + g, maxRadius) })
      return acc
    }, [])
  }, [rings, size, gap])

  const renderedItems = useMemo(
    () =>
      rings.map(ring =>
        ring.map(item =>
          renderItem
            ? renderItem(item)
            : <Badge key={String(item)} variant="secondary" className="text-xs cursor-default">{String(item)}</Badge>,
        ),
      ),
    [rings, renderItem],
  )

  return (
    <div className="relative aspect-square" style={{ width: size }}>
      <svg className="pointer-events-none absolute inset-0 size-full">
        {ringConfigs.map(({ radius }, i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {ringConfigs.map(({ items, radius }, ringIndex) =>
        items.map((_, itemIndex) => (
          <OrbitingItem
            key={`${ringIndex}-${itemIndex}`}
            radius={radius}
            duration={duration}
            delay={(itemIndex * duration) / items.length}
            reverse={ringIndex % 2 === 0}
          >
            {renderedItems[ringIndex][itemIndex]}
          </OrbitingItem>
        )),
      )}

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
