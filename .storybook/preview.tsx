import type { Preview } from '@storybook/react'
import React from 'react'
import { AppRegistry } from 'react-native'
import { TamaguiProvider, Theme, createTamagui } from 'tamagui'
import config from '../config/tamagui.config'

// Initialize React Native Web
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.React = React
  // @ts-ignore
  window.__DEV__ = true
  AppRegistry.registerComponent('Main', () => () => null)
}

// Initialize Tamagui
const tamaguiConfig = createTamagui(config)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
        <Theme name="light" style={{ minHeight: '100vh' }}>
          <Story />
        </Theme>
      </TamaguiProvider>
    ),
  ],
}

export default preview
