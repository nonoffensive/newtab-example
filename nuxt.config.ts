// https://nuxt.com/docs/api/configuration/nuxt-config
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  vite: {
    plugins: [
      devtoolsJson(),
    ]
  }
})
