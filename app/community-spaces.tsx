// @ts-nocheck responsive props
import { Building2, ClipboardList, Shield, Sprout, Users, Vote, Wallet, Zap } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { Button, Circle, H2, H3, Paragraph, XStack, YStack } from 'tamagui'

const views = {
  xs: {
    title: "Overview",
    description: "Essential tools for community coordination",
    content: [
      {
        name: "Governance",
        description: "Participate in community decisions through token voting",
        features: ["Proposal voting", "Resource allocation", "Role delegation"],
        icon: Building2,
        theme: "blue"
      },
    //   {
    //     name: "Treasury",
    //     description: "Manage shared resources and community funds",
    //     features: ["Token distribution", "Budget tracking", "Rewards system"],
    //     icon: Wallet,
    //     theme: "yellow"
    //   },
      {
        name: "Membership",
        description: "Join and contribute to the community",
        features: ["Identity verification", "Reputation system", "Access control"],
        icon: Users,
        theme: "yellow"
      },
      {
        name: "Projects",
        description: "Collaborate on community initiatives",
        features: ["Task management", "Progress tracking", "Resource sharing"],
        icon: ClipboardList,
        theme: "green"
        // theme: "purple"
      }
    ]
  },
  sm: {
    title: "Schedule",
    description: "Key community activities and milestones",
    content: [
      { 
        name: "Token Launch",
        description: "Initial distribution of governance tokens to founding members",
        features: [
          "Q1 2024",
          "On Mainnet",
          "Community allocation"
        ],
        icon: Wallet,
        theme: "yellow"
      },
      { 
        name: "Land NFTs",
        description: "Release of tokenized land parcels and common spaces",
        features: [
          "Q2 2024",
          "NFT Marketplace",
          "Plot selection"
        ],
        icon: Building2,
        theme: "green"
      },
      { 
        name: "DAO Setup",
        description: "Implementation of on-chain voting and treasury",
        features: [
          "Q3 2024",
          "Governance portal",
          "Proposal system"
        ],
        icon: Users,
        theme: "blue"
      },
    //   { 
    //     name: "Community Build",
    //     description: "Begin physical development of community spaces",
    //     features: [
    //       "Q4 2024",
    //       "On-site work",
    //       "Space design"
    //     ],
    //     icon: ClipboardList,
    //     theme: "purple"
    //   }
    ]
  },
  md: {
    title: "Resources",
    description: "Community assets and shared resources",
    content: [
      {
        name: "Living Spaces",
        description: "Tokenized residential units and common areas",
        features: [
          "12/20 Units Available",
          "Sustainable Design",
          "Shared Amenities"
        ],
        icon: Building2,
        theme: "green",
        available: 12,
        total: 20
      },
      {
        name: "Energy Grid",
        description: "Renewable energy distribution system",
        features: [
          "5000/10000 kWh Available",
          "Solar + Storage",
          "Usage Tracking"
        ],
        icon: Zap,
        theme: "yellow",
        available: 5000,
        total: 10000
      },
      {
        name: "Food System",
        description: "Community gardens and food production",
        features: [
          "8/10 Plots Available",
          "Permaculture Design",
          "Harvest Sharing"
        ],
        icon: Sprout,
        theme: "blue",
        available: 8,
        total: 10
      },
    //   {
    //     name: "Tool Library",
    //     description: "Shared equipment and resources",
    //     features: [
    //       "25/30 Tools Available",
    //       "Maintenance Program",
    //       "Booking System"
    //     ],
    //     icon: Wrench,
    //     theme: "purple",
    //     available: 25,
    //     total: 30
    //   }
    ]
  },
  lg: {
    title: "Governance",
    description: "Decentralized decision-making framework",
    content: [
      {
        name: "Token Governance",
        description: "Community-wide token voting system",
        features: [
          "1 token = 1 vote",
          "Quadratic voting",
          "Delegation enabled"
        ],
        icon: Vote,
        theme: "yellow"
      },
      {
        name: "Guardian Council",
        description: "Elected stewards managing operations",
        features: [
          "Multi-sig treasury",
          "Protocol upgrades",
          "Risk assessment"
        ],
        icon: Shield,
        theme: "blue"
      },
      {
        name: "Working Groups",
        description: "Focused development teams",
        features: [
          "Task allocation",
          "Resource management",
          "Progress tracking"
        ],
        icon: Users,
        theme: "green"
      },
    //   {
    //     name: "Community Forum",
    //     description: "Open discussion and proposal refinement",
    //     features: [
    //       "Proposal discussion",
    //       "Knowledge sharing",
    //       "Community polls"
    //     ],
    //     icon: MessageCircle,
    //     theme: "purple"
    //   }
    ]
  }
}

