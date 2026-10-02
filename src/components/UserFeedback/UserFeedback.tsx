import clsx from 'clsx'
import { STATUS_CLASSES, type Status } from '../../status-colors'
import { SunLoader } from '../SunLoader'

interface IStatusFeedbackProps {
  type?: Status
  heading: string
  text: string
  loading?: boolean
}

const StatusFeedback = ({
  type = 'neutral',
  heading,
  text,
  loading = false,
}: IStatusFeedbackProps) => {
  const statusClasses = STATUS_CLASSES[type]

  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded-2xl border px-4 py-3 dark:border-0',
        statusClasses.background,
        statusClasses.border,
      )}
    >
      {loading && <SunLoader size="medium" color="currentColor" className={statusClasses.text} />}

      <div className="space-y-1" data-testid="status_feedback">
        <h2 className={clsx('text-base font-semibold', statusClasses.text)}>{heading}</h2>
        <p className={clsx(statusClasses.text, 'text-sm leading-relaxed opacity-70')}>{text}</p>
      </div>
    </div>
  )
}

export default StatusFeedback
