<template>
  <div id="image-wrapper">
    <h3>
      Vývoj volebních modelů 
      <small>dle průzkumů veřejného mínění
      </small>
    </h3>
    <div v-if="isMobile">
      <SnemovnaPollsPictureChart />
    </div>
    <div v-if="!isMobile">
      <SnemovnaPollsInteractiveChart />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SnemovnaPollsChart',
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 666
    console.log('isMobile:', this.isMobile)
  },
  components: {
    SnemovnaPollsPictureChart: () => import('~/components/snemovna/SnemovnaPollsPictureChart.vue'),
    SnemovnaPollsInteractiveChart: () => import('~/components/snemovna/SnemovnaPollsInteractiveChart.vue')
  }
}
</script>

<style scoped>
#image-wrapper {
  min-height: 40vh;
}
</style>