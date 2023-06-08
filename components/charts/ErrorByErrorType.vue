<template>
  <div
    class="flex flex-col items-start justify-start w-full col-start-1 col-end-3 gap-4"
  >
    <h2 class="pl-5 text-2xl font-bold">Número total de errores cometidos</h2>
    <div
      class="flex flex-col items-center justify-start w-full text-gray-700 card"
    >
      <apexchart
        ref="chart"
        :options="chartOptions"
        :series="series"
        class="w-full"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
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
    }
  },
  watch: {
    errors(newValue, oldValue) {
      this.init()
    },
  },
  methods: {
    init: function () {
      const serie = {
        name: 'Errores',
        data: [],
      }
      // necestamos errors y makers
      Object.values(this.errors).forEach((error) => {
        serie.data.push({
          x: error.error.name,
          y: error.count,
        })
      })
      this.$refs.chart.updateOptions({
        series: [serie],
      })
    },
  },
}
</script>
