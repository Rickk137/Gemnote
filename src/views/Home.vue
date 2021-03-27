<template>
  <div class="flex flex-col">
    <h3 class="text-primary text-3xl mb-4">Welcome to Gemnote, Ashley!</h3>
    <div class="py-5">
      <div class="flex flex-col md:flex-row mb-4">
        <Card class="flex flex-wrap mr-0 md:mr-4 mb-4 md:mb-0 flex-1">
          <div class="flex flex-1 flex-col justify-between mb-4 md:mb-0">
            Total number of <br />
            orders this month <br />
            <span class="text-4xl mt-4 block"> 2,736 </span>
          </div>
          <div class="flex-1 self-stretch hidden md:inline-block">
            <div class="bg-gray-300 mx-auto h-full" style="width: 1px"></div>
          </div>

          <div class="flex flex-1 flex-col justify-between">
            Total number of <br />
            orders this month <br />
            <div class="flex items-end">
              <span class="text-4xl mt-4 block mr-5"> 2,736 </span>
              <button class="btn">View orders</button>
            </div>
          </div>
        </Card>

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
      </div>

      <Card class="w-full mb-4">
        <h4 class="text-primary">Trending gifts in your store</h4>
        <div class="flex items-center flex-col md:flex-row">
          <div
            class="flex flex-1 items-center trending-items overflow-x-auto mt-4 mb-4 md:mb-0 mr-4"
          >
            <img src="@/assets/img/item1.png" />
            <img src="@/assets/img/item2.png" />
            <img src="@/assets/img/items.png" />
            <img src="@/assets/img/item3.png" />
          </div>
          <button class="btn wide">Send a gift</button>
        </div>
      </Card>

      <Card class="w-full">
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
    </div>
  </div>
</template>

<script>
import Card from "@/components/common/Card";
import BarChart from "@/components/common/chart/BarChart";
import DoughnutChart from "@/components/common/chart/DoughnutChart";
import SampleData from "@/constants/sample.js";

export default {
  name: "Home",
  components: {
    Card,
    BarChart,
    DoughnutChart,
  },
  data() {
    return {
      chartdata: {
        labels: SampleData.map((item) => item.label),
        datasets: [
          {
            label: "Total gifts this year",
            barThickness: 25,
            backgroundColor: "rgba(0,0,0,0.2)",
            data: SampleData.map((item) => item.value),
          },
        ],
      },
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

<style lang="scss" scoped>
.trending-items {
  img {
    max-height: 160px;
  }
}
</style>
