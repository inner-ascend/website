import { Code, Cpu, Layers } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'
import { useHeroHovered } from '~/features/site/home/useHeroHovered'
import { type FeatureItem } from '../molecules/FeatureCard'
import { FeatureGrid } from './FeatureGrid'

const features: FeatureItem[] = [
  {
    title: 'Decentralized Ownership',
    description:
      'Your NFT is your voice. Participate in transparent governance and shape the future of sustainable communities through our innovative DAO structure.',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96' as const,
    icon: Code,
    theme: 'green',
  },
  {
    title: 'NFT-Powered Property Rights',
    description:
      'Break down barriers to sustainable living with fractional ownership through NFTs. Secure, transparent, and community-validated property rights.',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96' as const,
    icon: Cpu,
    theme: 'blue',
  },
  {
    title: 'Holistic Development',
    description:
      'Connect with like-minded individuals in vibrant eco-communities. Experience personal and collective evolution through our unique incubator programs.',
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
