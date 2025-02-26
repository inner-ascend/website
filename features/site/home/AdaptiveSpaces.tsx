import { throttle } from '@github/mini-throttle'
import { Image } from '@tamagui/image-next'
import { useTint } from '@tamagui/logo'
import { Building2, ChevronLeft, ChevronRight, ClipboardList, Lock, Users } from '@tamagui/lucide-icons'
import {
  memo,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { YStackProps } from 'tamagui'
import {
  Button,
  Circle,
  H2,
  H3,
  Paragraph,
  Spacer,
  Theme,
  XStack,
  YStack,
  isTouchable,
  useDebounce,
  useDidFinishSSR,
  useGet,
  useIsomorphicLayoutEffect,
  useMedia
} from 'tamagui'
import { demoMedia } from '../../../config/media'

import { Container, ContainerLarge } from '../../../components/Containers'
import { useTransitionState } from '../../../hooks/useTransitionState'
import { HomeH2, HomeH3 } from './HomeHeaders'
import favicon from '/favicon.svg?url'

const breakpoints = [
  { name: 'Overview', at: demoMedia[0] },
  { name: 'Schedule', at: demoMedia[1] },
  { name: 'Resources', at: demoMedia[2] },
  { name: 'Governance', at: demoMedia[3] },
]
const browserHeight = 485

const IS_SAFARI =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent || '')

const useIsSafari = () => {
  const ssrDone = useDidFinishSSR()
  return ssrDone ? IS_SAFARI : false
}