export default function ResponsiveDemo() {
  const [currentView, setCurrentView] = useState(views.xs)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const view = Object.entries(views).find(([_, data]) => data.title === hash)?.[1]
      if (view) setCurrentView(view)
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      const view = Object.entries(views).find(([_, data]) => data.title === hash)?.[1]
      if (view) setCurrentView(view)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderContent = () => {
    switch (currentView) {
      case views.xs:
        return (
          <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
            {currentView.content.map((space) => (
              <Card
                key={space.name}
                theme={space.theme}
                width={300}
                p="$4"
                space="$4"
                br="$6"
                bw={1}
                hoverStyle={{ scale: 1.02, y: -5 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack 
                    width={60} 
                    height={60} 
                    br="$6" 
                    backgroundColor="$color5" 
                    ai="center" 
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={10}
                    elevation={2}
                  >
                    <space.icon size={30} color="$background" />
                  </YStack>
                  <H3 size="$6" fontWeight="800">{space.name}</H3>
                </XStack>
                <Paragraph theme="alt2" size="$4" o={0.8}>{space.description}</Paragraph>
                <YStack space="$2" pt="$2">
                  {space.features.map((feature, i) => (
                    <XStack key={i} ai="center" space="$2">
                      <Circle size={6} backgroundColor="$color5" />
                      <Paragraph size="$3" theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </Card>
            ))}
          </XStack>
        )
      
      case views.sm:
        return (
          <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
            {currentView.content.map((space) => (
              <Card
                key={space.name}
                theme={space.theme}
                width={300}
                p="$4"
                space="$4"
                br="$6"
                bw={1}
                hoverStyle={{ scale: 1.02, y: -5 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack 
                    width={60} 
                    height={60} 
                    br="$6" 
                    backgroundColor="$color5" 
                    ai="center" 
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={10}
                    elevation={2}
                  >
                    <space.icon size={30} color="$background" />
                  </YStack>
                  <H3 size="$6" fontWeight="800">{space.name}</H3>
                </XStack>
                <Paragraph theme="alt2" size="$4" o={0.8}>{space.description}</Paragraph>
                <YStack space="$2" pt="$2">
                  {space.features.map((feature, i) => (
                    <XStack key={i} ai="center" space="$2">
                      <Circle size={6} backgroundColor="$color5" />
                      <Paragraph size="$3" theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </Card>
            ))}
          </XStack>
        )

      case views.md:
        return (
          <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
            {currentView.content.map((space) => (
              <Card
                key={space.name}
                theme={space.theme}
                width={300}
                p="$4"
                space="$4"
                br="$6"
                bw={1}
                hoverStyle={{ scale: 1.02, y: -5 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack 
                    width={60} 
                    height={60} 
                    br="$6" 
                    backgroundColor="$color5" 
                    ai="center" 
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={10}
                    elevation={2}
                  >
                    <space.icon size={30} color="$background" />
                  </YStack>
                  <H3 size="$6" fontWeight="800">{space.name}</H3>
                </XStack>
                {/* <Paragraph theme="alt2" size="$4" o={0.8}>{space.description}</Paragraph> */}
                <YStack space="$2" pt="$2">
                  {space.features.map((feature, i) => (
                    <XStack key={i} ai="center" space="$2">
                      <Circle size={6} backgroundColor="$color5" />
                      <Paragraph size="$3" theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
                <Button 
                  size="$3" 
                //   themeInverse
                  mt="$2"
                >
                  {space.available > 0 ? 'Reserve' : 'Waitlist'}
                </Button>
              </Card>
            ))}
          </XStack>
        )

      case views.lg:
        return (
          <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
            {currentView.content.map((space) => (
              <Card
                key={space.name}
                theme={space.theme}
                width={300}
                p="$4"
                space="$4"
                br="$6"
                bw={1}
                hoverStyle={{ scale: 1.02, y: -5 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack 
                    width={60} 
                    height={60} 
                    br="$6" 
                    backgroundColor="$color5" 
                    ai="center" 
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={10}
                    elevation={2}
                  >
                    <space.icon size={30} color="$background" />
                  </YStack>
                  <H3 size="$6" fontWeight="800">{space.name}</H3>
                </XStack>
                <Paragraph theme="alt2" size="$4" o={0.8}>{space.description}</Paragraph>
                <YStack space="$2" pt="$2">
                  {space.features.map((feature, i) => (
                    <XStack key={i} ai="center" space="$2">
                      <Circle size={6} backgroundColor="$color5" />
                      <Paragraph size="$3" theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </Card>
            ))}
          </XStack>
        )
    }
  }

  return (
    <YStack backgroundColor="$backgroundHover" mah="100vh" ov="hidden" space="$4">
      <YStack p="$6" space="$4">
        <H2 ta="center" size="$9" fontWeight="900" theme="alt1">{currentView.title}</H2>
        <Paragraph ta="center" theme="alt2" size="$5" o={0.7}>
          {currentView.description}
        </Paragraph>
      </YStack>

      <YStack f={1}>
        {renderContent()}
      </YStack>
    </YStack>
  )
}

const Card = ({ children, theme, ...props }) => (
  <YStack
    theme={theme}
    backgroundColor="$background"
    borderColor="$borderColor"
    shadowColor="$shadowColor"
    shadowRadius={15}
    shadowOffset={{ width: 0, height: 4 }}
    elevation={4}
    {...props}
  >
    {children}
  </YStack>
) 