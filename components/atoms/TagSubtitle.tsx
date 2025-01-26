import { type LinkProps as OneLinkProps } from 'one'
import { Paragraph, Text, styled } from 'tamagui'
import { Link } from '~/components/Link'

export interface TagItem {
  text: string
  theme: 'green' | 'blue' | 'purple'
  href?: OneLinkProps<any>['href']
}

interface TagSubtitleProps {
  tags: TagItem[]
  separator?: string
  suffix?: string
  onTagHover?: (index: number) => void
  activeIndex?: number
}

export function TagSubtitle({
  tags,
  separator = ' · ',
  suffix,
  onTagHover,
  activeIndex = -1,
}: TagSubtitleProps) {
  return (
    <StyledSubtitle>
      {tags.map((tag, i) => (
        <Text key={i}>
          {tag.href ? (
            <Link asChild href={tag.href}>
              <StyledTag
                theme={tag.theme}
                onHoverIn={() => onTagHover?.(i)}
                active={activeIndex === i}
              >
                {tag.text}
              </StyledTag>
            </Link>
          ) : (
            <StyledTag
              theme={tag.theme}
              onHoverIn={() => onTagHover?.(i)}
              active={activeIndex === i}
            >
              {tag.text}
            </StyledTag>
          )}
          {i < tags.length - 1 && separator}
        </Text>
      ))}
      {suffix && separator + suffix}
    </StyledSubtitle>
  )
}

const StyledSubtitle = styled(Paragraph, {
  color: '$gray10',
  size: '$6',
  fontFamily: '$silkscreen',
  ta: 'left',
  ls: -1,

  $gtSm: {
    ta: 'center',
    size: '$8',
    ls: -1,
  },

  $gtMd: {
    size: '$8',
    ls: -1,
  },

  $gtLg: {
    size: '$9',
    lh: 50,
    ls: -1,
  },
})

const StyledTag = styled(Text, {
  tag: 'a',
  className: 'hero-tag text-decoration-none',
  fontFamily: '$silkscreen',
  fontSize: 'inherit' as any,
  borderRadius: '$2',
  px: '$1',
  mx: '$-1',
  cursor: 'pointer',
  color: '$color10',
  bg: '$color3',

  hoverStyle: {
    color: '$color',
    bg: '$color4',
  },

  variants: {
    active: {
      true: {
        color: '$color10',
        bg: '$color5',

        hoverStyle: {
          color: '$color12',
          bg: '$color5',
        },
      },
    },
  } as const,
})
