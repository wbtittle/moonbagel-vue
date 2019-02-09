import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueTimers from 'vue-timers'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueTimers)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
