<template>
  <div class="flex flex-col">
    <h3 class="text-primary text-2xl">Welcome to Gemnote, Ashley!</h3>
    <div class="py-5">
      <div class="flex mb-4">
        <Card class="flex mr-4 flex-1">
          <div>
            Total number of <br />
            orders this month <br />
            <span class="text-3xl mt-4 block"> 2,736 </span>
          </div>
          <div class="bg-gray-300 mx-4 self-stretch" style="width: 1px"></div>

          <div>
            Total number of <br />
            orders this month <br />
            <div class="flex items-end">
              <span class="text-3xl mt-4 block mr-5"> 2,736 </span>
              <button class="btn">View orders</button>
            </div>
          </div>
        </Card>

        <Card class="flex flex-1">
          <div>
            Current inventory <br />
            <div class="flex items-end">
              <span class="text-3xl mt-4 block mr-5"> 400 </span>
              <button class="btn">View orders</button>
            </div>
          </div>
        </Card>
      </div>

      <Card class="w-full">
        <h4 class="text-primary">Trending gifts in your store</h4>
        <div class="flex items-center trending-items overflow-x-auto mt-4">
          <img src="@/assets/img/item1.png" />
          <img src="@/assets/img/item2.png" />
          <img src="@/assets/img/items.png" />
          <img src="@/assets/img/item3.png" />
          <button class="btn px-10">Send a gift</button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/common/Card";

export default {
  name: "Home",
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
