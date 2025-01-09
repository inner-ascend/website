import { useTint } from '@tamagui/logo';
import { memo, useEffect, useState } from 'react';
import { Circle, XStack, type XStackProps } from 'tamagui';

export const InnerAscendLogo = memo(
  ({
    downscale = 1,
    grayscale,
    animated,
    ...props
  }: XStackProps & { downscale?: number; animated?: boolean; grayscale?: boolean }) => {
    const Tint = useTint()
    const { tintIndex: index, tint } = Tint
    const tints = Tint.tints.map((t) => `var(--${t}9)`)
    const [hovered, setHovered] = useState(false)
    const [mounted, setMounted] = useState<'start' | 'animate' | 'done'>('start')

    useEffect(() => {
      const idle = window.requestIdleCallback || setTimeout
      idle(() => {
        setTimeout(() => {
          setMounted('animate')
        }, 50)

        setTimeout(() => {
          setMounted('done')
        }, 1500)
      })
    }, [])

    const getColor = (i: number) => {
      const isActive = mounted !== 'start' && i === index % tints.length
      if (grayscale) {
        return hovered && isActive
          ? `var(--gray12)`
          : hovered
          ? `var(--gray11)`
          : `var(--gray10)`
      }
      if (mounted !== 'done' || hovered) {
        return isActive ? 'var(--color)' : tints[i % tints.length]
      }
      if (hovered && isActive) {
        return 'var(--color)'
      }
      return tints[i % tints.length]
    }

    // Calculate letter positions (each letter is roughly 40 units wide with some spacing)
    const letterPositions = [
      0,    // I (0)
      32,   // N (1)
      96,   // N (2)
      160,  // E (3)
      208,  // R (4)
      272,  // Space (5)
      296,  // A (6)
      352,  // S (7)
      416,  // C (8)
      464,  // E (9)
      512,  // N (10)
      576,  // D (11)
    ].map(x => x * (1 / downscale) * 0.333333334)

    const spaceIndex = 5
    const currentIndex = mounted === 'start' ? spaceIndex : index % tints.length
    const x = letterPositions[currentIndex] || letterPositions[spaceIndex]

    // Debug info
    useEffect(() => {
      if (process.env.NODE_ENV === 'development') {
        console.log({
          currentIndex,
          index,
          mounted,
          hovered,
          x,
          letterPosition: letterPositions[currentIndex],
          defaultPosition: letterPositions[spaceIndex],
          scale: (1 / downscale) * 0.333333334,
          tints: tints.length,
          letters: letterPositions.length
        })
      }
    }, [currentIndex, mounted, hovered, x, letterPositions, downscale, index, tints.length])

    return (
      <XStack
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        paddingVertical="$2"
        data-tauri-drag-region
        marginVertical="$-2"
        position="relative"
        className="logo-words"
        {...props}
      >
        {animated && (
          <Circle
            animation="quick"
            position="absolute"
            top={0}
            y={mounted === 'start' ? -40 : -4}
            x={x}
            size={4}
            backgroundColor="$color9"
          />
        )}
        <svg
          data-tauri-drag-region
          width={616 * (1 / downscale) * 0.333333334}
          height={40 * (1 / downscale) * 0.333333334}
          viewBox="0 0 616 40"
          fill="none"
        >
          {/* I */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(0)}
            d="M0 40V0H16V40H0Z"
            onMouseEnter={() => Tint.setTintIndex(0)}
          />
          {/* N */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(1)}
            d="M32 40V0H48V8H56V16H64V0H80V40H64V32H56V24H48V40H32Z"
            onMouseEnter={() => Tint.setTintIndex(1)}
          />
          {/* N */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(2)}
            d="M96 40V0H112V8H120V16H128V0H144V40H128V32H120V24H112V40H96Z"
            onMouseEnter={() => Tint.setTintIndex(2)}
          />
          {/* E */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(3)}
            d="M160 40V0H192V8H176V16H192V24H176V32H192V40H160Z"
            onMouseEnter={() => Tint.setTintIndex(3)}
          />
          {/* R */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(4)}
            d="M208 40V0H240V8H248V16H240V32H248V40H232V32H224V40H208ZM224 16H232V8H224V16Z"
            onMouseEnter={() => Tint.setTintIndex(4)}
          />
          {/* A */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(0)}
            d="M296 40V8H304V0H328V8H336V40H320V24H312V40H296ZM312 16H320V8.32H312V16Z"
            onMouseEnter={() => Tint.setTintIndex(0)}
          />
          {/* S */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(1)}
            d="M352 40V32H376V24H360V16H352V8H360V0H392V8H368V16H384V24H392V32H384V40H352Z"
            onMouseEnter={() => Tint.setTintIndex(1)}
          />
          {/* C */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(2)}
            d="M416 40V32H408V8H416V0H440V8H448V16H432V8H424V32H432V24H448V32H440V40H416Z"
            onMouseEnter={() => Tint.setTintIndex(2)}
          />
          {/* E */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(3)}
            d="M464 40V0H496V8H480V16H496V24H480V32H496V40H464Z"
            onMouseEnter={() => Tint.setTintIndex(3)}
          />
          {/* N */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(4)}
            d="M512 40V0H528V8H536V16H544V0H560V40H544V32H536V24H528V40H512Z"
            onMouseEnter={() => Tint.setTintIndex(4)}
          />
          {/* D */}
          <path
            data-tauri-drag-region
            shapeRendering="crispEdges"
            fill={getColor(0)}
            d="M576 40V0H608V8H616V32H608V40H576ZM592 32H599.68V8H592V32Z"
            onMouseEnter={() => Tint.setTintIndex(0)}
          />
        </svg>
      </XStack>
    )
  }
) 