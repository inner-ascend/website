import { Globe, Heart, Leaf, Palette, Sun, Users } from '@tamagui/lucide-icons'
import { H3, Paragraph, XStack, YStack } from 'tamagui'

export function KeyFeatures() {
  return (
    <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack 
          p="$4" 
          br="$6" 
          bc="$green5"
          pressStyle={{
            scale: 0.98,
            opacity: 0.85
          }}
          animation="quick"
        >
          <Leaf size={24} color="var(--green10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Regenerative Agriculture</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Beyond organic farming: our food forests and permaculture systems restore soil health while producing abundant tropical fruits and vegetables.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Food forests • Aquaponics • Seed saving • Composting
          </Paragraph>
        </YStack>
      </YStack>

      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack p="$4" br="$6" bc="$blue5">
          <Users size={24} color="var(--blue10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Community Living</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Experience life in a purpose-driven community with shared workspaces, communal gardens, and a governance system that empowers all members.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Co-working • Shared kitchen • Events space • Learning center
          </Paragraph>
        </YStack>
      </YStack>

      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack p="$4" br="$6" bc="$yellow5">
          <Sun size={24} color="var(--yellow10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Sustainable Energy</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Powered by Mexico's abundant sunshine through solar arrays and smart microgrids, with integrated water management systems.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Solar arrays • Battery storage • Smart metering • Greywater
          </Paragraph>
        </YStack>
      </YStack>

      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack p="$4" br="$6" bc="$purple5">
          <Heart size={24} color="var(--purple10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Wellness Focus</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Nurture mind and body with dedicated spaces for yoga, meditation, and holistic health practices in harmony with nature.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Yoga deck • Meditation garden • Natural pool • Healing center
          </Paragraph>
        </YStack>
      </YStack>

      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack p="$4" br="$6" bc="$orange5">
          <Palette size={24} color="var(--orange10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Creative Spaces</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Express yourself in dedicated maker spaces and art studios, fostering a vibrant creative community culture.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Art studio • Workshop • Music room • Performance space
          </Paragraph>
        </YStack>
      </YStack>

      <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
        <YStack p="$4" br="$6" bc="$pink5">
          <Globe size={24} color="var(--pink10)" />
        </YStack>
        <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Cultural Integration</H3>
        <YStack space="$2">
          <Paragraph size="$3" ta="center" theme="alt2">
            Bridge global and local communities through cultural exchange programs and partnerships with local artisans.
          </Paragraph>
          <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
            Local markets • Language exchange • Artisan workshops • Festivals
          </Paragraph>
        </YStack>
      </YStack>
    </XStack>
  )
} 