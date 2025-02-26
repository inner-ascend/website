import { Spacer, YStack } from 'tamagui'
import { CommunityShowcase } from '~/components/organisms/CommunityShowcase'
import { MexicoProject } from '~/features/site/home/MexicoProject'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HeadInfo } from '../../components/HeadInfo'
import { AdaptiveSpaces } from '../../features/site/home/AdaptiveSpaces'
import { CommunityFeatures } from '../../features/site/home/CommunityFeatures'
import { CommunityGrowth } from '../../features/site/home/CommunityGrowth'
import { CommunityVision } from '../../features/site/home/CommunityVision'
import { EcoThemes } from '../../features/site/home/EcoThemes'
import { EcovillageGrid } from '../../features/site/home/EcovillageGrid'
import { HomeGlow } from '../../features/site/home/HomeGlow'
import { Hero } from '../../features/site/home/HomeHero'
import { SustainableImpact } from '../../features/site/home/SustainableImpact'
import { HomeSection, SectionTinted, TintSection } from '../../features/site/home/TintSection'
import { ThemeNameEffect } from '../../features/site/theme/ThemeNameEffect'

export default function TamaguiHomePage() {
  return (
    <>
      <HeadInfo
        title="Inner Ascend"
        description="Building sustainable ecovillage communities through shared ownership and governance"
      />

      <ThemeNameEffect colorKey="$color2" />
      <HomeGlow />
      <YStack
        fullscreen
        className="grain"
        o={0.2}
        style={{
          maskImage: `linear-gradient(transparent, rgba(0, 0, 0, 1) 100px)`,
        }}
      />

      <TintSection index={0} p={0}>
        <Hero />
      </TintSection>

      <TintSection index={1} contain="paint layout" zi={1000}>
        <YStack
          pe="none"
          zi={0}
          fullscreen
          className="bg-dot-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
        <CommunityShowcase />
      </TintSection>

      <TintSection index={2} contain="paint layout" zi={1000}>
        <YStack
          pe="none"
          zi={0}
          fullscreen
          className="bg-dot-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
        <MexicoProject />
      </TintSection>

      <TintSection my={-50} index={3} contain="paint layout" pos="relative" zi={100}>
        <YStack
          pe="none"
          zi={0}
          fullscreen
          className="bg-dot-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
        <EcoThemes />
      </TintSection>
      <TintSection index={4} mb={-120} zIndex={10000}>
        <AdaptiveSpaces />
      </TintSection>
      <TintSection index={5} p={0} zIndex={0}>
        <SectionTinted gradient bubble>
          <SustainableImpact />
        </SectionTinted>
      </TintSection>
      <TintSection index={6} zi={100}>
        <YStack
          fullscreen
          className="bg-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
        <CommunityGrowth />
      </TintSection>
      <TintSection index={7} zi={1}>
        <EcovillageGrid />
        <YStack
          pe="none"
          zi={2}
          fullscreen
          className="bg-dot-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
      </TintSection>
      <TintSection index={8} my="$-4" p={0} zIndex={100}>
        <SectionTinted zi={1000} bubble gradient>
          <CommunityVision />
        </SectionTinted>
      </TintSection>
      <HomeSection zi={10}>
        <YStack
          pe="none"
          zi={0}
          fullscreen
          className="bg-dot-grid"
          style={{
            maskImage: `linear-gradient(transparent, #000, transparent)`,
          }}
        />
        <CommunityFeatures />
        <Spacer size="$18" />
        <SocialLinksRow />
      </HomeSection>
    </>
  )
}
