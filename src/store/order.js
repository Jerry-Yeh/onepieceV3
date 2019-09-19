import axios from 'axios'

export default {
  strict: true,
  namespaced: true,
  state: {
    order: {
      user: {}
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
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
<<<<<<< HEAD
    ORDER (state, payload) {
      state.order = payload
    }
  }
}
=======
    ORDER(state, payload) {
      state.order = payload
    }
  },
}
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
