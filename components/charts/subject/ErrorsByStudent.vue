<template>
  <div
    class="flex flex-col items-center justify-start w-full col-start-2 col-end-3 gap-2 card text-gray-700"
  >
    <p class="w-full pl-2 text-xl font-bold text-left">
      Errores cometidos por alumnos
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
            horizontal: true,
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
      students: {},
    }
  },
  watch: {
    subject(newValue, oldValue) {
      const serie = {
        name: 'Errores',
        data: [],
      }
      this.students = newValue.students

      newValue.markers.forEach((marker) => {
        if (this.students[parseInt(marker.user_id)].errors === undefined) {
          this.students[parseInt(marker.user_id)].errors = 0
        }
        this.students[parseInt(marker.user_id)].errors++
      })

      // sort students by attribute
      this.students = Object.fromEntries(
        Object.entries(this.students).sort(([, a], [, b]) => {
          return a.errors - b.errors
        })
      )

      this.students = Object.values(this.students)

      this.students.sort(function (a, b) {
        if (a.errors > b.errors) {
          return -1
        }
        if (a.errors < b.errors) {
          return 1
        }
        return 0
      })

      Object.values(this.students).forEach((student) => {
        serie.data.push({
          x: `${student.name} ${student.surname} ${student.surname2}`,
          y: student.errors,
        })
      })
      this.$refs.chart.updateOptions({
        series: [serie],
      })
    },
  },
}
</script>
