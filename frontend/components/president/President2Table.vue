<template>
  <div class="container">
    <h3>
      Zveřejněné průzkumy
      <small>2. kolo</small>
    </h3>

    <div class="table-responsive">
      <table class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th></th>
            <th>Datum&nbsp;<small>(střed)</small></th>
            <th>Kandidát/ka1</th>
            <th>Kandidát/ka 2</th>
            <th>% 1</th>
            <th>% 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(poll, i) in polls" :key="i">
            <th>{{ poll['pollster:id'] }}</th>
            <td>{{ formatDate(poll['middle_date']) }}</td>
            
            <td v-if="poll['value1'] >= poll['value2']">{{ poll['choice:id1'] }}</td>
            <td v-else>{{ poll['choice:id2'] }}</td>

            <td v-if="poll['value1'] >= poll['value2']">{{ poll['choice:id2'] }}</td>
            <td v-else>{{ poll['choice:id1'] }}</td>

            <td v-if="poll['value1'] >= poll['value2']"><DecNumber :decNumber="poll['value1']"></DecNumber></td>
            <td v-else><DecNumber :decNumber="poll['value2']"></DecNumber></td>

            <td v-if="poll['value1'] >= poll['value2']"><DecNumber :decNumber="poll['value2']"></DecNumber></td>
            <td v-else><DecNumber :decNumber="poll['value1']"></DecNumber></td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
  import polls from '@/assets/data/president/president_2_polls_table.json'

  export default {
    data: function() {
      return {
        polls,
      }
    },
    methods: {
      formatDate (d) {
        return new Date(d).toLocaleDateString('cs')
      }
    }
  }
</script>