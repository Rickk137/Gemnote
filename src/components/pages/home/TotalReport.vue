<template>
  <Card class="flex flex-wrap flex-1">
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
</template>

<script>
import Card from "@/components/common/Card";

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped></style>
