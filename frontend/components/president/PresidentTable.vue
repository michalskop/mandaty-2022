<template>
  <div class="container">
    <h3>
      Zveřejněné průzkumy
      <small>1. kolo</small>
    </h3>

    <div class="table-responsive">
      <table class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th></th>
            <th>Datum&nbsp;<small>(střed)</small></th>
            <th v-for="(candidate, index) in candidates" :key="index"><small>{{ candidate }}</small></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(poll, i) in polls" :key="i">
            <th>{{ poll['pollster:id'] }}</th>
            <td>{{ formatDate(poll['middle_date']) }}</td>
            <td v-for="(candidate, index) in candidates" :key="index">
              <DecNumber :decNumber="poll[candidate]"></DecNumber>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
  import polls from '@/assets/data/president/president_polls_table.json'
  import candidates from '@/assets/data/president/president_polls_table_candidates.json'

  export default {
    data: function() {
      return {
        polls,
        candidates: candidates[0]['names']
      }
    },
    methods: {
      formatDate (d) {
        return new Date(d).toLocaleDateString('cs')
      }
    }
  }
</script>