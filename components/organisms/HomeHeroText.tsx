import { YStack } from 'tamagui'
import { useHeroHovered } from '~/features/site/home/useHeroHovered'
import { SilkscreenParagraph } from '../atoms/SilkscreenParagraph'
import { TagSubtitle, type TagItem } from '../atoms/TagSubtitle'
import { HeroTitle } from '../molecules/HeroTitle'

const tags: TagItem[] = [
  {
    text: 'REGENERATIVE LIVING',
    theme: 'green',
    href: '/docs/core/configuration',
  },
  {
    text: 'CONSCIOUS COMMUNITY',
    theme: 'blue',
    href: '/docs/intro/why-a-compiler',
  },
  {
    text: 'LAND STEWARDSHIP',
    theme: 'purple',
    href: '/ui/stacks',
  },
]

export function HomeHeroText({ withTitle = false }) {
  const [hovered, setHovered] = useHeroHovered()

  return (
    <YStack
      px={0}
      maw={500}
      h={80}
      $gtSm={{
        maw: 600,
      }}
      $gtMd={{
        h: 100,
        px: 40,
        maw: 700,
      }}
      $gtLg={{
        maw: 800,
      }}
    >
      {withTitle && <HeroTitle title="Inner Ascend" subtitle="DAO" />}
      <TagSubtitle
        tags={tags}
        suffix="for all · in harmony"
        onTagHover={setHovered}
        activeIndex={hovered}
      />

      <SilkscreenParagraph
        size={{ default: '$4', sm: '$5' }}
        lineHeight={{ default: 26, sm: 30 }}
        maxWidth={620}
      >
        Join our mission to decentralize land stewardship and community ownership through NFTs
        {/* Join us in building regenerative communities that foster personal growth, environmental
        stewardship, and conscious living through innovative technology and sustainable practices. */}
      </SilkscreenParagraph>
    </YStack>
  )
}
