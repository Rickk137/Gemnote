<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "#D2D2D2",
              lineWidth: 1.5,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              padding: 20,
              fontSize: 13,
              fontStyle: "bold",
            },
            borderWidth: 4,
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "#D2D2D2",
              lineWidth: 1.5,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
      },

      layout: {
        padding: {
          left: 20,
          right: 10,
          top: 10,
          bottom: 0,
        },
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
