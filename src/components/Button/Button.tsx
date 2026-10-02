import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { TVariations } from './variants'

export type { TVariations } from './variants'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariations
  size?: 'small' | 'medium' | 'large'
  selected?: boolean
  fullWidth?: boolean
  icon?: ReactNode
}

const baseClasses = clsx(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:bg-studio-cream/10 focus-visible:outline-none [&_svg]:pointer-events-none',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
)

const variants: Record<TVariations, string> = {
  ghost:
    'text-studio-ink enabled:hover:bg-studio-ink/5 dark:text-studio-cream dark:enabled:hover:bg-studio-cream/5',
  subtle:
    'text-studio-ink bg-studio-ink/10 dark:text-studio-cream dark:bg-studio-cream/10 shadow-sm shadow-studio-ink/35 enabled:hover:bg-studio-cream/15 focus-visible:bg-studio-cream/15',
  destructive:
    'text-studio-ink bg-studio-ink/10 dark:text-studio-cream dark:bg-studio-cream/10 enabled:hover:bg-status-error/10 enabled:hover:text-status-error',
  warning:
    'text-studio-cream bg-status-warning enabled:hover:bg-status-warning/70 dark:text-status-warning dark:bg-status-warning/10 dark:enabled:hover:bg-status-warning/15',
  solid:
    'text-studio-cream bg-studio-ink shadow-sm enabled:hover:bg-studio-ink/70 dark:text-studio-ink dark:bg-studio-cream dark:enabled:hover:bg-[#ded6d0]',
}

const sizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-sm',
  large: 'px-5 py-3 text-base',
}

const iconOnlySizes = {
  small: 'p-1.5 text-sm',
  medium: 'p-2 text-sm',
  large: 'p-3 text-base',
}

export const Button = ({
  variant = 'subtle',
  size = 'medium',
  selected = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
  icon,
  children,
  ...props
}: ButtonProps) => {
  const isIconOnly =
    icon != null && (children == null || typeof children === 'boolean' || children === '')

  return (
    <button
      type={type}
      disabled={disabled || selected}
      className={clsx(
        baseClasses,
        variants[variant],
        isIconOnly ? iconOnlySizes[size] : sizes[size],
        { 'bg-studio-cream/20 hover:bg-studio-cream/20 disabled:opacity-100': selected },
        { 'w-full': fullWidth },
        className,
      )}
      {...props}
    >
      {icon != null && (
        <span aria-hidden="true" className="inline-flex shrink-0 items-center justify-center">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}
