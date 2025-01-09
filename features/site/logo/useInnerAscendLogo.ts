import { useTint } from '@tamagui/logo'
import { useEffect, useState } from 'react'

const letterToTint = {
  0: 0,  // I
  1: 1,  // N
  2: 2,  // N
  3: 3,  // E
  4: 4,  // R
  5: 5,  // Space
  6: 6,  // A
  7: 7,  // S
  8: 8,  // C
  9: 9,  // E
  10: 10, // N
  11: 11, // D
} as const

// Letter widths in SVG units
const letterWidths = {
  I: 16,   // Single vertical stroke
  N: 48,   // Wide with diagonal stroke
  E: 30,   // Three horizontal strokes
  R: 36,   // Vertical with curved top
  A: 40,   // Wide with angled sides
  S: 40,   // Curved with wide middle
  C: 24,   // Narrow curved stroke
  D: 32,   // Vertical with curve
}

// Offset to adjust dot position slightly left (in SVG units)
const DOT_OFFSET = 6

export const useInnerAscendLogo = (downscale = 1) => {
  const Tint = useTint()
  const { tintIndex: index, tint } = Tint
  const tints = Tint.tints.map((t) => `var(--${t}9)`)
  const [hovered, setHovered] = useState(false)
  const [mounted, setMounted] = useState<'start' | 'animate' | 'done'>('start')
  const [dotPosition, setDotPosition] = useState(5)

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

  const getColor = (position: number) => {
    const isActive = mounted !== 'start' && position === dotPosition
    if (hovered && isActive) {
      return 'var(--color)'
    }
    return tints[position % tints.length]
  }

  const letterPositions = [
    0 + letterWidths.I/2 - DOT_OFFSET,      // I
    32 + letterWidths.N/2 - DOT_OFFSET,     // N
    96 + letterWidths.N/2 - DOT_OFFSET,     // N
    160 + letterWidths.E/2 - DOT_OFFSET,    // E
    208 + letterWidths.R/2 - DOT_OFFSET,    // R
    272 - DOT_OFFSET,                  // Space (24 units wide)
    296 + letterWidths.A/2 - DOT_OFFSET,    // A
    352 + letterWidths.S/2 - DOT_OFFSET,    // S
    416 + letterWidths.C/2 - DOT_OFFSET,    // C
    464 + letterWidths.E/2 - DOT_OFFSET,    // E
    512 + letterWidths.N/2 - DOT_OFFSET,    // N
    576 + letterWidths.D/2 - DOT_OFFSET,    // D
  ].map(x => x * (1 / downscale) * 0.333333334)

  const spaceIndex = 5
  const currentIndex = mounted === 'start' ? spaceIndex : dotPosition
  const x = letterPositions[currentIndex]
  const y = mounted === 'start' ? -40 : -4

  return {
    x,
    y,
    hovered,
    setHovered,
    getColor,
    setTintIndex: (position: number) => {
      Tint.setTintIndex(letterToTint[position])
      setDotPosition(position)
    },
    mounted,
    letterPositions,
    spaceIndex,
    currentIndex,
    downscale
  }
}

export type InnerAscendLogoState = ReturnType<typeof useInnerAscendLogo> 