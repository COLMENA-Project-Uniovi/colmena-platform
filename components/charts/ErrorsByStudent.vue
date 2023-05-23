<template>
  <div
    class="flex flex-col items-center justify-start w-full gap-2 text-gray-700 card"
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
    students: {
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
      studentsAux: [],
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
    }
  },
  watch: {
    students(newValue, oldValue) {
      this.init()
    },
    markers(newValue, oldValue) {
      this.init()
    },
  },
  methods: {
    init: function () {
      const serie = {
        name: 'Errores',
        data: [],
      }

      this.studentsAux = this.students

      this.markers.forEach((marker) => {
        if (this.students[parseInt(marker.user_id)].errors === undefined) {
          this.studentsAux[parseInt(marker.user_id)].errors = 0
        }
        this.studentsAux[parseInt(marker.user_id)].errors++
      })

      // sort students by attribute
      this.studentsAux = Object.fromEntries(
        Object.entries(this.students).sort(([, a], [, b]) => {
          return a.errors - b.errors
        })
      )

      this.studentsAux = Object.values(this.studentsAux)

      this.studentsAux.sort(function (a, b) {
        if (a.errors > b.errors) {
          return -1
        }
        if (a.errors < b.errors) {
          return 1
        }
        return 0
      })

      Object.values(this.studentsAux).forEach((student) => {
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
