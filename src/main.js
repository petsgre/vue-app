import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
  created() {
    // console.log(123);
  }
}).$mount("#app");
