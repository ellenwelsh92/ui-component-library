import { useId, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { ChevronDown, Plus } from 'lucide-react'

export interface AccordionItemProps {
  question: string
  answer: ReactNode
  icon?: ReactNode
  trigger?: ReactNode
  chevronTriggerIcon?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  openUpwards?: boolean
  reverse?: boolean
  isOpen?: boolean
  onToggle?: () => void
  testId?: string
  className?: string
  answerWrapperClassName?: string
}

export const AccordionItem = ({
  question,
  answer,
  icon,
  trigger,
  chevronTriggerIcon = false,
  defaultOpen = false,
  disabled = false,
  openUpwards = false,
  reverse = false,
  isOpen: controlledIsOpen,
  onToggle,
  testId,
  className,
  answerWrapperClassName,
}: AccordionItemProps) => {
  const id = useId()
  const triggerId = `${id}-trigger`
  const panelId = `${id}-panel`
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)
  const isOpen = controlledIsOpen ?? internalIsOpen

  const toggle = () => {
    if (controlledIsOpen === undefined) setInternalIsOpen((open) => !open)
    onToggle?.()
  }

  const panel = (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={clsx(
        'grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        !reverse && 'pl-7',
        answerWrapperClassName,
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={clsx('text-sm leading-relaxed text-studio-text-secondary', {
            'pt-4 pb-0': openUpwards,
            'pb-4 ': !openUpwards,
          })}
        >
          {answer}
        </div>
      </div>
    </div>
  )

  const ToggleIcon = chevronTriggerIcon ? ChevronDown : Plus

  return (
    <div
      className={clsx(
        'w-full border-studio-cream/15',
        { 'border-b': !openUpwards, 'border-t': openUpwards },
        className,
      )}
      data-testid={testId}
    >
      {openUpwards && panel}
      <h3>
        <button
          id={triggerId}
          type="button"
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
          className={clsx(
            'flex w-full items-center gap-3 rounded-lg py-4 text-left text-sm text-studio-cream',
            'cursor-pointer enabled:hover:text-studio-text-secondary disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-studio-cream/50',
            reverse && 'flex-row-reverse',
          )}
        >
          <ToggleIcon
            size={16}
            aria-hidden="true"
            className={clsx(
              'shrink-0 transition-transform duration-200 motion-reduce:transition-none',
              chevronTriggerIcon ? (isOpen ? 'rotate-0' : '-rotate-90') : isOpen && 'rotate-45',
            )}
          />
          <span className="flex flex-1 items-center gap-2">
            {trigger ?? (
              <>
                {icon && <span aria-hidden="true">{icon}</span>}
                {question}
              </>
            )}
          </span>
        </button>
      </h3>
      {!openUpwards && panel}
    </div>
  )
}

export default AccordionItem
