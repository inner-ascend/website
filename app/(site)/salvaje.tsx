import { useTint } from '@tamagui/logo'
import { useMemo } from 'react'
import { Button, H1, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { HomeSection, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'
import { SalvajeHero } from '~/features/site/salvaje/SalvajeHero'
import { SalvajeVision } from '~/features/site/salvaje/SalvajeVision'
import { SalvajeLand } from '~/features/site/salvaje/SalvajeLand'
import { SalvajeCommunity } from '~/features/site/salvaje/SalvajeCommunity'
import { SalvajeIndigenous } from '~/features/site/salvaje/SalvajeIndigenous'
import { SalvajePrograms } from '~/features/site/salvaje/SalvajePrograms'
import { SalvajeMembership } from '~/features/site/salvaje/SalvajeMembership'
import { SalvajeImpact } from '~/features/site/salvaje/SalvajeImpact'
import { SalvajeRoadmap } from '~/features/site/salvaje/SalvajeRoadmap'
import { SalvajeSocialProof } from '~/features/site/salvaje/SalvajeSocialProof'
import { SalvajeFAQ } from '~/features/site/salvaje/SalvajeFAQ'
import { SalvajeStickyBar } from '~/features/site/salvaje/SalvajeStickyBar'

export default function Salvaje() {
  return (
    <SalvajeLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Proyecto Salvaje - Regenerative Village School | Sovereign Living Community"
        description="Join Proyecto Salvaje's regenerative village school in Oaxaca. Creation of an intentional regenerative community for human integrity and sovereign living. 12 acres of sacred land."
      />

      {/* Sticky CTA Bar */}
      <SalvajeStickyBar />

      {/* Hero Section */}
      <SalvajeHero />

      {/* Vision */}
      <TintSection index={1}>
        <YStack bg="$salvaje_mango1" py="$16">
          <ContainerLarge>
            <SalvajeVision />
          </ContainerLarge>
        </YStack>
      </TintSection>

      {/* The Land */}
      <TintSection index={2}>
        <ContainerLarge>
          <SalvajeLand />
        </ContainerLarge>
      </TintSection>

      {/* Community */}
      <TintSection index={3}>
        <YStack bg="$salvaje_bougainvillea1" py="$16">
          <ContainerLarge>
            <SalvajeCommunity />
          </ContainerLarge>
        </YStack>
      </TintSection>

      {/* Indigenous Integration */}
      <TintSection index={4}>
        <ContainerLarge>
          <SalvajeIndigenous />
        </ContainerLarge>
      </TintSection>

      {/* Programs */}
      <TintSection index={5}>
        <YStack bg="$salvaje_mango1" py="$16">
          <ContainerLarge>
            <SalvajePrograms />
          </ContainerLarge>
        </YStack>
      </TintSection>

      {/* Join Us */}
      <TintSection index={6}>
        <ContainerLarge>
          <SalvajeMembership />
        </ContainerLarge>
      </TintSection>

      {/* Community Impact */}
      <TintSection index={7}>
        <ContainerLarge>
          <SalvajeImpact />
        </ContainerLarge>
      </TintSection>

      {/* Roadmap */}
      <TintSection index={8}>
        <ContainerLarge>
          <SalvajeRoadmap />
        </ContainerLarge>
      </TintSection>

      {/* Social Proof */}
      <TintSection index={9}>
        <ContainerLarge>
          <SalvajeSocialProof />
        </ContainerLarge>
      </TintSection>

      {/* FAQ */}
      <TintSection index={10}>
        <ContainerLarge>
          <SalvajeFAQ />
        </ContainerLarge>
      </TintSection>

      {/* Final CTA */}
      <HomeSection id="final-cta">
        <YStack
          pos="relative"
          width="100%"
          minHeight={600}
          ai="center"
          jc="center"
          $sm={{ minHeight: 500 }}
        >
          {/* Sunset background */}
          <YStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{
              background: 'linear-gradient(135deg, rgba(245,166,35,0.8) 0%, rgba(217,79,112,0.6) 50%, rgba(15,76,92,0.8) 100%)',
            }}
          />
          
          {/* Content */}
          <YStack zi={2} ai="center" space="$6" p="$8">
            <ContainerLarge space="$6">
              <YStack ai="center" space="$6">
                <HomeH2 ta="center" $sm={{ size: '$8' }} color="white">
                  Ready to Take Root?
                </HomeH2>
                <HomeH3 ta="center" maw={600} $sm={{ size: '$5' }} color="white" o={0.95}>
                  This is not an investment in profit. It is an investment in life. Join the founding circle of Proyecto Salvaje.
                </HomeH3>
                
                <XStack
                  gap="$4"
                  mt="$4"
                  $sm={{
                    flexDirection: 'column',
                    ai: 'center',
                    gap: '$3',
                    als: 'center',
                  }}
                >
                  <Button
                    size="$5"
                    theme="salvaje_mango"
                    fontFamily="$body"
                    fontWeight="600"
                    pressStyle={{
                      scale: 0.97,
                    }}
                    animation="quick"
                    hoverStyle={{
                      opacity: 0.9,
                      scale: 1.02,
                    }}
                  >
                    Apply to Join
                  </Button>
                  <Button
                    size="$5"
                    theme="salvaje_ocean"
                    fontFamily="$body"
                    fontWeight="600"
                    borderWidth={2}
                    borderColor="$salvaje_ocean9"
                    pressStyle={{
                      scale: 0.97,
                    }}
                    animation="quick"
                    hoverStyle={{
                      opacity: 0.9,
                      scale: 1.02,
                    }}
                  >
                    Book a Call
                  </Button>
                  <Button
                    size="$5"
                    theme="salvaje_bougainvillea"
                    fontFamily="$body"
                    fontWeight="600"
                    pressStyle={{
                      scale: 0.97,
                    }}
                    animation="quick"
                    hoverStyle={{
                      opacity: 0.9,
                      scale: 1.02,
                    }}
                  >
                    Subscribe for Updates
                  </Button>
                </XStack>
                
                <Paragraph size="$3" ta="center" o={0.9} color="white">
                  Limited founding circle spots available. Early supporters receive priority access and lifetime recognition.
                </Paragraph>
                
                {/* Contact info */}
                <YStack ai="center" space="$2" mt="$4">
                  <Paragraph size="$3" ta="center" o={0.8} color="white">
                    info@proyectosalvaje.com
                  </Paragraph>
                  <Paragraph size="$3" ta="center" o={0.8} color="white">
                    Mazunte, Oaxaca, Mexico
                  </Paragraph>
                  <Button
                    size="$3"
                    theme="salvaje_mango"
                    fontFamily="$body"
                    fontWeight="600"
                    pressStyle={{
                      scale: 0.97,
                    }}
                    animation="quick"
                    hoverStyle={{
                      opacity: 0.9,
                      scale: 1.02,
                    }}
                  >
                    WhatsApp Link
                  </Button>
                </YStack>
              </YStack>
            </ContainerLarge>
          </YStack>
        </YStack>
      </HomeSection>

      <Spacer size="$10" />
    </SalvajeLayout>
  )
}

function SalvajeLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}
