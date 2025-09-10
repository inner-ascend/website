import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeMembership() {
  return (
    <YStack space="$6" mb="$8" id="participate">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Join Us
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          The Sacred Invitation
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          This is a call to those who feel the fire — to stand for truth, care for the land, and embody sacred leadership. There are many ways to contribute.
        </Paragraph>

        {/* 4 participation cards */}
        <XStack
          gap="$4"
          mt="$6"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          {/* Resident */}
          <YStack
            f={1}
            space="$3"
            p="$5"
            bg="$salvaje_ocean2"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_ocean6"
            hoverStyle={{
              scale: 1.02,
              borderColor: "$salvaje_ocean8",
            }}
            animation="quick"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_ocean9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🏠
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
              Founding Land Stewards
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Families ready to build the village
            </Paragraph>
          </YStack>

          {/* Founding Steward */}
          <YStack
            f={1}
            space="$3"
            p="$5"
            bg="$salvaje_mango2"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_mango6"
            hoverStyle={{
              scale: 1.02,
              borderColor: "$salvaje_mango8",
            }}
            animation="quick"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_mango9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🌟
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
              Aligned Investors
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Support financially in alignment with regenerative principles
            </Paragraph>
          </YStack>

          {/* Volunteer / Work-Trade */}
          <YStack
            f={1}
            space="$3"
            p="$5"
            bg="$salvaje_bougainvillea2"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_bougainvillea6"
            hoverStyle={{
              scale: 1.02,
              borderColor: "$salvaje_bougainvillea8",
            }}
            animation="quick"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_bougainvillea9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🤝
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
              Community Contributors
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Share skills, time, and wisdom
            </Paragraph>
          </YStack>

          {/* Retreat Guest */}
          <YStack
            f={1}
            space="$3"
            p="$5"
            bg="$salvaje_ocean3"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_ocean7"
            hoverStyle={{
              scale: 1.02,
              borderColor: "$salvaje_ocean9",
            }}
            animation="quick"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_ocean10"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🧘
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center">
              Future Visitors & Participants
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Join retreats, workshops, and programs
            </Paragraph>
          </YStack>
        </XStack>

        {/* Contact Form */}
        <YStack space="$6" mt="$10" width="100%" maw={600}>
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Contact Form
          </HomeH3>
          
          <YStack space="$4" p="$6" bg="$background" borderRadius="$6" borderWidth={2} borderColor="$salvaje_ocean6">
            <YStack space="$3">
              <Paragraph size="$4" fontWeight="600" color="$salvaje_ocean11">
                Name
              </Paragraph>
              <YStack
                height={40}
                bg="$salvaje_ocean2"
                borderRadius="$4"
                borderWidth={1}
                borderColor="$salvaje_ocean6"
                px="$3"
                jc="center"
              >
                <Paragraph size="$4" theme="alt2" o={0.7}>
                  Your full name
                </Paragraph>
              </YStack>
            </YStack>

            <YStack space="$3">
              <Paragraph size="$4" fontWeight="600" color="$salvaje_ocean11">
                Email
              </Paragraph>
              <YStack
                height={40}
                bg="$salvaje_ocean2"
                borderRadius="$4"
                borderWidth={1}
                borderColor="$salvaje_ocean6"
                px="$3"
                jc="center"
              >
                <Paragraph size="$4" theme="alt2" o={0.7}>
                  your@email.com
                </Paragraph>
              </YStack>
            </YStack>

            <YStack space="$3">
              <Paragraph size="$4" fontWeight="600" color="$salvaje_ocean11">
                Your Interest
              </Paragraph>
              <YStack
                height={40}
                bg="$salvaje_ocean2"
                borderRadius="$4"
                borderWidth={1}
                borderColor="$salvaje_ocean6"
                px="$3"
                jc="center"
              >
                <Paragraph size="$4" theme="alt2" o={0.7}>
                  General, Land Steward, Investor, Contributor, Visitor
                </Paragraph>
              </YStack>
            </YStack>

            <YStack space="$3">
              <Paragraph size="$4" fontWeight="600" color="$salvaje_ocean11">
                Message
              </Paragraph>
              <YStack
                height={120}
                bg="$salvaje_ocean2"
                borderRadius="$4"
                borderWidth={1}
                borderColor="$salvaje_ocean6"
                px="$3"
                py="$3"
              >
                <Paragraph size="$4" theme="alt2" o={0.7}>
                  Tell us about your interest in Proyecto Salvaje...
                </Paragraph>
              </YStack>
            </YStack>

            <Button
              size="$5"
              theme="salvaje_mango"
              fontFamily="$body"
              fontWeight="600"
              mt="$4"
              pressStyle={{
                scale: 0.97,
              }}
              animation="quick"
              hoverStyle={{
                opacity: 0.9,
                scale: 1.02,
              }}
            >
              Submit Application
            </Button>
          </YStack>
        </YStack>

        <XStack
          gap="$4"
          mt="$8"
          $sm={{
            flexDirection: 'column',
            ai: 'center',
            gap: '$3',
          }}
        >
          <Button
            size="$5"
            theme="salvaje_mango"
            fontFamily="$body"
            fontWeight="600"
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Apply to Join
          </Button>
          <Button
            size="$5"
            theme="salvaje_ocean"
            fontFamily="$body"
            fontWeight="600"
            borderWidth={2}
            borderColor="$salvaje_ocean9"
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Download Prospectus
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
