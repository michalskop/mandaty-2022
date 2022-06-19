<template>
  <div>
    <header class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand h1" href="/">Mandáty.cz<small class="d-none d-sm-inline"> váš prst na tepu doby</small></a>
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
            ...
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
            <li><button class="dropdown-item" type="button"><NuxtLink to="/">Prezidentské volby 2023</NuxtLink></button></li>
            <li><button class="dropdown-item" type="button"><NuxtLink to="/snemovna">Sněmovna 2021-2025</NuxtLink></button></li>
            <li><button class="dropdown-item" type="button"><NuxtLink to="/archiv">Archiv</NuxtLink></button></li>
          </ul>
        </div>
      </div>
    </header>
    
  </div>
</template>