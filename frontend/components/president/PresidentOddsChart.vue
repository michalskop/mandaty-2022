<template>
  <div id="image-wrapper">
    <h3>
      Vývoj šance na výhru ve volbách 
      <small>dle sázkových kanceláří 
      </small>
    </h3>
    <img src="~/assets/image/president_odds_history.svg" class="image" />
    <img src="~/assets/image/president_odds_history_small.svg" class="image-small" />
  </div>
</template>

<style scoped>
.image-wrapper {
  min-height: 50vh;
}
.image {
  /* min-width: 100%; */
  width: 100%;
  display: none;
}
.image-small {
  width: 100%;
  display: block;
}

@media (min-width: 666px) {
  .image-small {
    display: none;
  }
  .image {
    display: block;
  }
}

</style>