import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight
  },
  mutations: {

  },
  actions: {

  },
  plugins: [],
});