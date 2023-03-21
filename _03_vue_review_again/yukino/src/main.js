import Vue from 'vue'
import App from './App.vue'
import {hunhe01} from "@/mixin/mixin";

Vue.config.productionTip = false

// Vue.mixin(hunhe01)

new Vue({
  render: h => h(App),
  // beforeCreate() {
  //   Vue.prototype.$bus = this
  // }
}).$mount('#app')
