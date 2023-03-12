<template>
  <div>
    <div class="row justify-content-center pt-2">
      <div class="col-md-4">
        <NuxtLink to="/">
          <img src="~/assets/image/psp_thumbnail.svg" class="image" />
          <span class="text-image">Sněmovna 2021-2025</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  filter: grayscale(80%);
}
.image:hover {
  filter: grayscale(0%);
}

/* media queries */
.image {
  /* min-width: 100%; */
  width: 100%;
  display: none;
}


@media (min-width: 666px) {
  .image {
    display: block;
  }
  .text-image {
    display: none;
  }
}
 
</style>