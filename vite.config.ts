import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    vue(),
    ui({
      inertia: true,
      components: {
        dirs: ['inertia/components'],
      },
      ui: {
        colors: {
          primary: 'violet',
          neutral: 'neutral',
        },
      },
    }),
    adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
