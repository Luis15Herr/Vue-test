import Vue from 'vue'
import App from './components/App.vue'
import vueMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(vueMoment)

new Vue({
  el: '#app',
  render: h => h(App)
})
