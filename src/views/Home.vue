<template>
  <div class="flex flex-col">
    <h3 class="text-primary text-3xl mb-4">Welcome to Gemnote, Ashley!</h3>
    <div class="py-5">
      <div class="flex flex-col md:flex-row mb-4">
        <TotalReport class="mb-4 md:mb-0 mr-0 md:mr-4" />
        <CurrentInventory />
      </div>

      <TrendingGifts class="w-full mb-4" />
      <TotalGifts class="w-full" />
    </div>
  </div>
</template>

<script>
import TotalGifts from "@/components/pages/home/TotalGifts";
import TrendingGifts from "@/components/pages/home/TrendingGifts";
import TotalReport from "@/components/pages/home/TotalReport";
import CurrentInventory from "@/components/pages/home/CurrentInventory";

export default {
  name: "Home",
  components: {
    TotalGifts,
    TrendingGifts,
    TotalReport,
    CurrentInventory,
  },
};
</script>

<style lang="scss" scoped></style>
