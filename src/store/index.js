import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const UPDATE_NAME = "UPDATE_NAME";
const ADD_COUNT = "ADD_COUNT";

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "xc"
  },
  getters: {
    getName: state => {
      return `zx: ${state.name}`;
    }
  },
  mutations: {
    [UPDATE_NAME](state, name) {
      state.name = name;
    },
    [ADD_COUNT](state) {
      state.count = state.count++;
    }
  },
  actions: {
    updateName({ commit }, name) {
      console.log("action2");
      commit(UPDATE_NAME, name);
      setTimeout(() => {
        commit(UPDATE_NAME, name + 1);
      }, 2000);
    },
    hookBefore({ dispatch, commit }) {
      console.log("aciton1");
      commit(ADD_COUNT);
      dispatch("updateName", "nnnn");
    }
  }
});

export default store;
