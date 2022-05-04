import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  mode: 'universal',
  // generate: {'subFolders': true}, // https://github.com/nuxt/framework/issues/4680 !!!
  // target: 'static',
  // css: [
  //   ~/assets/scss/main.scss;
  // ]
  // build: {
  //   transpile: ['echarts']
  // }
  // https://github.com/nuxt/framework/pull/2655
  app: {
    head: {
      title: 'Mandáty.cz',
      meta: [
        // { charset: 'utf-8' },
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nejpřesnější denně aktualizované volební modely.'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          content: '493242628099686'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@skopmichal'
        },
        
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
