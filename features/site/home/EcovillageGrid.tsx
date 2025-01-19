import { H4, Paragraph, YStack } from 'tamagui'

import { ContainerLarge } from '../../../components/Containers'
import { Grid } from '../../../components/Grid'

export function EcovillageGrid() {
  return (
    <>
      <ContainerLarge space="$8">
        <YStack maw={950} als="center">
          <Grid gap={25} itemMinWidth={280}>
            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Sustainable Living
              </H4>
              <Paragraph theme="alt1">
                Implement permaculture principles, renewable energy systems, and ecological building practices in your community.
              </Paragraph>
            </YStack>

            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Community Governance
              </H4>
              <Paragraph theme="alt1">
                Participate in decentralized decision-making through our DAO structure, ensuring transparent and equitable governance.
              </Paragraph>
            </YStack>

            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Resource Sharing
              </H4>
              <Paragraph theme="alt1">
                Access shared tools, knowledge, and resources within your community network while minimizing environmental impact.
              </Paragraph>
            </YStack>

            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Skill Development
              </H4>
              <Paragraph theme="alt1">
                Learn and share sustainable living skills, from natural building techniques to organic farming practices.
              </Paragraph>
            </YStack>

            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Cultural Exchange
              </H4>
              <Paragraph theme="alt1">
                Foster diverse and inclusive communities through cultural events, shared celebrations, and collaborative projects.
              </Paragraph>
            </YStack>

            <YStack gap="$4" p="$4">
              <H4 ls={0} fontFamily="$silkscreen" ta="center">
                Regenerative Impact
              </H4>
              <Paragraph theme="alt1">
                Track and improve your community's environmental impact through regenerative practices and ecological restoration.
              </Paragraph>
            </YStack>
          </Grid>
        </YStack>
      </ContainerLarge>
    </>
  )
}
