import { H2, Paragraph, XStack, YStack } from 'tamagui'

export function ProjectImpact() {
  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Project Impact</H2>
        <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Join a growing community of visionaries committed to sustainable living
        </Paragraph>
      </YStack>

      <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$green10">50</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Acres of Pristine Land</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$blue10">100+</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Interested Members</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$yellow10">3</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Natural Cenotes</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$purple10">24/7</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Solar Power</Paragraph>
        </YStack>
      </XStack>
    </YStack>
  )
} 