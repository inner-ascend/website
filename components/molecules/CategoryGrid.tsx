import { XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { CategoryCard, type CategoryCardProps } from '../atoms/CategoryCard'

export interface Category extends Omit<CategoryCardProps, 'theme'> {
  theme?: CategoryCardProps['theme']
}

export interface CategoryGridProps {
  title: string
  subtitle: string
  categories: Category[]
}

export function CategoryGrid({ title, subtitle, categories }: CategoryGridProps) {
  return (
    <YStack space="$6">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          {title}
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          {subtitle}
        </HomeH3>
      </YStack>

      <XStack flexWrap="wrap" gap="$8" rowGap="$8" jc="center" $sm={{ gap: '$4' }} pb="$8">
        {categories.map((category, i) => (
          <YStack
            key={i}
            f={1}
            $sm={{
              miw: 'auto',
              w: '100%',
            }}
          >
            <CategoryCard {...category} />
          </YStack>
        ))}
      </XStack>
    </YStack>
  )
}
