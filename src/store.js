import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './store/product'
import cartModules from './store/cart'
import alertModules from './store/alert'
import orderModules from './store/order'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  actions: {
    updateLoading (context, payload) {
      context.commit('LOADING', payload)
    }
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  modules: {
    productsModules,
    cartModules,
    alertModules,
    orderModules
  }
})
