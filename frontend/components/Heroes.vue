<template>
  <div class="">
    <div class="container alert alert-success">
      <h3 class="p-4">❤️ <small>Tento projekt vznikl jen díky podpoře:</small></h3>
      <div class="d-flex flex-row flex-wrap justify-content-around">
        <div v-for="(supporter, index) in supporters" :key="index" class="card p-2 m-2" :class="bgClass(supporter.date)">
            <h6 :class="textClass(supporter.date)">{{ supporter['given_name'] }} {{ supporter['family_name'] }}</h6>
        </div>
      </div>
      <div class="mt-5">
        <a href="https://www.darujme.cz/projekt/1200738" target="_blank">
          <h4 class="outlink">Buďte jako oni, podpořte další rozvoj Mandáty.cz</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data: function () {
        return {
            supporters: [],
            url_darujme: "https://projects.kohovolit.eu/api/?projectId=1200738"
        }
    },
    mounted () {
        var $this = this
        fetch (this.url_darujme)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            $this.supporters = response.reverse().filter( function (item) {
                return item.last
            })
        })
    },
    methods: {
        diffDays: function (a, b) {
            return Math.ceil(Math.abs(a - b) / (1000 * 3600 * 24))
        },
        bgClass: function(isoDate) {
            var aa = Date.parse(isoDate)
            var b = new Date()
            var bb = b.getTime()
            if (this.diffDays(aa, bb) > 540) {
                return "bg-light"
            } else {
                if (this.diffDays(aa, bb) > 270) {
                    return "bg-secondary"
                } else {
                    return "bg-warning"
                }
            }
        }
        ,
        textClass: function(isoDate) {
            var aa = Date.parse(isoDate)
            var b = new Date()
            var bb = b.getTime()
            if (this.diffDays(aa, bb) > 540) {
                return "text-secondary"
            } else {
                if (this.diffDays(aa, bb) > 270) {
                    return "text-light"
                } else {
                    return "text-dark"
                }
            }
        }
    }
}
</script>

<style scoped>
    .outlink {
        text-decoration: underline;
    }
</style>
