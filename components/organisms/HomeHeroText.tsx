import { Spacer, YStack } from 'tamagui'
import { useHeroHovered } from '~/features/site/home/useHeroHovered'
import { SilkscreenParagraph } from '../atoms/SilkscreenParagraph'
import { TagSubtitle, type TagItem } from '../atoms/TagSubtitle'
import { HeroTitle } from '../molecules/HeroTitle'

const tags: TagItem[] = [
  {
    text: 'REGENERATIVE LIVING',
    theme: 'green',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96',
  },
  {
    text: 'CONSCIOUS COMMUNITY',
    theme: 'blue',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96',
  },
  {
    text: 'LAND STEWARDSHIP',
    theme: 'purple',
    href: 'https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96',
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
        suffix="for all · with nft"
        onTagHover={setHovered}
        activeIndex={hovered}
      />
      <Spacer size="$2" />

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
