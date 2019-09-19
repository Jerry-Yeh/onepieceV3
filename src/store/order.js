import axios from 'axios'

export default {
  strict: true,
  namespaced: true,
  state: {
    order: {
      user: {}
    }
  },
  actions: {
    getOrder (context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('ORDER', response.data.order)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    ORDER (state, payload) {
      state.order = payload
    }
  }
}
