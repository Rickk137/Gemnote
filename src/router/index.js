import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainLayout from "../components/layout/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [{ path: "/", component: Home, name: "home" }],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