export const AdaptiveSpaces = memo(() => {
  const [bounding, setBounding] = useTransitionState<DOMRect | null>(null)
  const prevMove = useRef(0)
  const initialWidth = 420
  const [isDragging, setIsDragging] = useState(false)
  const [move, setMove] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const safariRef = useRef<HTMLElement | null>(null)
  const getState = useGet({ move, isDragging, bounding })
  const [sizeI, setSizeI] = useState(0)
  // safari drags slower so lets pre-load iframe
  const [hasInteracted, setHasInteracted] = useState(false)
  const [currentBreakpoint, setCurrentBreakpoint] = useState('Overview')
  const updateBoundings = useDebounce(() => {
    const rect = safariRef.current?.getBoundingClientRect() ?? null
    startTransition(() => {
      setBounding(rect)
    })
  }, 350)

  const isSafari = useIsSafari()

  useEffect(() => {
    if (isSafari) {
      setHasInteracted(true)
    }
  }, [isSafari])

  useIsomorphicLayoutEffect(() => {
    if (!bounding) {
      updateBoundings()
      return
    }
    const width = bounding.width + move - 10
    for (let i = breakpoints.length - 1; i >= 0; i--) {
      if (width > breakpoints[i].at) {
        setSizeI(i + 1)
        return
      }
    }
  }, [move, bounding])

  useEffect(() => {
    window.addEventListener('resize', updateBoundings)
    return () => {
      window.removeEventListener('resize', updateBoundings)
    }
  }, [])

  const onMove = throttle((e: MouseEvent) => {
    const state = getState()
    if (!state.isDragging) return
    if (!state.bounding) {
      updateBoundings()
      return
    }
    if (!state.bounding) return
    setHasInteracted(true)
    const right = state.bounding.width + state.bounding.x
    const x = e.pageX - right
    const maxMove = breakpoints[breakpoints.length - 1].at - initialWidth + 120
    const nextMove = Math.min(maxMove, Math.max(0, x))
    const next = nextMove + (prevMove.current || 0)

    setMove(next)

    prevMove.current = 0
  }, 24)

  const stop = () => {
    prevMove.current = getState().move
    setIsDragging(false)
  }

  // disabling the dragger for now it feels slow due to iframe
  // useOnIntersecting(
  //   ref,
  //   ([entry], didResize) => {
  //     if (!entry?.isIntersecting) return
  //     const node = safariRef.current
  //     if (!node) return
  //     if (didResize) {
  //       updateBoundings()
  //     }
  //     prevMove.current = getState().move - 10
  //     window.addEventListener('pointermove', onMove)
  //     return () => {
  //       onMove.cancel()
  //       window.removeEventListener('pointermove', onMove)
  //       stop()
  //     }
  //   },
  //   {
  //     threshold: 0.01,
  //   }
  // )

  useEffect(() => {
    window.addEventListener('mouseup', stop)
    window.addEventListener('blur', stop)
    return () => {
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('blur', stop)
    }
  }, [])

  const media = useMedia()
  const [smIndex, setSmIndex] = useState(0)
  const [width, setWidth] = useState(initialWidth)
  const isSmall = initialWidth + Math.max(0, move) < 680

  const nextWidth = media.sm ? breakpoints[smIndex].at : initialWidth + Math.max(0, move)
  // ssr compat stay in effect
  useEffect(() => {
    if (width !== nextWidth) {
      setWidth(nextWidth)
    }
  }, [nextWidth])

  const handleMarkerPress = useCallback((name) => {
    setHasInteracted(true)
    setSizeI(breakpoints.findIndex(b => b.name === name))
    setCurrentBreakpoint(name)
    // Dispatch custom event for view change
    const event = new CustomEvent('changeView', { detail: { view: name } })
    window.dispatchEvent(event)
  }, [])

  const scale = 0.7 - smIndex * 0.05

  return (
    <YStack ref={ref} y={0} mt={-80} pos="relative">
      <ContainerLarge pos="relative">
        <ResponsiveHeader />
        <Spacer size="$6" $sm={{ size: '$0' }} />
        <YStack h={browserHeight + 80} />
        <XStack
          b={-20}
          pos="absolute"
          zi={1}
          f={1}
          space="$1"
          // mostly keeping this to make sure we get a good ACID test of useMedia().sm
          {...(media.sm && {
            scale,
            x: 150 - width / 2 - (smIndex ? (0.68 - scale) * 920 : 0),
            y: -40,
          })}
        >
          <YStack
            zi={2}
            className="unselectable"
            pe={isDragging ? 'none' : 'auto'}
            // w={width}
            w={1110}
            f={1}
            ref={safariRef}
            onPress={() => {
              if (isTouchable) {
                setHasInteracted(true)
                setSmIndex((i) => (i + 1) % breakpoints.length)
              }
            }}
          >
            <Safari shouldLoad={hasInteracted} isSmall={isSmall} />
          </YStack>

          <Container zi={1} pos="absolute">
            <XStack x={-10} $sm={{ display: 'none' }}>
              {breakpoints.map((bp, i) => {
                return (
                  <Marker
                    key={i}
                    onPress={handleMarkerPress}
                    active={bp.name === currentBreakpoint}
                    name={breakpoints[i].name}
                    l={breakpoints[i].at}
                  />
                )
              })}
            </XStack>
          </Container>

          {/* {!isSafari && (
            <YStack
              jc="center"
              cursor="ew-resize"
              onPressIn={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsDragging(true)
              }}
              $sm={{
                display: 'none',
              }}
            >
              <YStack
                bg="$color"
                opacity={0.35}
                hoverStyle={{ opacity: 0.4 }}
                br="$8"
                w={8}
                height={134}
              />
            </YStack>
          )} */}
        </XStack>

        <YStack
          pos="absolute"
          zi={0}
          h={browserHeight + 120}
          l={-1000}
          r={-1000}
          b={-75}
          ai="center"
          jc="center"
        >
          <XStack pos="absolute" t={0} l={0} r={0} bbw={1} bc="$color" opacity={0.1} />
          <YStack pos="relative" f={1} h="100%" w="100%">
            <YStack fullscreen className="mask-gradient-down" zi={-1}>
              <YStack fullscreen bottom="auto" height={439} className="bg-grid" />
            </YStack>
          </YStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})

const Marker = memo(({ name, active, onPress, ...props }: any) => {
  return (
    <YStack
      className="unselectable"
      theme={active ? 'pink' : null}
      pos="absolute"
      {...props}
    >
      <XStack y={-60} ai="flex-start">
        <YStack w={1} h={70} bg="$colorHover" opacity={active ? 0.2 : 0.05} />
        <Button
          accessibilityLabel={`View ${name}`}
          borderWidth={1}
          size="$3"
          circular={false}
          pos="absolute"
          top={0}
          left={0}
          y={-20}
          x={-30}
          fontSize={12}
          onPress={() => {
            onPress(name)
          }}
        >
          {name}
        </Button>
      </XStack>
    </YStack>
  )
})

const ResponsiveHeader = memo(() => {
  return (
    <YStack f={1} space="$3">
      <XStack>
        <HomeH2 ta="left" als="flex-start">
          Community Use Cases
        </HomeH2>
      </XStack>

      <HomeH3 ta="left" als="flex-start" p={0} maxWidth={450} theme="alt2">
        Explore different aspects of our community platform
      </HomeH3>
    </YStack>
  )
})

const SafariFrame = ({ children, ...props }: YStackProps) => {
  const { tint } = useTint()
  return (
    <YStack
      theme={tint as any}
      className="unselectable"
      contain="paint layout"
      elevation="$6"
      f={1}
      ov="hidden"
      br="$4"
      bc="$borderColor"
      borderWidth={1}
      w="99%"
      {...props}
    >
      {useMemo(() => children, [children])}
    </YStack>
  )
}

export const Safari = memo(
  ({ isSmall, shouldLoad }: { isSmall?: boolean; shouldLoad?: boolean }) => {
    const [hasInteracted, setHasInteracted] = useState(false)
    const [currentView, setCurrentView] = useState('Overview')

    useEffect(() => {
      // Listen for view changes from parent
      const handleViewChange = (e: CustomEvent) => {
        setHasInteracted(true)
        setCurrentView(e.detail.view)
      }
      window.addEventListener('changeView' as any, handleViewChange)
      return () => window.removeEventListener('changeView' as any, handleViewChange)
    }, [])

    return (
      <SafariFrame>
        <YStack bg="$background" px="$4" jc="center" borderBottomWidth={0} h={50}>
          <XStack pos="relative" ai="center" space="$4">
            <XStack gap="$2">
              <Circle bg="$red10" size={10} />
              <Circle bg="$yellow10" size={10} />
              <Circle bg="$green10" size={10} />
            </XStack>

            {!isSmall && (
              <XStack gap="$1">
                <ChevronLeft size={20} color="var(--color)" opacity={0.25} />
                <ChevronRight size={20} color="var(--color)" opacity={0.25} />
              </XStack>
            )}

            <XStack fullscreen ai="center">
              <XStack f={1} />
              <XStack
                h={30}
                f={2}
                br="$2"
                borderWidth={1}
                bc="$borderColor"
                bg="$backgroundPress"
                ai="center"
                px="$2"
                jc="center"
                space
              >
                <Lock color="var(--colorPress)" size={12} />
                <Paragraph theme="alt1" size="$2">
                  inner-ascend.com
                </Paragraph>
              </XStack>
              <XStack f={1} />
            </XStack>
          </XStack>
        </YStack>

        <XStack bg="$background" mx={-2}>
          <Tab bc="var(--green7)" btlr={0}>
            Overview
          </Tab>
          <Tab bc="var(--pink7)" active>
            Inner Ascend - Ecovillage DAO Platform
          </Tab>
          <Tab bc="var(--yellow7)" btrr={0}>
            Community
          </Tab>
        </XStack>

        <YStack pos="relative" bg="$color1" h={browserHeight}>
          <YStack h="100%" pe="none">
            {/* Placeholder content */}
            {!hasInteracted && (
              <YStack zi={0} fullscreen backgroundColor="$backgroundHover">
                <YStack p="$6" space="$4">
                  <H2 ta="center" size="$9" fontWeight="900" theme="alt1">Overview</H2>
                  <Paragraph ta="center" theme="alt2" size="$5" o={0.7}>
                    Essential tools for community coordination
                  </Paragraph>
                </YStack>

                <YStack f={1}>
                  <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
                    <Card theme="blue" width={300} p="$4" space="$4" br="$6" bw={1}>
                      <XStack ai="center" space="$3">
                        <YStack width={60} height={60} br="$6" backgroundColor="$color5" ai="center" jc="center"
                          shadowColor="$shadowColor" shadowRadius={10} elevation={2}>
                          <Building2 size={30} color="$background" />
                        </YStack>
                        <H3 size="$6" fontWeight="800">Governance</H3>
                      </XStack>
                      <Paragraph theme="alt2" size="$4" o={0.8}>
                        Participate in community decisions through token voting
                      </Paragraph>
                      <YStack space="$2" pt="$2">
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Proposal voting</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Resource allocation</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Role delegation</Paragraph>
                        </XStack>
                      </YStack>
                    </Card>

                    <Card theme="yellow" width={300} p="$4" space="$4" br="$6" bw={1}>
                      <XStack ai="center" space="$3">
                        <YStack width={60} height={60} br="$6" backgroundColor="$color5" ai="center" jc="center"
                          shadowColor="$shadowColor" shadowRadius={10} elevation={2}>
                          <Users size={30} color="$background" />
                        </YStack>
                        <H3 size="$6" fontWeight="800">Membership</H3>
                      </XStack>
                      <Paragraph theme="alt2" size="$4" o={0.8}>
                        Join and contribute to the community
                      </Paragraph>
                      <YStack space="$2" pt="$2">
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Identity verification</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Reputation system</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Access control</Paragraph>
                        </XStack>
                      </YStack>
                    </Card>

                    <Card theme="green" width={300} p="$4" space="$4" br="$6" bw={1}>
                      <XStack ai="center" space="$3">
                        <YStack width={60} height={60} br="$6" backgroundColor="$color5" ai="center" jc="center"
                          shadowColor="$shadowColor" shadowRadius={10} elevation={2}>
                          <ClipboardList size={30} color="$background" />
                        </YStack>
                        <H3 size="$6" fontWeight="800">Projects</H3>
                      </XStack>
                      <Paragraph theme="alt2" size="$4" o={0.8}>
                        Collaborate on community initiatives
                      </Paragraph>
                      <YStack space="$2" pt="$2">
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Task management</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Progress tracking</Paragraph>
                        </XStack>
                        <XStack ai="center" space="$2">
                          <Circle size={6} backgroundColor="$color5" />
                          <Paragraph size="$3" theme="alt1">Resource sharing</Paragraph>
                        </XStack>
                      </YStack>
                    </Card>
                  </XStack>
                </YStack>
              </YStack>
            )}

            {/* Iframe */}
            <YStack
              fullscreen
              contain="paint"
              opacity={hasInteracted ? 1 : 0}
              backgroundColor="$background"
              zIndex={hasInteracted ? 10 : 0}
              animation="quick"
            >
              <iframe
                title="Inner Ascend - Ecovillage DAO Platform"
                style={{
                  backgroundColor: 'transparent',
                }}
                width="100%"
                height={browserHeight}
                src={`/community-spaces#${currentView}`}
              />
            </YStack>
          </YStack>
        </YStack>
      </SafariFrame>
    )
  }
)

const Tab = memo(({ active, children, bc, ...props }: any) => {
  return (
    <Theme name={active ? null : 'alt1'}>
      <XStack
        btw={1}
        bc={active ? 'transparent' : '$borderColor'}
        w="33.33%"
        blw={1}
        brw={1}
        bbw={1}
        bbc={active ? '$borderColor' : 'transparent'}
        btlr={active ? 0 : 4}
        btrr={active ? 0 : 4}
        bg="$background"
        ov="hidden"
        f={1}
        py="$1"
        px="$2"
        ai="center"
        jc="center"
        {...props}
      >
        <Circle size={16} bg={bc}>
          <Image width={10} height={10} src={favicon} />
        </Circle>
        <Spacer size="$2" />
        <Paragraph o={active ? 1 : 0.5} cursor="default" size="$1" ellipse>
          {children}
        </Paragraph>
      </XStack>
    </Theme>
  )
})

const Card = ({ children, theme, ...props }) => (
  <YStack
    theme={theme}
    backgroundColor="$background"
    borderColor="$borderColor"
    shadowColor="$shadowColor"
    shadowRadius={15}
    shadowOffset={{ width: 0, height: 4 }}
    elevation={4}
    {...props}
  >
    {children}
  </YStack>
)
