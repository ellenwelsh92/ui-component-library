import type { Meta, StoryObj } from '@storybook/react-vite'
import TogglePassword from './TogglePassword'
import { Button } from '../Button'

const meta = {
  title: 'Components/TogglePassword',
  component: TogglePassword,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hideLabel: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    //   autoComplete?: React.ComponentProps<'input'>['autoComplete']
  },
  args: {},
} satisfies Meta<typeof TogglePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Required: Story = {
  args: { required: true, label: 'Password (required)' },
  render: (args) => (
    <form className="w-80 space-y-4" onSubmit={(event) => event.preventDefault()}>
      <TogglePassword {...args} />
      <p className="text-sm text-studio-cream/60">
        Submit with an empty password to see the validation style.
      </p>
      <Button type="submit">Submit</Button>
    </form>
  ),
}

// const meta = {
//   title: 'Components/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     variant: { control: 'select', options: variations },
//     size: { control: 'select', options: ['small', 'medium', 'large'] },
//     fullWidth: { control: 'boolean' },
//     selected: { control: 'boolean' },
//     icon: { control: false },
//   },
//   args: { children: 'Button', onClick: fn() },
// } satisfies Meta<typeof Button>
