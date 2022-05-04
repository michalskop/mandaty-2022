<template>
  <div>
    <v-chart class='chart' :option="option" />
  </div>
</template>

<script>
// https://github.com/ds300/patch-package
// https://github.com/floating-ui/floating-ui/issues/1407
// https://v3.nuxtjs.org/guide/going-further/esm/

import * as echarts from "echarts"
// import { use } from "echarts/core";
// import { SVGRenderer } from "echarts/renderers";
// import { LineChart } from "echarts/charts";
// import {
//   // XAxisComponent,
//   ToolboxComponent,
//   GridComponent,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
// use([
//   SVGRenderer,
//   LineChart,
//   ToolboxComponent,
//   GridComponent,
//   // XAxisComponent,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// ]);
export default {
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "roma"
  },
  data() {
    return {
      option: {
        title: {
          text: 'President test'
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        // series: series,
        series: [
          {
            type: 'line',
            data: [
              ['2022-01-01', 3],
              ['2022-02-01', 5],
              ['2022-05-01', 1]
            ]
          },
          {
            type: 'line',
            data: [
              ['2022-01-01', 7],
              ['2022-02-01', 2],
              ['2022-05-01', 3]
            ]
          }
        ]
        
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