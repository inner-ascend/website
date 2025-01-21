import type { SizeTokens } from '@tamagui/core'
import { LogoIcon, useTint } from '@tamagui/logo'
import { Play } from '@tamagui/lucide-icons'
import React, { memo, useEffect, useRef, useState } from 'react'
import {
  Button,
  ListItem,
  Paragraph,
  Separator,
  Square,
  XStack,
  YStack,
  styled,
  useControllableState,
  useEvent,
} from 'tamagui'
import { animations } from '../../../config/animations'
import { useIsIntersecting } from '../../../hooks/useOnIntersecting'

import { ContainerLarge } from '../../../components/Containers'
import { Link } from '../../../components/Link'
import { HomeH2, HomeH3 } from './HomeHeaders'

const StyledButton = styled(Button, {
  variants: {
    size: {
      '...size': (size: SizeTokens, { tokens }) => {
        return {
          height: tokens.size[size],
          borderRadius: tokens.radius[size],
          gap: tokens.space[size],
        }
      },
    },
  } as const,
})

export const AnimationsDemo = (props) => {
  const { tint } = useTint()
  return <AnimationsDemoBase tint={tint} {...props} />
}

const growthStages = [
  {
    name: 'Phase 1: Foundation',
    date: 'Sep-Dec 2025',
    description: 'Community and DAO setup',
    features: [
      'Initial DAO token distribution',
      'Core team formation',
      'Community platform launch',
      'Early member onboarding'
    ],
    animation: 'bouncy',
    settings: animations.animations.bouncy,
  },
  {
    name: 'Phase 2: Land',
    date: 'Jan-Apr 2026',
    description: 'Land acquisition and planning',
    features: [
      'Land NFT minting',
      'Property evaluation',
      'Legal framework setup',
      'Sustainable design planning'
    ],
    animation: 'lazy',
    settings: animations.animations.lazy,
  },
  {
    name: 'Phase 3: Infrastructure',
    date: 'May-Dec 2026',
    description: 'Sustainable systems development',
    features: [
      'Renewable energy systems',
      'Water management',
      'Permaculture design',
      'Initial housing units'
    ],
    animation: 'quick',
    settings: animations.animations.quick,
  },
  {
    name: 'Phase 4: Community',
    date: 'Jan-Jun 2027',
    description: 'Building social fabric',
    features: [
      'Governance framework',
      'Resource sharing system',
      'Skills workshops',
      'Cultural events'
    ],
    animation: 'quick',
    settings: animations.animations.quick,
  },
  {
    name: 'Phase 5: Expansion',
    date: 'Jul 2027 →',
    description: 'Scaling the ecosystem',
    features: [
      'Additional land acquisition',
      'New member integration',
      'Inter-community networks',
      'Knowledge sharing platform'
    ],
    animation: 'quick',
    settings: animations.animations.quick,
  }
] as const

let hasScrolledOnce = false

