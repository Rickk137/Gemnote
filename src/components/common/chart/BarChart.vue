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
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
            },
            borderColor: "red",
          },
        ],
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
