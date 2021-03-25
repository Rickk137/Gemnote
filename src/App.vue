<template>
  <div>
    <router-view />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss"></style>
