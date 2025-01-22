import { ChevronRight } from '@tamagui/lucide-icons'
import { Button, Card, H2, Paragraph, XStack, YStack } from 'tamagui'
import { Link } from '~/components/Link'
import { ContainerLarge } from '../../../components/Containers'

export function MexicoProject() {
  return (
    <ContainerLarge>
      <YStack space="$6" mb="$8">
        <YStack space="$4" mb="$4">
          <H2 size="$9" ta="center" $sm={{ size: "$8" }}>
            Mexico Project
          </H2>
          <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
            Join our flagship regenerative community in Oaxaca, featuring natural cenotes, lush jungle, and sustainable infrastructure
          </Paragraph>
        </YStack>

        <Link href="/mexico" style={{ textDecoration: 'none' }}>
          <Card
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$6"
            ov="hidden"
            animation="quick"
            pressStyle={{
              scale: 0.98,
            }}
            hoverStyle={{
              scale: 1.01,
              elevation: "$8",
              cursor: 'pointer'
            }}
          >
            <YStack height={400} $sm={{ height: 300 }} style={{
              backgroundImage: 'url(/images/hero/oaxaca-paradise.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <YStack
                f={1}
                jc="flex-end"
                p="$6"
                space="$4"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
                }}
              >
                <XStack jc="space-between" ai="flex-end">
                  <YStack space="$3" maw={600}>
                    <H2 color="white" size="$8" $sm={{ size: "$7" }}>
                      Paradise Found
                    </H2>
                    <Paragraph color="white" size="$5" o={0.9} $sm={{ size: "$4" }}>
                      Experience sustainable living in a tropical paradise through NFT-based community ownership
                    </Paragraph>
                  </YStack>
                  <Button
                    size="$5"
                    theme="green"
                    iconAfter={ChevronRight}
                    pressStyle={{
                      scale: 0.97,
                    }}
                    hoverStyle={{
                      opacity: 0.9,
                      scale: 1.02
                    }}
                  >
                    <Link href="/mexico">Learn More</Link>
                  </Button>
                </XStack>
              </YStack>
            </YStack>
          </Card>
        </Link>
      </YStack>
    </ContainerLarge>
  )
} 