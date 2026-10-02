import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export interface SunLoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
  color?: string
  inline?: boolean
  label?: string
}

const sizes = {
  small: 'size-4',
  medium: 'size-6',
  large: 'size-20',
}

const rings = [
  {
    animation: 'animate-sun-inner',
    dots: [
      { x: 37.5, y: 23.85 },
      { x: 47.25, y: 27.9 },
      { x: 51.3, y: 37.5 },
      { x: 47.25, y: 47.25 },
      { x: 37.5, y: 51.3 },
      { x: 27.9, y: 47.25 },
      { x: 23.85, y: 37.5 },
      { x: 27.9, y: 27.9 },
    ],
  },
  {
    animation: 'animate-sun-middle',
    dots: [
      { x: 37.5, y: 16.05 },
      { x: 52.65, y: 22.35 },
      { x: 58.95, y: 37.5 },
      { x: 52.65, y: 52.65 },
      { x: 37.5, y: 58.95 },
      { x: 22.35, y: 52.65 },
      { x: 16.05, y: 37.5 },
      { x: 22.35, y: 22.35 },
    ],
  },
  {
    animation: 'animate-sun-outer',
    dots: [
      { x: 37.5, y: 8.25 },
      { x: 58.2, y: 16.8 },
      { x: 66.75, y: 37.5 },
      { x: 58.2, y: 58.2 },
      { x: 37.5, y: 66.75 },
      { x: 16.8, y: 58.2 },
      { x: 8.25, y: 37.5 },
      { x: 16.8, y: 16.8 },
    ],
  },
]

export function SunLoader({
  size = 'large',
  color,
  inline = false,
  label = 'Loading',
  className,
  style,
  ...props
}: SunLoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      data-testid="sun_loader"
      {...props}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center align-middle',
        color === undefined && 'text-studio-ink dark:text-studio-cream',
        sizes[size],
        inline || size !== 'large' ? 'relative' : 'fixed top-1/2 left-1/2 -translate-1/2',
        className,
      )}
      style={{ color, ...style }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 75 75"
        className="size-full fill-current"
      >
        {rings.map((ring) => (
          <g
            key={ring.animation}
            className={clsx('origin-center motion-reduce:animate-none', ring.animation)}
          >
            {ring.dots.map(({ x, y }, index) => (
              <circle key={index} cx={x} cy={y} r={1.875} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

export default SunLoader
