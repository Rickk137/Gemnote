<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar class="w-full md:w-80" />
    <div
      class="py-6 md:py-20 px-6 md:px-24 w-full container max-w-full ml-0 md:ml-80"
    >
      <img
        width="25"
        src="@/assets/img/hamburger.svg"
        class="absolute top-2 right-2 md:hidden"
        @click="toggleDrawer"
      />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Sidebar from "./Sidebar";

export default {
  components: {
    Sidebar,
  },
  methods: {
    ...mapActions(["toggleDrawer"]),
  },
};
</script>

<style lang="scss" scoped></style>
