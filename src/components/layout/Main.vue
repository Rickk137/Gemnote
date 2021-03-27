<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar class="w-full md:w-80" />
    <div class="container pl-0 md:pl-80">
      <div class="py-6 md:py-20 px-6 md:px-24 w-full">
        <img
          width="25"
          src="@/assets/img/hamburger.svg"
          class="absolute top-2 right-2 md:hidden"
          @click="toggleDrawer"
        />
        <router-view></router-view>
      </div>
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
