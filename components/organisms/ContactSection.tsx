import type { ThemeName } from 'tamagui'
import { Spacer, YStack } from 'tamagui'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { ContactContent } from '../atoms/ContactContent'

interface ContactSectionProps {
  title: string
  subtitle: string
  buttons?: Array<{
    text: string
    theme: ThemeName
    onPress: () => void
  }>
  maxWidth?: number
  showSocialLinks?: boolean
}

export function ContactSection({
  title,
  subtitle,
  buttons,
  maxWidth,
  showSocialLinks = true,
}: ContactSectionProps) {
  return (
    <YStack space="$4">
      <ContactContent title={title} subtitle={subtitle} buttons={buttons} maxWidth={maxWidth} />
      {showSocialLinks && (
        <>
          <Spacer size="$8" />
          <SocialLinksRow />
        </>
      )}
    </YStack>
  )
}
