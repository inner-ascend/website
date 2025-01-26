import { ChevronRight } from '@tamagui/lucide-icons'
import { type LinkProps } from 'one'
import { H3 } from 'tamagui'
import { CodeInline } from '~/components/Code'
import { Link } from '~/components/Link'

interface FeatureTitleProps {
  href: LinkProps<any>['href']
  children: React.ReactNode
}

export function FeatureTitle({ href, children }: FeatureTitleProps) {
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
        >
          {children} <ChevronRight size={12} />
        </CodeInline>
      </H3>
    </Link>
  )
}
