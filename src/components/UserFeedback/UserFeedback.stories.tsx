import type { Meta, StoryObj } from '@storybook/react-vite'
import UserFeedback from './UserFeedback'
import { STATUS_CLASSES, type Status } from '../../status-colors'

const statuses = Object.keys(STATUS_CLASSES) as Status[]

const meta = {
  title: 'Components/UserFeedback',
  component: UserFeedback,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: statuses },
    heading: { control: 'text' },
    text: { control: 'text' },
    loading: { control: 'boolean' },
  },
  args: {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos expedita dolorum ad inventore, numquam doloribus magni ipsam eum, voluptate est iusto itaque optio commodi facere laudantium veritatis accusantium unde. Maxime.',
  },
} satisfies Meta<typeof UserFeedback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = { args: { type: 'error' } }
export const Success: Story = { args: { type: 'success' } }
export const Warning: Story = { args: { type: 'warning' } }
export const Info: Story = { args: { type: 'info' } }
export const Loading: Story = { args: { loading: true } }
