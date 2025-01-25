import { Globe, Heart, Leaf, Palette, Sun, Users } from '@tamagui/lucide-icons'
import { Feature, FeatureGrid } from '../molecules/FeatureGrid'

const features: Feature[] = [
  {
    title: 'Regenerative Agriculture',
    description:
      'Beyond organic farming: our food forests and permaculture systems restore soil health while producing abundant tropical fruits and vegetables.',
    icon: Leaf,
    theme: 'green',
    features: 'Food forests • Aquaponics • Seed saving • Composting',
  },
  {
    title: 'Community Living',
    description:
      'Experience life in a purpose-driven community with shared workspaces, communal gardens, and a governance system that empowers all members.',
    icon: Users,
    theme: 'blue',
    features: 'Co-working • Shared kitchen • Events space • Learning center',
  },
  {
    title: 'Sustainable Energy',
    description:
      "Powered by Mexico's abundant sunshine through solar arrays and smart microgrids, with integrated water management systems.",
    icon: Sun,
    theme: 'yellow',
    features: 'Solar arrays • Battery storage • Smart metering • Greywater',
  },
  {
    title: 'Wellness Focus',
    description:
      'Nurture mind and body with dedicated spaces for yoga, meditation, and holistic health practices in harmony with nature.',
    icon: Heart,
    theme: 'purple',
    features: 'Yoga deck • Meditation garden • Natural pool • Healing center',
  },
  {
    title: 'Creative Spaces',
    description:
      'Express yourself in dedicated maker spaces and art studios, fostering a vibrant creative community culture.',
    icon: Palette,
    theme: 'orange',
    features: 'Art studio • Workshop • Music room • Performance space',
  },
  {
    title: 'Cultural Integration',
    description:
      'Bridge global and local communities through cultural exchange programs and partnerships with local artisans.',
    icon: Globe,
    theme: 'pink',
    features: 'Local markets • Language exchange • Artisan workshops • Festivals',
  },
]

export function KeyFeatures() {
  return <FeatureGrid features={features} />
}