export function CommunityGrowth({ animationCode }: { animationCode: string }) {
  const { tint } = useTint()
  const [activeStage, setActiveStage] = useState(0)
  const currentStage = growthStages[activeStage]

  return (
    <YStack>
      <ContainerLarge position="relative" space="$8">
        <YStack zi={1} space="$3">
          <HomeH2 pos="relative">
            Community <span className="rainbow clip-text">Growth</span>
          </HomeH2>
          <HomeH3>
            Watch your community evolve through different stages of development, from initial planning to thriving ecosystem.
          </HomeH3>
        </YStack>

        <XStack>
          <YStack
            f={2}
            miw="55%"
            als="center"
            zi={100}
            elevation="$4"
            br="$4"
            theme={tint as any}
            space="$4"
          >
            <XStack
              bw={1}
              bc="$borderColor"
              elevation="$1"
              w="100%"
              br="$4"
              ov="hidden"
              h={400}
              als="center"
              x={0}
              $sm={{
                fd: "column",
                h: "auto"
              }}
            >
              <YStack 
                width="40%" 
                theme="alt2" 
                bg="$color3" 
                f={1} 
                jc="space-between" 
                pointerEvents="auto"
                $sm={{
                  width: "100%",
                  f: 0,
                  pb: "$2"
                }}
              >
                {growthStages.map((stage, i) => {
                  const isActive = i === activeStage
                  return (
                    <ListItem
                      key={stage.name}
                      theme={isActive ? 'active' : 'alt2'}
                      px="$4"
                      py="$4"
                      f={1}
                      title={stage.name}
                      iconAfter={
                        <XStack jc="unset" $sm={{ jc: "flex-end", minWidth: "38%" }}>
                          <Paragraph size="$3" o={0.7} fontFamily="$silkscreen" $sm={{ size: "$2" }}>
                            {stage.date}
                          </Paragraph>
                        </XStack>
                      }
                      backgroundColor={isActive ? '$color2' : 'transparent'}
                      subTitle={stage.description}
                      cursor="pointer"
                      onPress={() => setActiveStage(i)}
                      pressStyle={{ scale: 0.97 }}
                    />
                  )
                })}
              </YStack>

              <Separator vertical $sm={{ vertical: false, my: "$0.5" }} />

              <YStack 
                f={1} 
                p="$4" 
                space="$4" 
                width="60%"
                bg="$color3"
                $sm={{
                  width: "100%",
                  pt: "$4"
                }}
              >
                <YStack space="$2">
                  <XStack jc="space-between" ai="center" $sm={{ fd: "column", ai: "flex-start", gap: "$1" }}>
                    <Paragraph size="$8" fontFamily="$silkscreen" $sm={{ size: "$7" }}>{currentStage.name}</Paragraph>
                    <Paragraph size="$6" fontFamily="$silkscreen" o={0.7} $sm={{ size: "$5" }}>{currentStage.date}</Paragraph>
                  </XStack>
                  <Paragraph size="$5" theme="alt2">{currentStage.description}</Paragraph>
                </YStack>

                <YStack space="$2">
                  {currentStage.features.map((feature, i) => (
                    <XStack key={i} space="$2" ai="center">
                      <Square size={8} bc="$color" br="$1" />
                      <Paragraph theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
            </XStack>

            <YStack
              br="$4"
              elevation="$4"
              ov="hidden"
              backgroundColor="$background"
              p="$6"
              bw={1}
              bc="$borderColor"
              bg="$color3"
              w="100%"
              ai="center"
              space="$5"
            >
              <YStack ai="center" space="$2">
                <Paragraph size="$8" fontFamily="$silkscreen">Next Steps</Paragraph>
                <Paragraph size="$4" theme="alt2" ta="center" maw={500}>
                  Join our community and be part of the next generation of sustainable living
                </Paragraph>
              </YStack>
              <YStack space="$4" ai="center" w="100%" maw={400}>
                <Link href="/community" w="100%">
                  <Button w="100%" size="$5" theme="active" iconAfter={Play}>Join the DAO</Button>
                </Link>
                <Link href="/community" w="100%">
                  <Button w="100%" size="$5" theme="alt2">View Land NFTs</Button>
                </Link>
                <Link href="/community" w="100%">
                  <Button w="100%" size="$5" theme="alt2">Community Guidelines</Button>
                </Link>
                <Link href="/docs/intro/introduction" w="100%">
                  <Button w="100%" size="$5" theme="alt2">Docs</Button>
                </Link>
              </YStack>
            </YStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}

export const ExampleAnimations = memo(() => {
  const [animationI, setAnimationI] = useState(0)
  const animation = growthStages[animationI]
  const container = useRef(null)
  const [positionI, setPositionI] = useState(2)
  const isIntersecting = useIsIntersecting(container)
  const next = (to = 1) => {
    setPositionI((x) => (x + to) % 3)
  }

  useEffect(() => {
    if (!isIntersecting) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        next()
      }
      if (e.key === 'ArrowLeft') {
        next(-1)
      }
    }
    if (!hasScrolledOnce) {
      hasScrolledOnce = true
      setTimeout(() => {
        // setting a long timeout extends the total render time a lot.., just slow down animation
        next()
      }, 250)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [isIntersecting])

  const settings =
    typeof animation.settings === 'string'
      ? [['transition', animation.settings]]
      : Object.entries(animation.settings)

  return (
    <XStack
      bw={1}
      bc="$borderColor"
      elevation="$1"
      w="100%"
      br="$4"
      ov="hidden"
      h={305}
      als="center"
      x={0}
      flexDirection="row-reverse"
    >
      <YStack
        ref={container}
        pos="relative"
        ai="center"
        jc="center"
        width="60%"
        $sm={{ width: '100%' }}
      >
        <YStack fullscreen zi={-1} bg="$background" o={0.5} />
        {isIntersecting ? (
          <AnimationsDemo position={positionI} animation={animation.animation} />
        ) : null}
      </YStack>

      <Separator vertical />

      <YStack pos="relative" $sm={{ display: 'none' }} width="40%">
        <YStack f={1} theme="alt2" bg="$color1">
          {growthStages.map((item, i) => {
            const isActive = item === animation
            return (
              <ListItem
                key={item.name}
                theme={isActive ? 'active' : null}
                px="$4"
                py="$2"
                title={item.name}
                bg={isActive ? '$color2' : '$color1'}
                subTitle={item.description}
                cursor="pointer"
                onPress={() => {
                  setAnimationI(i)
                  next()
                }}
              />
            )
          })}
        </YStack>

        <Separator />

        <XStack bg="$background" p="$4" ai="center" jc="center">
          {/* @ts-ignore */}
          {settings.map(([key, value], i) => {
            if (key === 'type') {
              return null
            }
            return (
              <React.Fragment key={key}>
                <YStack>
                  <Paragraph size="$2">{key}</Paragraph>
                  <Paragraph>{value}</Paragraph>
                </YStack>
                {i < settings.length - 1 && <Separator vertical mx={15} />}
              </React.Fragment>
            )
          })}
        </XStack>
      </YStack>
    </XStack>
  )
})

export function AnimationsDemoBase(props) {
  const [positionI, setPositionI] = useControllableState({
    strategy: 'most-recent-wins',
    prop: props.position,
    defaultProp: 0,
  })
  const position = positions[positionI]
  const onPress = useEvent(() => {
    setPositionI((x) => {
      return (x + 1) % positions.length
    })
  })

  return (
    <>
      <Square
        animation={(props.animation || 'bouncy') as any}
        animateOnly={['transform']}
        onPress={onPress}
        size={104}
        borderColor="$borderColor"
        borderWidth={1}
        borderRadius="$9"
        backgroundColor="$color9"
        hoverStyle={{
          scale: 1.5,
        }}
        pressStyle={{
          scale: 0.9,
        }}
        {...position}
      >
        {props.children || <LogoIcon downscale={0.75} />}
      </Square>

      <Button
        position="absolute"
        bottom={20}
        left={20}
        icon={Play}
        theme={props.tint}
        size="$5"
        circular
        onPress={onPress}
      />
    </>
  )
}
export const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: '0deg',
  },
  {
    x: -50,
    y: -50,
    scale: 0.5,
    rotate: '-45deg',
    hoverStyle: {
      scale: 0.6,
    },
    pressStyle: {
      scale: 0.4,
    },
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: '180deg',
    hoverStyle: {
      scale: 1.1,
    },
    pressStyle: {
      scale: 0.9,
    },
  },
]

