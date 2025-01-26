import '@tamagui/core/reset.css'
import '../app.css'
import '../tamagui.css'

import type { Preview } from '@storybook/react'
import React from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import config from '../config/tamagui.config'
import { themes } from '../config/themes'

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
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: Object.keys(themes),
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme
      return (
        <TamaguiProvider config={config} defaultTheme={theme}>
          <Theme name={theme}>
            <Story />
          </Theme>
        </TamaguiProvider>
      )
    },
  ],
}

export default preview
