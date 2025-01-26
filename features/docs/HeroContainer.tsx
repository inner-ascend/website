import { ThemeTint } from '@tamagui/logo'
import React from 'react'
import { Theme, XStack, YStack, styled } from 'tamagui'

import { ErrorBoundary } from '~/components/ErrorBoundary'

export function HeroContainer({
  children,
  demoMultiple = false,
  smaller,
  noPad,
  noScroll,
  alignItems,
  minimal,
  tinted,
}: {
  minimal?: boolean
  demoMultiple?: boolean
  children?: React.ReactNode
  smaller?: boolean
  noPad?: boolean
  noScroll?: boolean
  alignItems?: any
  tinted?: boolean
}) {
  const demo = <HeroContainerInner demoMultiple={demoMultiple}>{children}</HeroContainerInner>

  const contents = (
    <YStack
      className={(minimal ? '' : 'hero-gradient') + (noScroll ? '' : ' hero-scroll')}
      bc="$borderColor"
      bw={0.5}
      mt="$4"
      mb="$4"
      position="relative"
      display="flex"
      alignItems={alignItems || 'center'}
      justifyContent="center"
      pt={60}
      pb={80}
      pos="relative"
      minHeight={300}
      borderRadius="$4"
      {...(noPad && {
        py: 0,
      })}
      $gtMd={{
        mx: smaller ? 0 : '$-4',
      }}
      id="tamagui-demos-container"
    >
      {demoMultiple ? (
        <XStack mah="100%" maw="100%" miw="100%" position="unset" justifyContent="flex-start">
          {demo}
        </XStack>
      ) : (
        demo
      )}
    </YStack>
  )

  if (tinted) {
    return <ThemeTint>{contents}</ThemeTint>
  }

  return contents
}

const Card = styled(YStack, {
  ai: 'center',
  jc: 'center',
  elevation: '$1',
  y: 0,
  ov: 'hidden',
  minWidth: 180,
  bg: '$background',
  minHeight: 220,
  br: '$4',
})

const HeroContainerInner = ({
  children,
  demoMultiple,
}: {
  children: React.ReactNode
  demoMultiple: boolean
}) => {
  return (
    <ErrorBoundary>
      {demoMultiple ? (
        <XStack gap="$3" px="$8">
          <Card bg="$color2">{children}</Card>
          <Theme name="blue">
            <Card>{children}</Card>
          </Theme>
          <Theme name="red">
            <Card>{children}</Card>
          </Theme>
          <Theme name="pink">
            <Card>{children}</Card>
          </Theme>
          <Theme name="orange">
            <Card>{children}</Card>
          </Theme>
          <Theme name="green">
            <Card>{children}</Card>
          </Theme>
          <Theme name="yellow">
            <Card>{children}</Card>
          </Theme>
        </XStack>
      ) : (
        children
      )}
    </ErrorBoundary>
  )
}
