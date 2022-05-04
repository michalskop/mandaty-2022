<template>
  <div>
    <h3>
      Vývoj šance na výhru ve volbách 
      <small>dle sázkových kanceláří 
        <!-- <span class="fs-5 fw-bolder">{{ date }}</span> -->
      </small>
    </h3>
    <div class="chart-wrapper">
    <v-chart class='chart' :option="option" />
    </div>
  </div>
</template>

<script>
// https://github.com/ds300/patch-package
// https://github.com/floating-ui/floating-ui/issues/1407
// https://v3.nuxtjs.org/guide/going-further/esm/

import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  ToolboxComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  SVGRenderer,
  LineChart,
  ToolboxComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
import candidates from '@/assets/data/president/president_odds.json'


export default {
  name: "Prezident 2023",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "roma"
  },
  data() {
    let series = []
    candidates.forEach(d => {
      series.push({
        type: 'line',
        name: d.name,
        data: d.data
      })
    })
    return {
      option: {
        title: {
          text: 'Prezident 2023'
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          // Try 'horizontal'
          orient: 'vertical',
          right: 0,
          type: 'scroll'
          // top: 'center'
        },
        grid: {
          right: 150,
        },
        xAxis: {
          type: 'time',
          // data: [1, 2, 5, 19], //
          // data: data['date'],
          axisLabel: {
            formatter: this.datacs
          }
        },
        yAxis:{
          type: 'value',
          axisLabel: {
            formatter: "{value} %"
          }
        },
        series: series,
      }
    };
  },
  methods: {
     datacs: function(isod) {
        const d = new Date(isod)
        return d.toLocaleDateString('cs-CZ', {dateStyle: 'short'})
      }
  }
};
</script>

<style scoped>
.chart-wrapper {
  min-height: 50vh;
}
.chart {
  height: 50vh;
  width: 100%;
}
</style>

<style>
body {
  margin: 0;
}
</style>