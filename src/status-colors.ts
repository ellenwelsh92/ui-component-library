export const STATUS_CLASSES = {
  error: {
    background: 'bg-status-error/10',
    border: 'border-status-error/10',
    dot: 'bg-status-error',
    text: 'text-status-error',
  },
  success: {
    background: 'bg-status-success/10',
    border: 'border-status-success/10',
    dot: 'bg-status-success',
    text: 'text-status-success',
  },
  warning: {
    background: 'bg-status-warning/10',
    border: 'border-status-warning/10',
    dot: 'bg-status-warning',
    text: 'text-status-warning',
  },
  info: {
    background: 'bg-status-info/10',
    border: 'border-status-info/10',
    dot: 'bg-status-info',
    text: 'text-status-info',
  },
  neutral: {
    background: 'bg-status-neutral/10',
    border: 'border-status-neutral/10',
    dot: 'bg-status-neutral',
    text: 'text-status-neutral',
  },
} as const

export type Status = keyof typeof STATUS_CLASSES
