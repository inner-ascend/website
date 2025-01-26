import { Paragraph, styled, type FontSizeTokens, type GetThemeValueForKey } from 'tamagui'

interface SilkscreenParagraphProps {
  children: React.ReactNode
  size?: {
    default: FontSizeTokens
    sm?: FontSizeTokens
    md?: FontSizeTokens
  }
  lineHeight?: {
    default: number
    sm?: number
    md?: number
  }
  maxWidth?: number
  opacity?: number
  letterSpacing?: number
  color?: GetThemeValueForKey<'color'>
}

export function SilkscreenParagraph({
  children,
  size = { default: '$4', sm: '$5' },
  lineHeight = { default: 26, sm: 30 },
  maxWidth,
  opacity = 0.9,
  letterSpacing = -0.5,
  color = '$color10',
}: SilkscreenParagraphProps) {
  return (
    <StyledParagraph
      size={size.default}
      ta="center"
      o={opacity}
      mt="$4"
      color={color}
      als="center"
      letterSpacing={letterSpacing}
      lh={lineHeight.default}
      maw={maxWidth}
      $gtSm={{
        size: size.sm,
        lh: lineHeight.sm,
      }}
      $gtMd={{
        size: size.md ?? size.sm,
        lh: lineHeight.md ?? lineHeight.sm,
        px: '$2',
      }}
    >
      {children}
    </StyledParagraph>
  )
}

const StyledParagraph = styled(Paragraph, {
  fontFamily: '$silkscreen',
})
