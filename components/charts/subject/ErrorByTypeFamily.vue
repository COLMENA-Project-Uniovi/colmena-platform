<template>
  <div
    class="flex flex-col items-center justify-start w-full gap-2 text-gray-700 card"
  >
    <p class="w-full pl-2 text-xl font-bold text-left">
      Número total de errores cometidos
    </p>

    <div class="relative flex w-full col-start-1 col-end-3 gap-4">
      <div class="flex items-center justify-start w-full gap-2">
        <p class="px-2 text-sm font-semibold">Agrupar por:</p>
        <select
          v-model="groupBy"
          class="bg-white shadow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type"
        >
          <option value="family" selected>Familia de error</option>
          <option value="type" selected>Tipo de error</option>
        </select>
      </div>
    </div>

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
      Object.keys(newValue.family_errors).forEach((key) => {
        const markers = newValue.markers.filter((marker) => {
          return parseInt(marker.family_error.id) === parseInt(key)
        })

        serie.data.push({
          x: newValue.family_errors[key],
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
      if (newValue === 'family') {
        Object.keys(this.subject.family_errors).forEach((key) => {
          const markers = this.subject.markers.filter((marker) => {
            return parseInt(marker.family_error.id) === parseInt(key)
          })

          serie.data.push({
            x: this.subject.family_errors[key],
            y: markers.length,
          })
        })
      } else {
        Object.keys(this.subject.errors).forEach((key) => {
          const markers = this.subject.markers.filter((marker) => {
            return parseInt(marker.error_id) === parseInt(key)
          })

          serie.data.push({
            x: this.subject.errors[key],
            y: markers.length,
          })
        })
      }
      this.$refs.chart.updateOptions({
        series: [serie],
      })
    },
  },
}
</script>
