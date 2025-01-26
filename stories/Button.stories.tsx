import type { Meta, StoryObj } from '@storybook/react'
import { Button, Text, Theme, XStack, YStack } from 'tamagui'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Common container for consistent styling
const Container = ({ children }: { children: React.ReactNode }) => (
  <YStack
    space="$4"
    alignItems="center"
    padding="$4"
    backgroundColor="$background"
    borderRadius="$4"
    borderWidth={1}
    borderColor="$borderColor"
  >
    {children}
  </YStack>
)

export const LightThemeButtons: Story = {
  render: () => (
    <Theme name="light">
      <Container>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          {/* Primary Button */}
          <Button theme="blue">
            <Text>Primary</Text>
          </Button>

          {/* Secondary Button */}
          <Button theme="gray">
            <Text>Secondary</Text>
          </Button>

          {/* Outlined Button */}
          <Button variant="outlined" theme="blue">
            <Text>Outlined</Text>
          </Button>

          {/* Disabled Button */}
          <Button disabled theme="blue">
            <Text>Disabled</Text>
          </Button>
        </XStack>
      </Container>
    </Theme>
  ),
}

export const DarkThemeButtons: Story = {
  render: () => (
    <Theme name="dark">
      <Container>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          {/* Primary Button */}
          <Button theme="blue">
            <Text>Primary</Text>
          </Button>

          {/* Secondary Button */}
          <Button theme="gray">
            <Text>Secondary</Text>
          </Button>

          {/* Outlined Button */}
          <Button variant="outlined" theme="blue">
            <Text>Outlined</Text>
          </Button>

          {/* Disabled Button */}
          <Button disabled theme="blue">
            <Text>Disabled</Text>
          </Button>
        </XStack>
      </Container>
    </Theme>
  ),
}

export const ButtonVariants: Story = {
  render: () => (
    <Container>
      <XStack space="$4" flexWrap="wrap" justifyContent="center">
        <Button theme="blue">
          <Text>Default</Text>
        </Button>
        <Button variant="outlined" theme="blue">
          <Text>Outlined</Text>
        </Button>
        <Button variant="secondary" theme="blue">
          <Text>Secondary</Text>
        </Button>
        <Button size="$2" theme="blue">
          <Text>Small</Text>
        </Button>
        <Button size="$6" theme="blue">
          <Text>Large</Text>
        </Button>
      </XStack>
    </Container>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <Container>
      <YStack space="$4" alignItems="center">
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="blue">
            <Text>Blue</Text>
          </Button>
          <Button theme="red">
            <Text>Red</Text>
          </Button>
          <Button theme="green">
            <Text>Green</Text>
          </Button>
          <Button theme="yellow">
            <Text>Yellow</Text>
          </Button>
        </XStack>
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="orange">
            <Text>Orange</Text>
          </Button>
          <Button theme="purple">
            <Text>Purple</Text>
          </Button>
          <Button theme="pink">
            <Text>Pink</Text>
          </Button>
          <Button theme="gray">
            <Text>Gray</Text>
          </Button>
        </XStack>
        {/* Alt themes for more subtle colors */}
        <XStack space="$4" flexWrap="wrap" justifyContent="center">
          <Button theme="blue_alt1">
            <Text>Blue Alt</Text>
          </Button>
          <Button theme="red_alt1">
            <Text>Red Alt</Text>
          </Button>
          <Button theme="green_alt1">
            <Text>Green Alt</Text>
          </Button>
          <Button theme="yellow_alt1">
            <Text>Yellow Alt</Text>
          </Button>
        </XStack>
      </YStack>
    </Container>
  ),
}
