import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      public: {
        base: '/local_my_tea_collection/ingress'
      },
      client: {
        base: '/local_my_tea_collection/ingress'
      },
      serverFns: {
        base: '/local_my_tea_collection/ingress/api'
      },
    }),
  ],
})
