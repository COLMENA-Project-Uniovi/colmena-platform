<template>
  <div
    class="flex flex-col items-center justify-start w-full col-start-2 col-end-3 gap-2 text-gray-700 card"
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
    subject(newValue, oldValue) {
      const categories = newValue.sessions.map((session) => {
        return session.name
      })

      const sessionsIds = newValue.sessions.map((session) => {
        return session.id
      })

      const series = []

      Object.keys(newValue.errors).forEach((errorId) => {
        const serie = {
          name: newValue.errors[errorId],
          data: [],
        }

        sessionsIds.forEach((sessionId) => {
          const count = newValue.markers.filter((marker) => {
            return (
              parseInt(marker.error_id) === parseInt(errorId) &&
              parseInt(marker.session_id) === parseInt(sessionId)
            )
          }).length
          serie.data.push(count)
        })

        series.push(serie)
      })

      this.$refs.chart.updateOptions({
        series,
        xaxis: {
          categories,
        },
      })
    },
  },
}
</script>
