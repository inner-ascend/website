import { ChevronRight, Code, Cpu, Layers } from '@tamagui/lucide-icons'
import { memo } from 'react'
import type { YStackProps } from 'tamagui'
import { H3, Paragraph, XStack, YStack } from 'tamagui'
import { Link } from '../../../components/Link'

import { CodeInline } from '../../../components/Code'
import { ContainerLarge } from '../../../components/Containers'
import { IconStack } from './IconStack'
import { useHeroHovered } from './useHeroHovered'

export const HomeHeroBelow = memo(() => {
  return (
    <>
      <YStack
        pos="relative"
        zi={1000}
        // elevation="$4"
        // $theme-light={{
        //   elevation: '$1',
        // }}
        py="$4"
        pt="$6"
        pb="$10"
      >
        {/* <YStack fullscreen bg="$color3" zi={-1} o={0.25} btw={1} btc="$borderColor" /> */}

        <HeroBelowContent />
      </YStack>
    </>
  )
})

export const HeroBelowContent = memo(() => {
  const [hovered, setHovered] = useHeroHovered()

  return (
    <ContainerLarge>
      <XStack
        flex={1}
        overflow="hidden"
        maxWidth="100%"
        space="$8"
        flexWrap="nowrap"
        px="$2"
        mb={-8}
        py="$1"
        $sm={{ flexDirection: 'column' }}
        $gtSm={{
          px: '$6',
        }}
      >
        <Section theme="green" onHoverIn={() => setHovered(0)}>
          <IconStack>
            <Code size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/core/configuration">Decentralized Ownership</TitleLink>
          <Paragraph o={0.7} size="$5">
          Your NFT is your voice. Participate in transparent governance and shape the future of sustainable communities through our innovative DAO structure.
          </Paragraph>
        </Section>

        <Section theme="blue" onHoverIn={() => setHovered(1)}>
          <IconStack>
            <Cpu size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/intro/why-a-compiler">NFT-Powered Property Rights</TitleLink>
          <Paragraph o={0.7} size="$5">
          Break down barriers to sustainable living with fractional ownership through NFTs. Secure, transparent, and community-validated property rights.
          </Paragraph>
        </Section>

        <Section theme="purple" onHoverIn={() => setHovered(2)}>
          <IconStack>
            <Layers size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/components/stacks">Holistic Development</TitleLink>
          <Paragraph o={0.7} size="$5">
          Connect with like-minded individuals in vibrant eco-communities. Experience personal and collective evolution through our unique incubator programs.
          </Paragraph>
        </Section>
      </XStack>
    </ContainerLarge>
  )
})

const TitleLink = ({ href, children, ...props }: any) => {
  return (
    <Link asChild href={href}>
      <H3 cursor="pointer" color="$color" my="$2">
        <CodeInline
          cursor="pointer"
          fontFamily="$silkscreen"
          bg="$color2"
          hoverStyle={{
            backgroundColor: '$color3',
          }}
          size="$9"
          fontSize="$6"
          ls={0}
          {...props}
        >
          {children} <ChevronRight size={12} />
        </CodeInline>
      </H3>
    </Link>
  )
}

const Section = (props: YStackProps) => (
  <YStack
    width="33%"
    $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }}
    flexShrink={1}
    {...props}
  />
)
