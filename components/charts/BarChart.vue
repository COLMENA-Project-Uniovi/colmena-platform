<template>
  <div>
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      series: [
        {
          name: 'IR',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'TPP',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chartOptions: {
        colors: ['#5273C2', '#F5A210'],
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.2,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    }
  },
}
</script>
