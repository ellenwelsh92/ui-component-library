import React, { useState } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { EyeIcon, EyeOff } from 'lucide-react'

interface ITogglePasswordInputProps {
  label?: string
  autoComplete?: React.ComponentProps<'input'>['autoComplete']
  hideLabel?: boolean
  autoFocus?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
}

const TogglePasswordInput = ({
  label = 'Input password',
  autoComplete,
  hideLabel = false,
  placeholder = 'Password',
  disabled,
  required = false,
  autoFocus,
}: ITogglePasswordInputProps) => {
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full" data-testid="password_input_toggle">
      <Input
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e?.target?.value)}
        autoComplete={autoComplete ?? 'off'}
        autoCapitalize="off"
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        hideLabel={hideLabel}
        className="pr-12"
      />

      <Button
        className="absolute right-2 bottom-2 h-8 w-8"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        data-testid="password_input_toggle_button"
        variant="ghost"
        disabled={!value}
        onClick={() => setShowPassword(!showPassword)}
        tabIndex={-1}
        icon={showPassword ? <EyeIcon size={14} /> : <EyeOff size={14} />}
      />
    </div>
  )
}

export default TogglePasswordInput
