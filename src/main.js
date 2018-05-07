import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data
import '././utils/request'

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.prototype.$http = axios
// axios.defaults.baseURL = process.env.BASE_API
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*'

new Vue({
  el: '#app',
  router,
  store,
  axios,
  i18n,
  template: '<App/>',
  components: { App }
})

