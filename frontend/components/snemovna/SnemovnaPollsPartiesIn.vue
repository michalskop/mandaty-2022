<template>
  <div>
    <h3>Šance na vstup do Sněmovny</h3>
    <div class="table-responsive">
      <table class="table table-hover table-condensed">
        <thead>
          <tr>
            <th v-for="(party, i) in seats" :key="i">{{ party.abbreviation }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(party, i) in seats" :key="i" v-html="formatPercentage(party.in)"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import currentSeats from '~/assets/data/psp/current_seats.json'

export default {
  data: function (){
    return {
      seats: currentSeats['data'],
      date: new Date(currentSeats['date']).toLocaleDateString('cs-CZ')
    }
  },
  methods: {
    formatPercentage(value) {
      value = parseFloat(value)
      console.log
      if (isNaN(value)) return '<&nbsp;1%'; // Handle NaN cases
      if (value > 0.99) return ">&nbsp;99%"
      if (value < 0.03) return "<" + "&nbsp;" + Math.round(Math.ceil(value * 100)) + "%"
      return "~" + "&nbsp;" + Math.round(value * 100) + "%"
    }
  },

}

</script>