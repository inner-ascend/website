import { useEffect, useState } from 'react'
import { XStack } from 'tamagui'
import { TeamMemberCard, TeamMemberCardProps } from '../atoms/TeamMemberCard'

export interface TeamMember extends Omit<TeamMemberCardProps, 'imageState' | 'onImageError'> {}

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  const [imageStates, setImageStates] = useState<{ [key: string]: 'loading' | 'error' | 'loaded' }>(
    {}
  )

  // Pre-load images
  useEffect(() => {
    members.forEach((member) => {
      const img = new window.Image()
      setImageStates((prev) => ({ ...prev, [member.name]: 'loading' }))

      img.onload = () => {
        setImageStates((prev) => ({ ...prev, [member.name]: 'loaded' }))
      }

      img.onerror = () => {
        setImageStates((prev) => ({ ...prev, [member.name]: 'error' }))
      }

      img.src = member.image
    })
  }, [members])

  return (
    <XStack
      flexWrap="wrap"
      gap="$6"
      jc="center"
      maxWidth={1200}
      als="center"
      px="$4"
      $sm={{
        gap: '$4',
        px: '$2',
      }}
    >
      {members.map((member, i) => (
        <TeamMemberCard
          key={i}
          {...member}
          imageState={imageStates[member.name] || 'loading'}
          onImageError={() => setImageStates((prev) => ({ ...prev, [member.name]: 'error' }))}
        />
      ))}
    </XStack>
  )
}
