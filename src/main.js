import Vue from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

import App from "./App.vue"
import store from "./store"

new Vue({
  store,
  render: (h) => h(App),
  created() {},
}).$mount("#app")
