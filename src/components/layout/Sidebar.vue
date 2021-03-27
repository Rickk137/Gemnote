<template>
  <div
    class="flex flex-col bg-primary text-white flex-shrink-0 pt-20 pb-10 fixed h-full z-50 transition duration-200 transform md:transform-none"
    :class="{ '-translate-x-full': !drawer }"
  >
    <img
      width="20"
      src="@/assets/img/close.svg"
      class="absolute top-5 right-5 md:hidden"
      @click="toggleDrawer"
    />
    <div class="px-16">
      <img class="max-w-full" src="@/assets/img/logoBig.png" width="170" />

      <p class="mt-9 mb-7">Ashley Wong</p>

      <div class="w-full bg-white h-0.5 opacity-25 rounded-lg"></div>
    </div>

    <ul class="flex-col mt-4">
      <li
        class="hover:border-white border-l-2 border-transparent transition duration-200 transition-colors"
        :class="{ 'border-white': $route.path === link.route }"
        v-for="(link, i) in links"
        :key="i"
      >
        <router-link class="py-2.5 px-16 block" :to="link.route">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import links from "@/constants/links.js";

export default {
  data() {
    return {
      open: true,
    };
  },
  computed: {
    ...mapState(["drawer"]),
    links() {
      return links;
    },
  },
  methods: {
    ...mapActions(["toggleDrawer"]),
  },
};
</script>

<style lang="scss" scoped></style>
