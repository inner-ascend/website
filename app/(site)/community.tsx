import { useTint } from '@tamagui/logo'
import { Check, Leaf, Map, Sun, Users } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, H1, H2, H3, Image, Paragraph, Separator, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HomeSection, SectionTinted, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

export default function Community() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo 
        title="Mexico Project | Inner Ascend" 
        description="Join our regenerative living project in Mexico through NFT-based community ownership"
      />

      {/* Hero Section with Background */}
      <YStack pos="relative">
        <Image
          source={{ uri: '/banner-one.jpg' }}
          width="100%"
          height={500}
          pos="absolute"
          top={0}
          left={0}
          right={0}
          style={{ objectFit: 'cover' }}
        />
        <YStack
          fullscreen
          zi={1}
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        <YStack zi={2} py="$12" space="$6">
          <ContainerLarge space="$4">
            <H1 size="$10" ta="center" className="hero-text" color="$color1">
              Regenerative Living in Mexico
            </H1>
            <Paragraph size="$7" ta="center" theme="alt2" color="$color1">
              Own a piece of paradise through our NFT-powered community
            </Paragraph>
            <XStack jc="center" mt="$4" gap="$4">
              <Button size="$5" theme="green">Join Whitelist</Button>
              <Button size="$5" theme="alt1">Learn More</Button>
            </XStack>
          </ContainerLarge>
        </YStack>
      </YStack>

      {/* Key Features */}
      <TintSection index={1} zi={100}>
        <ContainerLarge>
          <XStack flexWrap="wrap" gap="$8" jc="center">
            <YStack w={250} ai="center" space="$2">
              <YStack p="$4" br="$6" bc="$green5">
                <Leaf size={24} color="var(--green10)" />
              </YStack>
              <H3 size="$5" ta="center">Regenerative Agriculture</H3>
              <Paragraph size="$3" ta="center" theme="alt2">
                Sustainable food production using permaculture principles
              </Paragraph>
            </YStack>
            <YStack w={250} ai="center" space="$2">
              <YStack p="$4" br="$6" bc="$blue5">
                <Users size={24} color="var(--blue10)" />
              </YStack>
              <H3 size="$5" ta="center">Community Living</H3>
              <Paragraph size="$3" ta="center" theme="alt2">
                Shared spaces and collaborative governance
              </Paragraph>
            </YStack>
            <YStack w={250} ai="center" space="$2">
              <YStack p="$4" br="$6" bc="$yellow5">
                <Sun size={24} color="var(--yellow10)" />
              </YStack>
              <H3 size="$5" ta="center">Sustainable Energy</H3>
              <Paragraph size="$3" ta="center" theme="alt2">
                100% renewable power and smart infrastructure
              </Paragraph>
            </YStack>
          </XStack>
        </ContainerLarge>
      </TintSection>

      {/* Location & Climate */}
      <TintSection index={2}>
        <SectionTinted bubble gradient>
          <ContainerLarge space="$8">
            <XStack gap="$8" flexWrap="wrap">
              <YStack f={1} miw={300} space="$4">
                <H2 size="$8">Paradise Found</H2>
                <Paragraph size="$5" theme="alt2">
                  Located in the heart of Mexico's Riviera Maya, our 50-acre property combines:
                </Paragraph>
                <YStack space="$2">
                  {[
                    'Year-round tropical climate perfect for agriculture',
                    'Rich biodiversity and natural cenotes',
                    'Easy access to international airports',
                    'Close proximity to beautiful beaches',
                    'Established expat community nearby'
                  ].map(item => (
                    <XStack key={item} ai="center" space="$2">
                      <Check size={16} color="var(--green10)" />
                      <Paragraph size="$4">{item}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
              <YStack f={1} miw={300} br="$4" ov="hidden" h={300}>
                <Map size="100%" />
              </YStack>
            </XStack>
          </ContainerLarge>
        </SectionTinted>
      </TintSection>

      {/* NFT Tiers */}
      <TintSection index={3}>
        <ContainerLarge space="$6">
          <YStack space="$4" mb="$6">
            <H2 size="$8" ta="center">Membership Tiers</H2>
            <Paragraph size="$5" ta="center" theme="alt2">
              Choose your level of involvement in our community
            </Paragraph>
          </YStack>
          <XStack flexWrap="wrap" gap="$4" jc="center">
            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
            >
              <YStack space="$2">
                <H3 size="$6">Founding Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">5 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$2">
                {[
                  'Private villa allocation',
                  'Full voting rights',
                  'Revenue sharing',
                  'Priority access to facilities',
                  'Founding member NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$2">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="green_alt2">Join Waitlist</Button>
            </YStack>

            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
              theme="purple"
            >
              <YStack space="$2">
                <H3 size="$6">Core Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">2 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$2">
                {[
                  'Shared living space',
                  'Partial voting rights',
                  'Community participation',
                  'Access to all facilities',
                  'Core member NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$2">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="purple_alt2">Reserve Spot</Button>
            </YStack>

            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
              theme="blue"
            >
              <YStack space="$2">
                <H3 size="$6">Community Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">0.5 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$2">
                {[
                  'Access to common areas',
                  'Community events',
                  'Seasonal stays',
                  'Basic amenities',
                  'Community NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$2">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="blue_alt2">Join Community</Button>
            </YStack>
          </XStack>
        </ContainerLarge>
      </TintSection>

      {/* Timeline */}
      <TintSection index={4}>
        <SectionTinted bubble gradient>
          <ContainerLarge space="$4">
            <H2 size="$8" ta="center" mb="$6">Project Roadmap</H2>
            <XStack flexWrap="wrap" gap="$4" jc="space-between">
              <YStack f={1} miw={250} space="$2" p="$4">
                <H3 size="$4" theme="alt2">Q4 2024</H3>
                <H3 size="$5">Land Acquisition</H3>
                <Paragraph size="$3" theme="alt2">
                  • Property purchase finalized
                  • Initial permits secured
                  • Community NFT launch
                </Paragraph>
              </YStack>
              <YStack f={1} miw={250} space="$2" p="$4">
                <H3 size="$4" theme="alt2">Q2 2025</H3>
                <H3 size="$5">Infrastructure</H3>
                <Paragraph size="$3" theme="alt2">
                  • Solar installation
                  • Water systems
                  • Initial housing units
                </Paragraph>
              </YStack>
              <YStack f={1} miw={250} space="$2" p="$4">
                <H3 size="$4" theme="alt2">Q4 2025</H3>
                <H3 size="$5">Community Launch</H3>
                <Paragraph size="$3" theme="alt2">
                  • First residents move in
                  • Farm operations begin
                  • Community spaces open
                </Paragraph>
              </YStack>
              <YStack f={1} miw={250} space="$2" p="$4">
                <H3 size="$4" theme="alt2">2026+</H3>
                <H3 size="$5">Expansion</H3>
                <Paragraph size="$3" theme="alt2">
                  • Additional housing
                  • Education center
                  • Wellness facilities
                </Paragraph>
              </YStack>
            </XStack>
          </ContainerLarge>
        </SectionTinted>
      </TintSection>

      {/* Call to Action */}
      <HomeSection>
        <ContainerLarge space="$8">
          <YStack ai="center" space="$4">
            <H2 size="$8" ta="center">Ready to Join?</H2>
            <Paragraph size="$5" ta="center" theme="alt2" maw={600}>
              Be part of the first blockchain-powered regenerative community in Mexico. 
              Limited spots available for founding members.
            </Paragraph>
            <XStack gap="$4" mt="$4">
              <Button size="$5" theme="green">Join Whitelist</Button>
              <Button size="$5" theme="alt2">Schedule a Call</Button>
            </XStack>
          </YStack>
        </ContainerLarge>
      </HomeSection>

      <Spacer />
      <SocialLinksRow />
      <Spacer size="$10" />
    </CommunityLayout>
  )
}

function CommunityLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}
