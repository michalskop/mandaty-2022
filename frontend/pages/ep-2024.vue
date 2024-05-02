<template>
  <div class="container">
    
    <ChartLinks />

    <h1 class="pt-4">Evropský parlament - ČR 2024</h1>

    <hr />

    <ep-2024-polls-seats />

    <hr />

    <ep-2024-polls-chart />

    <hr />

    <ep-2024-polls-parties-tables />

  </div>
</template>

<script setup lang="ts">

import shareImage from '~/assets/data/ep2024/ep2024_share_image.json'

const BASE_URL = 'https://mandaty.cz/'
const FB_APP_ID = '493242628099686'

useHead({
  title: 'Mandáty.cz',
  meta: [
    {hid: 'og:name', property: 'og:image', content: BASE_URL + shareImage['filename']},
    {hid: 'og:url', property: 'og:url', content: BASE_URL},
    {hid: 'og:type', property: 'og:type', content: 'website'},
    {hid: 'og:title', property: 'og:title', content: "Mandáty.cz"},
    {hid: 'og:description', property: 'og:description', content: "Vývoj volebních modelů dle průzkumů veřejného mínění"},
    {hid: 'fb:app_id', property: 'fb:app_id', content: FB_APP_ID}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.svg' },
  ]

})
</script>