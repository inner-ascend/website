import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: '/',
      define: {
        'process.env.TAMAGUI_TARGET': JSON.stringify('web'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        __DEV__: process.env.NODE_ENV !== 'production',
        global: 'globalThis',
      },
      resolve: {
        alias: {
          'react-native': 'react-native-web',
          '@react-native/normalize-color': require.resolve('@react-native/normalize-color'),
        },
        dedupe: ['react', 'react-dom', '@tamagui/core', 'react-native-web'],
      },
      optimizeDeps: {
        include: [
          'react-native-web',
          '@react-native/normalize-color',
          '@tamagui/core',
          'react-native-web/dist/cjs/exports/AppRegistry',
          'react-native-web/dist/cjs/exports/StyleSheet',
          'react-native-web/dist/cjs/exports/View',
          'react-native-web/dist/cjs/exports/Text',
        ],
        exclude: ['@tamagui/core', '@tamagui/popper'],
        esbuildOptions: {
          resolveExtensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
          loader: {
            '.js': 'jsx',
          },
          define: {
            global: 'globalThis',
          },
        },
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
        },
      },
      server: {
        fs: {
          strict: false,
        },
      },
    })
  },
}

export default config
