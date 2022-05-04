<template>
  <div>
    <h3>
      Šance na výhru ve volbách 
      <small>dle sázkových kanceláří 
        <span class="fs-5 fw-bolder">{{ date }}</span>
      </small>
    </h3>

    <div class="container">
      <div class="row">
        <div v-for="(candidate, i) in candidates" :key="i" class="col-xl-3 col-lg-4 col-sm-6">
          <div class="card text-center mb-2">
            <h4 class="card-header card-title">{{ candidate.family_name }} <small>{{candidate.other_names}}</small></h4>
            <div class="card-body">
              <div class="number fs-2">{{ candidate.perc_floor }}<small v-if="candidate.perc_floor < 5">.{{ candidate.perc_tens }}</small> %</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import candidates from '@/assets/data/president/president_current_odds.json'
  import last_date from '@/assets/data/president/president_current_odds_date.json'

  export default {
    data: function() {
      return {
        candidates,
        date: new Date(last_date[0]['date']).toLocaleDateString('cs')
      }
    }
  }
</script>
