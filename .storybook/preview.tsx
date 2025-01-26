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
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme="light">
        <Theme name="light">
          <Story />
        </Theme>
      </TamaguiProvider>
    ),
  ],
}

export default preview