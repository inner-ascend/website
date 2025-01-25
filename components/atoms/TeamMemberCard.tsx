import { User } from '@tamagui/lucide-icons'
import { Card, H3, Image, Paragraph, Spinner, XStack, YStack } from 'tamagui'

export interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  focus: string
  image: string
  imageState: 'loading' | 'error' | 'loaded'
  onImageError: () => void
}

export function TeamMemberCard({
  name,
  role,
  bio,
  focus,
  image,
  imageState,
  onImageError,
}: TeamMemberCardProps) {
  return (
    <Card
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      width={280}
      minWidth={280}
      maxWidth={280}
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.01,
      }}
      $gtSm={{
        width: 280,
        minWidth: 280,
        maxWidth: 280,
      }}
      $sm={{
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        mb: '$2',
      }}
    >
      <YStack
        height={320}
        minHeight={320}
        maxHeight={320}
        br="$6"
        ov="hidden"
        backgroundColor="$color4"
        position="relative"
        $sm={{
          height: 280,
          minHeight: 280,
          maxHeight: 280,
        }}
      >
        {imageState === 'loading' && (
          <YStack f={1} ai="center" jc="center">
            <Spinner size="large" color="$color" />
          </YStack>
        )}

        {imageState === 'loaded' && (
          <YStack position="relative" height="100%" width="100%" overflow="hidden">
            <Image
              source={{ uri: image }}
              alt={`${name} - ${role}`}
              resizeMode="cover"
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              width="100%"
              height="100%"
              onError={onImageError}
            />
          </YStack>
        )}

        {imageState === 'error' && (
          <YStack f={1} ai="center" jc="center" space="$2">
            <User size={40} color="var(--color)" opacity={0.5} />
            <Paragraph size="$3" theme="alt2">
              Photo coming soon
            </Paragraph>
          </YStack>
        )}
      </YStack>
      <YStack p="$4" space="$2">
        <H3 size="$6">{name}</H3>
        <Paragraph size="$4" theme="alt2" fontWeight="600">
          {role}
        </Paragraph>
        <Paragraph size="$3" theme="alt2">
          {bio}
        </Paragraph>
        <XStack mt="$2" ai="center" space="$2">
          <YStack backgroundColor="$color4" px="$2" py="$1" br="$4">
            <Paragraph size="$2" color="$color11">
              {focus}
            </Paragraph>
          </YStack>
        </XStack>
      </YStack>
    </Card>
  )
}
