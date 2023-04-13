import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  plugins: [
    { src: '~/plugins/matomo-plugin.client.js', ssr:false }
  ]
})