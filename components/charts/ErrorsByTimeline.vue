<template>
  <div
    class="flex flex-col items-center justify-start w-full gap-2 text-gray-700 card"
  >
    <p class="w-full pl-2 text-xl font-bold text-left">
      Errores cometidos a lo largo de la sesión
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
    session: {
      type: Object,
      default: () => ({}),
    },
    errors: {
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
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#000'],
          },
        },
        xaxis: {
          type: 'category',
          categories: [],
        },
        colors: ['#f4a135'],
      },
    }
  },
  watch: {
    session(newValue, oldValue) {
      this.init()
    },
  },
  methods: {
    init: function () {
      console.log('this.session :>> ', this.session)
      // hora de inicio de la sesión
      const startTime = this.session
      // hora de fin de la sesión
      // diferencia en minutos
      // generar array de minutos
      // const categories = this.sessions.map((session) => {
      //   return session.name
      // })

      // const sessionsIds = this.sessions.map((session) => {
      //   return session.id
      // })

      // const series = []

      // Object.keys(this.errors).forEach((errorId) => {
      //   const serie = {
      //     name: this.errors[errorId],
      //     data: [],
      //   }

      //   sessionsIds.forEach((sessionId) => {
      //     const count = this.markers.filter((marker) => {
      //       return (
      //         parseInt(marker.error_id) === parseInt(errorId) &&
      //         parseInt(marker.session_id) === parseInt(sessionId)
      //       )
      //     }).length
      //     serie.data.push(count)
      //   })

      //   series.push(serie)
      // })

      // this.$refs.chart.updateOptions({
      //   series,
      //   xaxis: {
      //     categories,
      //   },
      // })
    },
  },
}
</script>
