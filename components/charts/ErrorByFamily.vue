<template>
  <div
    class="flex flex-col items-center justify-start w-full gap-2 text-gray-700 card"
  >
    <p class="w-full pl-2 text-xl font-bold text-left">
      Número total de errores cometidos por familia de error
    </p>

    <apexchart
      ref="donut"
      :options="chartOptions"
      :series="series"
      class="w-[80%]"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  props: {
    families: {
      type: Object,
      default: () => ({}),
    },
    markers: {
      type: Object,
      default: () => ({}),
    },
  },
  data: function () {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: [],
      },
    }
  },
  watch: {
    families(newValue, oldValue) {
      this.init()
    },
  },
  methods: {
    init: function () {
      const series = []
      const labels = []
      Object.keys(this.families).forEach((key) => {
        const markers = this.markers.filter((marker) => {
          return parseInt(marker.family_error.id) === parseInt(key)
        })

        labels.push(this.families[key])
        series.push(markers.length)
      })
      this.chartOptions.labels = labels
      this.$refs.donut.updateOptions({
        series,
        labels,
      })
    },
  },
}
</script>
