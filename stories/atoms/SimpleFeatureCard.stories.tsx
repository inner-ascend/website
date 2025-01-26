import type { Meta, StoryObj } from '@storybook/react'
import { Globe } from '@tamagui/lucide-icons'
import { SimpleFeatureCard } from '../../components/atoms/SimpleFeatureCard'

const meta = {
  title: 'Atoms/SimpleFeatureCard',
  component: SimpleFeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleFeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Cultural Integration',
    description: 'Bridge global and local communities through cultural exchange programs.',
    icon: Globe,
    theme: 'pink',
    features: 'Local markets • Language exchange • Artisan workshops',
  },
}

export const GreenTheme: Story = {
  args: {
    title: 'Sustainable Living',
    description: 'Experience eco-friendly living with renewable energy and permaculture.',
    icon: Globe,
    theme: 'green',
    features: 'Solar power • Food forests • Natural building',
  },
}

export const BlueTheme: Story = {
  args: {
    title: 'Community Hub',
    description: 'Connect with like-minded individuals in shared spaces.',
    icon: Globe,
    theme: 'blue',
    features: 'Co-working • Events • Workshops',
  },
}
