import { memo, useState } from 'react'
import { Text, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { ContainerLarge } from '../Containers'
import { InfoCardGrid, type InfoCardGridProps } from './InfoCardGrid'
import { TabGroup } from './TabGroup'

export interface ShowcaseItem extends InfoCardGridProps {
  name: string
  subtitle: string
}

export interface TabCardShowcaseProps {
  title: string
  titleMaxWidth?: number
  items: ShowcaseItem[]
}

export const TabCardShowcase = memo(
  ({ title, titleMaxWidth = 850, items }: TabCardShowcaseProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = items[activeIndex]

    return (
      <ContainerLarge position="relative">
        <YStack zi={1} space="$6" mb="$4">
          <YStack ai="center" space="$3">
            <HomeH2
              maw={titleMaxWidth}
              size="$10"
              ls={-0.5}
              $gtSm={{ size: '$11', maw: titleMaxWidth + 100 }}
            >
              {title}
            </HomeH2>
            <HomeH3 ai="center" jc="center" maw={650} $gtSm={{ maw: 750 }}>
              <Text fontWeight="bold">{activeItem.subtitle}</Text>
            </HomeH3>
          </YStack>

          <TabGroup
            items={items.map((item) => item.name)}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <InfoCardGrid leftCard={activeItem.leftCard} rightCard={activeItem.rightCard} />
        </YStack>
      </ContainerLarge>
    )
  }
)
