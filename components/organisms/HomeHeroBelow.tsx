import { Code, Cpu, Layers } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'
import { useHeroHovered } from '~/features/site/home/useHeroHovered'
import { type FeatureItem } from '../molecules/FeatureCard'
import { FeatureGrid } from './FeatureGrid'

const features: FeatureItem[] = [
  {
    title: 'Community',
    description:
      'Creating a regenerative sanctuary where people rediscover what it means to live in true reciprocity with nature and each other',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96' as const,
    icon: Code,
    theme: 'green',
  },
  {
    title: 'Education',
    description:
      'Immersive learning experiences that blend ancestral wisdom with contemporary skills for sustainable, sovereign living',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96' as const,
    icon: Cpu,
    theme: 'blue',
  },
  {
    title: 'Impact',
    description:
      'A heart-led social project designed to radiate outward and plant seeds of change rather than exist as an isolated bubble',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96' as const,
    icon: Layers,
    theme: 'purple',
  },
] as const

export function HomeHeroBelow() {
  const [hovered, setHovered] = useHeroHovered()

  return (
    <YStack pos="relative" zi={1000} py="$4" pt="$6" pb="$10">
      <FeatureGrid features={features} onFeatureHover={setHovered} />
    </YStack>
  )
}
