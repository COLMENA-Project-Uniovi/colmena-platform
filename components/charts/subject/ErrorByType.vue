<template>
  <div
    class="flex flex-col items-center justify-start w-full gap-2 text-gray-700 card"
  >
    <p class="w-full pl-2 text-xl font-bold text-left">
      Número total de errores cometidos por tipo de error
    </p>

    <apexchart
      ref="chart"
      :options="chartOptions"
      :series="series"
      class="w-full"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  props: {
    subject: {
      type: Object,
      default: () => ({}),
    },
  },
  data: function () {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: '70%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [],
        },
        stroke: {
          show: true,
          width: 2,
        },
        states: {
          hover: {
            filter: {
              type: 'none',
              value: 0.1,
            },
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ['#f4a135'],
      },
      groupBy: 'family',
    }
  },
  watch: {
    subject(newValue, oldValue) {
      const serie = {
        name: 'Errores',
        data: [],
      }
      Object.keys(this.subject.errors).forEach((key) => {
        const markers = this.subject.markers.filter((marker) => {
          return parseInt(marker.error_id) === parseInt(key)
        })

        serie.data.push({
          x: this.subject.errors[key],
          y: markers.length,
        })
      })
      this.$refs.chart.updateOptions({
        series: [serie],
      })
    },
    groupBy(newValue, oldValue) {
      const serie = {
        name: 'Errores',
        data: [],
      }

      Object.keys(this.subject.errors).forEach((key) => {
        const markers = this.subject.markers.filter((marker) => {
          return parseInt(marker.error_id) === parseInt(key)
        })

        serie.data.push({
          x: this.subject.errors[key],
          y: markers.length,
        })
      })

      this.$refs.chart.updateOptions({
        series: [serie],
      })
    },
  },
}
</script>
