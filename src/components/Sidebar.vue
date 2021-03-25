<template>
  <div
    class="flex flex-col bg-primary w-full md:w-64 text-white flex-shrink-0 py-10 px-12"
  >
    <img class="w-full" src="@/assets/logoBig.png" />

    <p class="my-8">Ashley Wong</p>

    <div class="w-full bg-white h-0.5 opacity-25 rounded-lg"></div>

    <ul class="flex-col mt-4">
      <li v-for="(link, i) in links" :key="i">
        <router-link :to="link.route" class="py-2 block">
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
          route: "/",
        },
        {
          title: "Send a gift",
          route: "/",
        },
        {
          title: "Users",
          route: "/",
        },
        {
          title: "Integrations",
          route: "/",
        },
        {
          title: "Settings",
          route: "/",
        },
        {
          title: "Logout",
          route: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
