import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { DetailSection, DetailsList } from '../atoms/DetailsList'
import { Feature, FeatureList } from '../atoms/FeatureList'
import { PropertyCard } from '../atoms/PropertyCard'
import { PropertyGrid } from '../molecules/PropertyGrid'

const features: Feature[] = [
  {
    title: 'Perfect Growing Climate',
    description: 'Mountain jungle environment at 1200m altitude with ideal growing conditions',
  },
  {
    title: 'Natural Resources',
    description: 'Rich biodiversity with pristine mountain springs and diverse flora',
  },
  {
    title: 'Strategic Location',
    description: '1-hour from Huatulco International Airport and Pacific beaches',
  },
  {
    title: 'Community Integration',
    description: 'Thriving expat community and local cultural experiences',
  },
  {
    title: 'Development Ready',
    description: 'All permits secured and infrastructure planning complete',
  },
]

const details: DetailSection[] = [
  {
    title: 'Climate & Environment',
    items: [
      'Elevation: 1200m above sea level',
      'Average temperature: 20-28°C (68-82°F)',
      'Rainy season: June to October',
      'Climate: Mountain jungle microclimate',
    ],
  },
  {
    title: 'Travel & Access',
    items: [
      '1 hour from Huatulco International Airport',
      '1 hour to Pacific beaches',
      'Easy access to local markets',
      'Connected to mountain communities',
    ],
  },
  {
    title: 'Property Overview',
    items: [
      'Pristine mountain jungle terrain',
      'Natural springs and water sources',
      'Rich biodiversity and wildlife',
      'Natural terraced landscape',
    ],
  },
]

export function MexicoProperty() {
  return (
    <YStack zi={1} space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Location & Climate
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Experience the perfect blend of mountain jungle and coastal proximity in Oaxaca's pristine
          Sierra Madre del Sur
        </HomeH3>
      </YStack>

      <PropertyGrid>
        <PropertyCard
          title="Paradise Found"
          subtitle="Our carefully selected location offers the perfect blend of natural beauty and strategic advantages:"
        >
          <FeatureList features={features} />
        </PropertyCard>

        <PropertyCard title="Location Details">
          <DetailsList sections={details} />
        </PropertyCard>
      </PropertyGrid>
    </YStack>
  )
}
