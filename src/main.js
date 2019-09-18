// 官方元件
import Vue from 'vue'

// 第三方套件
import axios from 'axios' // 主要的 AJAX 套件
import VueAxios from 'vue-axios' // 將 axios 轉為 Vue 的套件
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import jQuery from 'jquery'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import Vuex from 'vuex'

// 自定義元件
import App from './App.vue'
import router from './router'
import store from './store'
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
window.$ = window.jQuery = jQuery
axios.defaults.withCredentials = true // 導航守衛
Vue.filter('currency', currencyFilter) // filters/currency
Vue.filter('date', dateFilter)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/signin'
        })
      }
    })
  } else {
    next()
  }
})
