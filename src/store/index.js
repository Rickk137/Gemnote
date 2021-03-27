import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
  },
  mutations: {
    SET_DRAWER(state, drawer) {
      state.drawer = drawer;
      if (drawer) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
    },
  },
  actions: {
    toggleDrawer({ state, commit }) {
      commit("SET_DRAWER", !state.drawer);
    },
  },
  modules: {},
});
