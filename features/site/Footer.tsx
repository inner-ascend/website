import { memo } from 'react'
import { H4, Paragraph, Spacer, VisuallyHidden, XStack, YStack } from 'tamagui'

import { ContainerLarge } from '../../components/Containers'
import { Link, ParagraphLink } from '../../components/Link'
import { ExternalIcon } from '../icons/ExternalIcon'
import { InnerAscendLogo } from './logo/InnerAscendLogo'

export const Footer = memo(() => {
  return (
    <YStack tag="footer" pos="relative" mb="$10">
      <ContainerLarge>
        <XStack py="$7" $sm={{ flexDirection: 'column', ai: 'center' }}>
          <YStack ai="flex-start" $sm={{ ai: 'center' }} py="$5" flex={2} mb="$2" px="$6" gap="$4">
            <Link href="/" aria-label="Homepage">
              <VisuallyHidden>homepage</VisuallyHidden>
              {/* <TamaguiLogo showWords downscale={1} /> */}
              <InnerAscendLogo showWords downscale={1} />
            </Link>
            <Paragraph size="$3" o={0.25}>
              built with ❤️ by communities
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" $sm={{ ai: 'center' }} px="$4" py="$5" flex={1.5} gap="$3">
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Overview
            </H4>
            <ParagraphLink href="https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96">
              Introduction
            </ParagraphLink>
            <ParagraphLink href="/privacy">Privacy Policy</ParagraphLink>
            {/* <ParagraphLink href="/takeout-policy">Fulfillment Policy</ParagraphLink> */}
            {/* <ParagraphLink href="/dpa">Data Processing Agreement</ParagraphLink> */}
            {/* <ParagraphLink href="/docs/api">API</ParagraphLink>
          <ParagraphLink href="/docs/frequently-asked-questions">FAQ</ParagraphLink> */}
          </YStack>

          <YStack ai="flex-start" $sm={{ ai: 'center' }} px="$4" py="$5" flex={1.5} gap="$3">
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Docs
            </H4>
            <ParagraphLink href="https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96">
              Introduction
            </ParagraphLink>
            {/* <ParagraphLink href="/docs/intro/installation">Installation</ParagraphLink> */}
            {/* <ParagraphLink href="/docs/core/introduction">Core</ParagraphLink> */}
            {/* <ParagraphLink href="/docs/core/styled">styled()</ParagraphLink> */}
            {/* <ParagraphLink href="/docs/intro/why-a-compiler">Compiler</ParagraphLink> */}
          </YStack>

          <YStack ai="flex-start" $sm={{ ai: 'center' }} px="$4" py="$5" flex={1.5} gap="$3">
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Community
            </H4>
            <XStack gap="$1" ai="center">
              <ParagraphLink href="/mexico">Mexico</ParagraphLink>
            </XStack>
            <XStack gap="$1" ai="center">
              <ParagraphLink href="/blog">Blog</ParagraphLink>
            </XStack>
            {/* <XStack gap="$1" ai="center">
              <ParagraphLink href="https://github.com/tamagui/tamagui" target="_blank">
                GitHub
              </ParagraphLink>
              <ExternalIcon />
            </XStack> */}
            <XStack gap="$1" ai="center">
              <ParagraphLink href="https://t.me/+dv4zmhAQfHMzYWFk" target="_blank">
                Telegram
              </ParagraphLink>
              <ExternalIcon />
            </XStack>
            {/* <XStack gap="$1" ai="center">
              <ParagraphLink href="https://discord.gg/xdJNttaFrZ" target="_blank">
                Discord
              </ParagraphLink>
              <ExternalIcon />
            </XStack> */}
          </YStack>
        </XStack>

        <Spacer />
        <Spacer />
        <Spacer />
      </ContainerLarge>
    </YStack>
  )
})
