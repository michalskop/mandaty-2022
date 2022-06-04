<template>
  <div>
    <Header />
    <slot />
    <hr />
    <Heroes />
    <Darujme />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/united/bootstrap.min.css"
        }
      ]
    }
  }
}
</script>