<template>
  <div class="container">
    <!-- <NavTabs /> -->
  
    <h1 class="pt-4">Prezidentské volby 2023</h1>
    <hr />

    <PresidentCurrentOdds />

    <PresidentBetTipsport />

    <hr />

    <PresidentOddsChart />

    <PresidentBetTipsport />

    <hr />

    <PresidentTable />

    <hr />

    <!-- THIS IS A FRONTPAGE!
    <NuxtLink to="/">Frontpage</NuxtLink>
    <NuxtLink to="/test">Test</NuxtLink>
    <NuxtLink to="/fest">Fest</NuxtLink>
    <NuxtLink to="/snemovna">Snemovna</NuxtLink> -->
  </div>
</template>

<script>
  import filename from '@/assets/data/president/president_share_image.json'

  export default {
    data() {
      return {
        fn: filename['filename']
      }
    },
    head() {
      return {
        title: 'Mandáty.cz - prezidentské volby 2023',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Prezidentské volby 2023 - nejpřesnější denně aktualizované volební modely.'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://mandaty.cz/'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Mandáty.cz - prezidentské volby 2023'
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'Mandáty.cz - nejpřesnější denně aktualizované modely pro prezidentské volby 2023.'
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'Mandáty.cz - nejpřesnější denně aktualizované modely pro prezidentské volby 2023'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: "/" + this.data()['fn']
          },
        ]
      }
    }
  }
</script>

