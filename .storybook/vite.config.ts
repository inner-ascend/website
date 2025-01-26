/// <reference types="vite/client" />

import { tamaguiPlugin } from '@tamagui/vite-plugin'
import { join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': join(process.cwd()),
    },
  },
  define: {
    'process.env.NODE_ENV': '"development"',
    'process.env.TAMAGUI_TARGET': '"web"',
    __DEV__: 'true',
    global: '{}',
  },
  plugins: [
    tamaguiPlugin({
      components: ['tamagui'],
      config: './config/tamagui.config.ts',
      useReactNativeWebLite: true,
    }),
  ],
  optimizeDeps: {
    include: ['react-native-web', 'react-native'],
    exclude: ['@tamagui/core', '@tamagui/popper'],
    esbuildOptions: {
      resolveExtensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
})