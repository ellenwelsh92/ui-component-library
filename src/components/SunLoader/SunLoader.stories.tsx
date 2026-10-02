import type { Meta, StoryObj } from '@storybook/react-vite'
import { SunLoader } from './SunLoader'

const meta = {
  title: 'Components/SunLoader',
  component: SunLoader,
  tags: ['autodocs'],
  args: { size: 'large', inline: true, label: 'Loading' },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'color' },
    inline: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen min-w-64 items-center justify-center rounded-xl bg-studio-light p-8 dark:bg-studio-ground">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SunLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }
export const CustomColor: Story = { args: { color: '#ff9500' } }
export const ViewportCentered: Story = {
  args: { inline: false },
  parameters: { layout: 'fullscreen' },
}
export const Inline: Story = {
  args: { size: 'medium', color: 'currentColor' },
  render: (args) => (
    <div className="flex items-center gap-3 text-studio-ink dark:text-studio-cream">
      <SunLoader {...args} />
      <span>Loading your content…</span>
    </div>
  ),
}
