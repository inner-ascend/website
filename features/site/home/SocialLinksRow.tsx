import { H4, Paragraph, XStack } from 'tamagui'

import { TelegramIcon } from '~/features/icons/TelegramIcon'
import { Card } from '../../../components/Card'
import { DiscordIcon } from '../../icons/DiscordIcon'

export const SocialLinksRow = () => {
  return (
    <XStack jc="center" gap="$4" $sm={{ flexDirection: 'column' }}>
      <Card
        width="40%"
        maxWidth={400}
        jc="center"
        $sm={{ width: 'auto' }}
        space="$2"
        tag="a"
        href="https://t.me/+s6l6LL0v5BIxMWJk"
        target="_blank"
        rel="noopener noreferrer"
        p="$5"
      >
        <TelegramIcon />
        <H4 cursor="pointer" fontFamily="$silkscreen">
          Telegram
        </H4>
        <Paragraph cursor="pointer" theme="alt2">
          Announcements and general updates.
        </Paragraph>
      </Card>
      <Card
        width="40%"
        maxWidth={400}
        jc="center"
        space="$2"
        $sm={{ width: 'auto' }}
        tag="a"
        href="https://discord.gg/xdJNttaFrZ"
        target="_blank"
        rel="noopener noreferrer"
        p="$5"
      >
        <DiscordIcon />
        <H4 cursor="pointer" fontFamily="$silkscreen">
          Discord
        </H4>
        <Paragraph cursor="pointer" theme="alt2">
          Get involved and get questions answered.
        </Paragraph>
      </Card>
    </XStack>
  )
}
