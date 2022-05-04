<template>
  <ul class="nav nav-pills nav-fill">
    <!-- <span>{{ $route }}</span> -->
    <li class="nav-item">
      <NuxtLink to="/" class="nav-link" aria-current="page">
        Prezident ČR 2023
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="/snemovna" class="nav-link" aria-current="page">
        Sněmovna 2021-2025
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
  color: #bbb;
  pointer-events: none;
}
</style>