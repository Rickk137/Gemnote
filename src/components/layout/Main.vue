<template>
  <div>
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
