import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Plugins
import { VitePWA } from 'vite-plugin-pwa'

import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['img/*.png', 'img/*.svg', 'icons/*.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: false,
        sourcemap: true
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'LATAM Gol',
        short_name: 'LATAM Gol',
        description:
          'Sitio Web definitivo de resultados y estadísticas de fútbol en América Latina.',
        theme_color: '#ffffff',
        lang: 'es',
        icons: [
          {
            src: '/logo.svg',
            sizes: '144x144',
            type: 'image/svg'
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
