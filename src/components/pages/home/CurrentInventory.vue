<template>
  <Card class="flex flex-1 flex-wrap">
    <DoughnutChart
      :chartdata="currentInventory"
      :width="100"
      :height="100"
      class="mr-4"
    />
    <div class="flex flex-col">
      <span class="mb-2"> Current inventory <br /> </span>
      <div class="flex items-end">
        <span class="text-3xl mt-4 block mr-5"> 400 </span>
        <button class="btn">View orders</button>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/common/Card";
import DoughnutChart from "@/components/common/chart/DoughnutChart";

export default {
  components: {
    Card,
    DoughnutChart,
  },
  data() {
    return {
      currentInventory: {
        labels: ["inv1", "inv2"],
        datasets: [
          {
            label: "Total gifts this year",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [10, 3],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
