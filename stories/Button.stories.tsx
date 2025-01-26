import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'tamagui'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: '$4',
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: 'blue',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'gray',
  },
}

export const Large: Story = {
  args: {
    size: '$6',
    theme: 'blue',
  },
}

export const Small: Story = {
  args: {
    size: '$2',
    theme: 'blue',
  },
} 