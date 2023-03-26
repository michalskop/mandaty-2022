<template>
  <div>
    <h3>Počet mandátů <small>s odhadem chyby</small> <span class="badge">{{ date }}</span> </h3>
    <div class="container">
      <div class="row">
        <div v-for="(party, i) in seats" :key="i" class="col-xl-3 col-lg-4 col-sm-6">
          <div class="card text-center mb-2">
            <div class="card-header">
              <h4 v-bind:style="{ color: party.color}">{{ party.abbreviation }}</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3"></div>
                <div class="col-6 text-center">
                  <div>
                    <span class="number">{{ party.seats }}</span>
                    <span v-if="party.difference > 0">
                      <span class="text-success">+{{ party.difference }}</span>
                    </span>
                    <span v-else-if="party.difference < 0">
                      <span class="text-danger">{{ party.difference }}</span>
                    </span>
                    <span v-else>
                      <span class="text-muted"></span>
                    </span>
                  </div>
                </div>

                <!-- <div class="difference" >
                  <span v-if="party.difference > 0">
                    <span class="text-success">+{{ party.difference }}</span>
                  </span>
                  <span v-else-if="party.difference < 0">
                    <span class="text-danger">{{ party.difference }}</span>
                  </span>
                  <span v-else>
                    <span class="text-muted">0</span>
                  </span>
                </div> -->
              </div>

              <div class="lo-hi">
                <strong>{{ party.lo }} - {{ party.hi }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  filters: {
    abs(value) {
      return Math.abs(value);
    }
  },

}

</script>

<style scoped>
  h4 {
    padding-left: 2px;
    margin-bottom: 0px;
  }
  .small-badge {
    font-size: 0.33em;
    position: relative;
    bottom: 1em;
  }
  .number {
    font-family: "News Cycle","Arial Narrow Bold",sans-serif;
    font-weight: 700;
    line-height: 1.1;
    color: #000;
    font-size: 3.4em;
  }
  .difference {
    /* float: right; */
    position: relative;
    top: 1.5em;
    /* left: 7em; */
  }
  .lo-hi {
    font-size: 1.75em;
  }
</style>
