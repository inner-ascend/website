import { ThemeTint } from '@tamagui/logo'
import { memo } from 'react'
import { Button, XGroup, YStack } from 'tamagui'

export interface TabGroupProps {
  items: string[]
  activeIndex: number
  onSelect: (index: number) => void
}

export const TabGroup = memo(({ items, activeIndex, onSelect }: TabGroupProps) => {
  return (
    <ThemeTint>
      {/* Mobile Layout */}
      <YStack
        $gtSm={{ display: 'none' }}
        flexDirection="row"
        flexWrap="wrap"
        jc="center"
        bg="$color2"
        als="center"
        br="$5"
      >
        {items.map((item, i) => (
          <Button
            key={i}
            accessibilityLabel={`Select ${item}`}
            onPress={() => onSelect(i)}
            theme={i === activeIndex ? 'active' : null}
            chromeless={i !== activeIndex}
            size="$3"
            fontFamily="$silkscreen"
            width="50%"
            br="$5"
          >
            {item}
          </Button>
        ))}
      </YStack>

      {/* Desktop Layout */}
      <XGroup
        scrollable
        bordered
        bg="$color2"
        maxWidth="100%"
        als="center"
        ov="hidden"
        $sm={{ display: 'none' }}
      >
        {items.map((item, i) => (
          <XGroup.Item key={i}>
            <Button
              accessibilityLabel={`Select ${item}`}
              onPress={() => onSelect(i)}
              theme={i === activeIndex ? 'active' : null}
              chromeless={i !== activeIndex}
              borderRadius={0}
              size="$3"
              fontFamily="$silkscreen"
            >
              {item}
            </Button>
          </XGroup.Item>
        ))}
      </XGroup>
    </ThemeTint>
  )
})
