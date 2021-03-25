<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <router-view></router-view>
    <Sidebar />
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
