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
    0,    // I
    32,   // N
    96,   // N
    160,  // E
    208,  // R
    272,  // Space
    296,  // A
    352,  // S
    416,  // C
    464,  // E
    512,  // N
    576,  // D
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