import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Collapse } from 'bootstrap-vue/es/components'

Vue.config.productionTip = false

Vue.use(Collapse)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
