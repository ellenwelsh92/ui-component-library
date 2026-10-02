import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { label: 'Name', placeholder: 'Enter your name', onChange: fn() },
  argTypes: {
    hideLabel: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    enableKeyPropagation: { control: 'boolean' },
    textTransform: { control: 'select', options: ['none', 'uppercase', 'lowercase', 'capitalize'] },
  },
  decorators: [
    (Story) => (
      <div className="w-80 rounded-2xl bg-slate-900 p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const HiddenLabel: Story = {
  args: { hideLabel: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Name' })
    await expect(canvas.getByText('Name')).toHaveClass('sr-only')
    await userEvent.type(input, 'Ellen')
    await expect(input).toHaveValue('Ellen')
  },
}
export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'invalid@email',
    label: 'Email',
    type: 'email',
    'aria-describedby': 'email-error',
  },
  render: (args) => (
    <>
      <Input {...args} />
      <p id="email-error" className="mt-2 text-sm text-status-error">
        Enter a valid email address.
      </p>
    </>
  ),
}
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Unavailable' } }
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: 'Ellen' } }
export const Number: Story = {
  args: { label: 'Quantity', type: 'number', min: 0, defaultValue: 1 },
}
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Enter a password',
  },
}
export const Controlled: Story = {
  render: function ControlledInput(args) {
    const [value, setValue] = useState('')
    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          args.onChange?.(event)
        }}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: 'Name' })
    await userEvent.type(input, 'Ellen')
    await expect(input).toHaveValue('Ellen')
  },
}
