import Vue from 'vue'
import App from './App.container'
import store from './store'
import { Collapse } from 'bootstrap-vue/es/components'
import vSelect from 'vue-select'
import VueTheMask from 'vue-the-mask'
import money from 'v-money'
import SimpleVueValidation from 'simple-vue-validator'
import Vue2Filters from 'vue2-filters'
import VueCarousel from 'vue-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleDown, faPhone, faFacebookF, faTwitter, faGoogle)

Vue.config.productionTip = false

Vue.use(Collapse)
Vue.use(VueTheMask)
Vue.use(money, {precision: 2})
Vue.use(SimpleVueValidation)
Vue.use(Vue2Filters)
Vue.use(VueCarousel)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
