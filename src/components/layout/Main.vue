<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar />
    <div class="p-20 w-full">
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
