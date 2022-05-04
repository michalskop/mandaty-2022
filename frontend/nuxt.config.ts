import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  mode: 'universal',
  generate: {'subFolders': true}, // https://github.com/nuxt/framework/issues/4680 !!!
  // target: 'static',
  // css: [
  //   ~/assets/scss/main.scss;
  // ]
  build: {
    transpile: ['echarts']
  }
})
