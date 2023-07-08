import { createStore } from "vuex";

export default createStore({
  state: {
    tabs: {
      index: 0,
    },
    authenticated: true,
    screenSize: 0,
  },
  getters: {},
  mutations: {
    setAuth(state, payload) {
      state.authenticated = payload;
    },
    setScreenSize(state, payload) {
      state.screenSize = payload;
    }
  },
  actions: {},
  modules: {},
});
