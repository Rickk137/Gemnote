<template>
  <div
    class="flex flex-col bg-primary w-full md:w-64 text-white flex-shrink-0 py-10"
  >
    <div class="px-12">
      <img class="w-full" src="@/assets/img/logoBig.png" />

      <p class="mt-7 mb-6">Ashley Wong</p>

      <div class="w-full bg-white h-0.5 opacity-25 rounded-lg"></div>
    </div>

    <ul class="flex-col mt-4">
      <li
        class="hover:bg-white hover:bg-opacity-30 transition transition-colors"
        v-for="(link, i) in links"
        :key="i"
      >
        <router-link :to="link.route" class="py-2.5 px-12 block">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      links: [
        {
          title: "Dashboard",
          route: "/",
        },
        {
          title: "Orders",
          route: "/orders",
        },
        {
          title: "Send a gift",
          route: "/send",
        },
        {
          title: "Users",
          route: "/users",
        },
        {
          title: "Integrations",
          route: "/integration",
        },
        {
          title: "Settings",
          route: "/setting",
        },
        {
          title: "Logout",
          route: "/logout",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
