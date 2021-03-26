<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar />
    <div class="py-20 px-24 w-full container max-w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "../Sidebar";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
