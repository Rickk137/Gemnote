<template>
  <Card>
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
</template>

<script>
import Card from "@/components/common/Card";

export default {
  components: {
    Card,
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
