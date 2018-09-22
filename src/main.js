import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tiny-slider/dist/tiny-slider.css'
import './assets/main.less'
import  {ancorScroll} from './assets/scripts'

import Vue from 'vue'
import App from './App.vue'

import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
Vue.use(VModal)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

ancorScroll();