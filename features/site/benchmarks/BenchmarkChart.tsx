import { Paragraph, XStack, YStack } from 'tamagui'

const getBarColor = (name: string) => {
  switch (name) {
    case 'Carbon Negative':
      return '$green10'
    case 'Renewable Energy':
      return '$yellow10'
    case 'Food Self-Sufficiency':
      return '$blue10'
    case 'Water Conservation':
      return '$blue8'
    case 'Waste Reduction':
      return '$purple10'
    default:
      return '$gray10'
  }
}

export function BenchmarkChart({
  data,
  large,
  skipOthers = false,
  animateEnter = false,
}) {
  const maxValue = 100 // Using percentage scale

  return (
    <YStack gap="$2" my="$4">
      {data.map((result, i) => {
        const width = `${Math.round((result.value / maxValue) * 100)}%`
        return (
          <XStack gap="$3" key={i}>
            <YStack w={large ? 150 : 70}>
              <Paragraph
                key={result.name}
                size="$2"
                whiteSpace="nowrap"
                ta="right"
                my={-3}
                fontWeight="600"
              >
                {result.name}
              </Paragraph>
            </YStack>
            <XStack mr={65} flex={1} ai="center">
              <YStack
                bg={getBarColor(result.name)}
                o={1}
                width={width as any}
                height={20}
                br="$2"
                position="relative"
                jc="center"
                scaleX={1}
                {...(animateEnter && {
                  animation: 'lazy',
                  enterStyle: {
                    opacity: 0,
                    scaleX: 0,
                  },
                })}
              >
                <Paragraph
                  size="$2"
                  whiteSpace="nowrap"
                  position="absolute"
                  right="$-2"
                  x="100%"
                  fontWeight="600"
                >
                  {result.value}%
                </Paragraph>
              </YStack>
            </XStack>
          </XStack>
        )
      })}
    </YStack>
  )
}
