<template>
  <div>
    <div ref="chartRef"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';


export default defineComponent({
  name: 'MyChartComponent',

  setup() {

    const chartRef = ref()

    const plotChart = (Plotly, data) => {
      const fig = {}

      const x = data.middle_dates
      const x_rev = x.slice().reverse()

      // Loop through each column of mu, lo, and hi
      Object.keys(data.mu).forEach((name) => {
        // Get the color for the column
        const color = getColor(name, data)

        // Add the lo and hi traces
        const hiSame = data.hi[name]
        const loRev = data.lo[name].slice().reverse()
        fig[name + '_fill'] = {
          x: x.concat(x_rev),
          y: hiSame.concat(loRev),
          fill: 'toself',
          fillcolor: getRGBA(color, 0.05),
          line: { color: 'rgba(255, 255, 255, 0)', shape: 'spline' },
          mode: 'lines',
          name: name,
          type: 'scatter',
          showlegend: false,
          legendgroup: name
        }

        // Add the mu trace
        fig[name] = {
          x: x,
          y: data.mu[name],
          mode: 'lines',
          name: `${name}: ${Math.round(data.mu[name][data.mu[name].length - 1] * 100)}%`,
          line: { color: color, width: 7, shape: 'spline' },
          type: 'scatter',
          legendgroup: name
        }

        // Add the allvalues trace
        fig[name + '_markers'] = {
          x: x,
          y: data.allvalues[name],
          mode: 'markers',
          name: name,
          marker: {
            color: getRGBA(color, 0.25),
            size: 15
          },
          type: 'scatter',
          showlegend: false,
          legendgroup: name
        }

      })

      // Add the limit trace
      fig['limit'] = {
        x: [x[0], data.election_date],
        y: [0.05, 0.05],
        mode: 'lines',
        name: '5% limit',
        line: { color: '#FF0000', width: 3, dash: 'dot' },
        type: 'scatter',
        hoverinfo: 'skip',
        fill: 'tozeroy',
        fillcolor: 'rgba(255, 0, 0, 0.05)',
        // showlegend: false
      }

      // Set the layout options
      const layout = {
        xaxis: {
          tickformat: '%-d.%-m.%y',
          range: [x[0], data.election_date]
        },
        yaxis: { tickformat: ',.0%' },
        autosize: false,
        width: 1200,
        height: 600,
        margin: {
          l: 50,
          r: 20,
          b: 50,
          t: 20,
          pad: 0
        },
        template: 'plotly_white',
        hovermode: 'closest',
        rangemode: 'tozero'
      }

      // Set the config options
      const config = {
        displaylogo: false,
        // responsive: true,
        // modeBarButtonsToRemove: ['sendDataToCloud', 'hoverCompareCartesian', 'hoverClosestCartesian', 'toggleSpikelines']
      }

      // Add the data and layout to the plot
      const plotData = Object.values(fig)
      Plotly.newPlot(chartRef.value, plotData, layout, config)
      // nextTick(() => {
      //   Plotly.newPlot(chartRef.value, plotData, layout)
      // })
    }

    const getColor = (name, data) => {
      console.log(data)
      try {
        return data.choices.find(c => c.id === name).color
      } catch {
        return '#BBBBBB'
      }
    }

    const htmlToRgbArray = (htmlColor) => {
      const match = htmlColor.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
      if (match) {
        const red = parseInt(match[1], 16);
        const green = parseInt(match[2], 16);
        const blue = parseInt(match[3], 16);
        return [red, green, blue];
      }
      return null;
    }

    const getRGBA = (color, opacity) => {
      const rgba = htmlToRgbArray(color)
      rgba.push(opacity)
      return `rgba(${rgba.join(',')})`
    }

    onMounted(async () => {
      if (process.client) {
        const plotly = await import('plotly.js-dist').then((Plotly) => {
          import ('~/assets/data/psp/data.json').then((result) => {
            let data = result
            plotChart(Plotly, data)
          })
        })
      }
    })

    return {
      chartRef  // <- this is the ref
    }
  }
});
</script>