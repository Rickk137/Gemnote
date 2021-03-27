<template>
  <Card>
    <div
      class="flex items-start justify-between trending-items overflow-x-auto mt-4 mb-4"
    >
      <h4 class="text-primary">Total gifts this year</h4>
      <button class="btn px-10">Download report</button>
    </div>
    <div class="overflow-auto">
      <BarChart style="min-width: 500px" :chartdata="chartdata" />
    </div>
  </Card>
</template>

<script>
import BarChart from "@/components/common/chart/BarChart";
import Card from "@/components/common/Card";
import { totalGifts } from "@/constants/sampleData.js";

export default {
  components: {
    BarChart,
    Card,
  },
  data() {
    return {
      chartdata: {
        labels: totalGifts.map((item) => item.label),
        datasets: [
          {
            label: "Total gifts this year",
            barThickness: 25,
            backgroundColor: "rgba(0,0,0,0.2)",
            data: totalGifts.map((item) => item.value),
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
