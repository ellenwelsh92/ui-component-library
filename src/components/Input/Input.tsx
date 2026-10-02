import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes, KeyboardEventHandler } from 'react'

const actionKeys = new Set(['Escape', 'Enter'])

const textTransforms = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  none: 'normal-case',
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hideLabel?: boolean
  invalid?: boolean
  enableKeyPropagation?: boolean
  textSize?: string
  textTransform?: keyof typeof textTransforms
  wrapperClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    hideLabel = false,
    invalid = false,
    enableKeyPropagation = false,
    textSize = 'text-base',
    textTransform = 'none',
    wrapperClassName,
    className,
    id,
    type = 'text',
    spellCheck = false,
    onKeyDown,
    onKeyUp,
    'aria-invalid': ariaInvalid,
    ...props
  },
  ref,
) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  const handleKey =
    (handler?: KeyboardEventHandler<HTMLInputElement>): KeyboardEventHandler<HTMLInputElement> =>
    (event) => {
      if (!enableKeyPropagation && !actionKeys.has(event.key)) {
        event.stopPropagation()
      }
      handler?.(event)
    }

  return (
    <div className={clsx('w-full', wrapperClassName)}>
      <label
        htmlFor={inputId}
        className={clsx(
          hideLabel
            ? 'sr-only'
            : 'mb-1 ml-2 block text-xs font-semibold text-studio-ink/75 dark:text-studio-cream/50',
        )}
      >
        {label}
      </label>
      <input
        {...props}
        ref={ref}
        id={inputId}
        type={type}
        spellCheck={spellCheck}
        aria-invalid={invalid || ariaInvalid}
        onKeyDown={handleKey(onKeyDown)}
        onKeyUp={handleKey(onKeyUp)}
        className={clsx(
          'h-12 w-full rounded-xl px-2 py-1',
          'appearance-none bg-studio-ink/5 text-studio-ink outline-none placeholder:text-studio-ink/60 dark:bg-studio-cream/5 dark:text-studio-cream dark:placeholder:text-studio-cream/45',
          'transition-[background-color,box-shadow] duration-200',
          'focus-visible:bg-studio-ink/10 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-studio-ink/50 dark:focus-visible:bg-white/10 dark:focus-visible:outline-studio-cream/50',
          'disabled:cursor-not-allowed disabled:opacity-60',
          'aria-invalid:outline-solid aria-invalid:outline-1 aria-invalid:outline-status-error aria-invalid:focus-visible:outline-2 aria-invalid:focus-visible:outline-status-error',
          'user-invalid:outline-solid user-invalid:outline-1 user-invalid:outline-status-error user-invalid:focus-visible:outline-2 user-invalid:focus-visible:outline-status-error',
          'autofill:[-webkit-text-fill-color:var(--color-studio-ink)] autofill:caret-studio-ink autofill:shadow-inner dark:autofill:[-webkit-text-fill-color:var(--color-studio-cream)] dark:autofill:caret-studio-cream',
          type === 'number' &&
            '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          textSize,
          textTransforms[textTransform],
          className,
        )}
      />
    </div>
  )
})
