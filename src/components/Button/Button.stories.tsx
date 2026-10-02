import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Plus } from 'lucide-react'
import { Button } from './Button'
import { variations } from './variants'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variations },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    fullWidth: { control: 'boolean' },
    selected: { control: 'boolean' },
    icon: { control: false },
  },
  args: { children: 'Button', onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Subtle: Story = {}
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Warning: Story = { args: { variant: 'warning' } }
export const Solid: Story = { args: { variant: 'solid' } }
export const Small: Story = { args: { size: 'small' } }
export const Large: Story = { args: { size: 'large' } }
export const Disabled: Story = { args: { disabled: true } }
export const Selected: Story = { args: { selected: true } }

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
}

export const WithIcon: Story = {
  args: {
    children: 'Add item',
    icon: <Plus size={18} />,
  },
}

export const IconOnly: Story = {
  args: {
    children: null,
    'aria-label': 'Add item',
    icon: <Plus size={18} />,
  },
}
