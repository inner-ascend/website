import { YStack } from 'tamagui'
import { teamMembers } from '~/data/mexico/team'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { TeamGrid } from '../molecules/TeamGrid'

export function MexicoTeam() {
  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Meet Our Team
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Visionaries and experts bringing sustainable community living to life
        </HomeH3>
      </YStack>

      <TeamGrid members={teamMembers} />
    </YStack>
  )
}
