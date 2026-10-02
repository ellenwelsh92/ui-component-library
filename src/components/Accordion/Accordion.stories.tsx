import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AccordionItem } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80 max-w-full">
        <Story />
      </div>
    ),
  ],
  args: {
    question: 'Can I change my password?',
    answer: 'Yes. Open your account settings and choose Change password.',
  },
} satisfies Meta<typeof AccordionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const DefaultOpen: Story = { args: { defaultOpen: true } }
export const Chevron: Story = { args: { chevronTriggerIcon: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Reversed: Story = { args: { reverse: true } }
export const OpensUpwards: Story = { args: { openUpwards: true } }

export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [isOpen, setIsOpen] = useState(false)
    return <AccordionItem {...args} isOpen={isOpen} onToggle={() => setIsOpen((open) => !open)} />
  },
}

export const MultipleItems: Story = {
  render: (args) => (
    <>
      <AccordionItem {...args} />
      <AccordionItem
        question="Where can I update my email?"
        answer="You can update your email from your profile settings."
      />
      <AccordionItem
        question="How do I contact support?"
        answer={
          <p>
            Visit our{' '}
            <a className="underline" href="#support">
              support page
            </a>{' '}
            for help.
          </p>
        }
      />
    </>
  ),
}
