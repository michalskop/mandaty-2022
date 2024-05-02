<template>
  <div id="image-wrapper">
    <h3>
      Vývoj volebních modelů 
      <small>dle průzkumů veřejného mínění
      </small>
    </h3>
    <div v-if="isMobile">
      <Ep2024PollsPictureChart />
    </div>
    <div v-if="!isMobile">
      <Ep2024PollsInteractiveChart />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ep-2024-polls-chart',
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
    Ep2024PollsPictureChart: () => import('~/components/ep-2024/ep-2024-polls-picture-chart.vue'),
    Ep2024PollsInteractiveChart: () => import('~/components/ep-2024/ep-2024-polls-interactive-chart.vue')
  }
}
</script>

<style scoped>
#image-wrapper {
  min-height: 40vh;
}
</style>