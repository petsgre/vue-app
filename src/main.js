import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue()

new Vue({
  render: h => h(App),
  created() {
    // console.log(123);
  }
}).$mount("#app");
