import { H2, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

export function ProjectImpact() {
  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: "$8" }}>Community Impact</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Building a regenerative community that benefits both people and planet
        </HomeH3>
      </YStack>

      <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$green10">1200m</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Elevation in Mountain Jungle</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$blue10">80%</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Self-Sufficiency Goal</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$yellow10">100+</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Native Plant Species</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$purple10">365</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Growing Days Per Year</Paragraph>
        </YStack>
      </XStack>

      <XStack flexWrap="wrap" gap="$8" jc="center" mt="$4" $sm={{ gap: "$6" }}>
        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$orange10">4+</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Water Springs</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$pink10">30+</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Local Partnerships</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$red10">250+</H2>
          <Paragraph size="$4" ta="center" theme="alt2">Interested Members</Paragraph>
        </YStack>

        <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
          <H2 size="$9" color="$blue10">1hr</H2>
          <Paragraph size="$4" ta="center" theme="alt2">To Beach & Airport</Paragraph>
        </YStack>
      </XStack>
    </YStack>
  )
} 