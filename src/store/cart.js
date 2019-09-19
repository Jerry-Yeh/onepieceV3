import axios from 'axios'
import $ from 'jquery'

export default {
  strict: true,
  namespaced: true,
  state: {
    status: {
      loadingCart: ''
    },
    cart: {
      carts: []
    }
  },
  actions: {
    // 取得討伐列表
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data)
        context.commit('LOADING', false, { root: true })
      })
    },
    // 刪除討法列表項目
    deleteCartItem (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      axios.delete(api).then((response) => {
        context.dispatch('alertModules/updateMessage', {
          message: '成功刪除懸賞犯',
          status: 'success'
        }, { root: true })
        context.dispatch('getCart')
      })
    },
    // 加到討伐列表
    addtoCart (context, { id, qty }) {
      const cartApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        'product_id': id,
        qty
      }

      axios.get(cartApi).then((response) => {
        let filterArray = response.data.data.carts.filter(item => {
          return item.product_id === id
        })
        if (filterArray.length === 0) {
          context.commit('STATUS_LOADINGCART', id)
          axios.post(api, { data: cart }).then((response) => {
            $('#productModal').modal('hide')
            context.commit('STATUS_LOADINGCART', '')
            // this.$bus.$emit('message:push', '成功加入討伐列表', 'success')
            context.dispatch('alertModules/updateMessage', {
              message: '成功加入討伐列表',
              status: 'success'
            }, { root: true })
          })
        } else {
          // this.$bus.$emit('message:push', '此懸賞犯已在討伐列表中', 'danger')
          context.dispatch('alertModules/updateMessage', {
            message: '此懸賞犯已在討伐列表中',
            status: 'danger'
          }, { root: true })
          $('#productModal').modal('hide')
        }
      })
    }
  },
  mutations: {
    STATUS_LOADINGCART (state, payload) {
      state.status.loadingCart = payload
    },
    CART (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    totalPrice: state => {
      let carts = state.cart.carts
      let total = 0

      if (carts.length > 0) {
        for (let i = 0; i < carts.length; i++) {
          total += carts[i].final_total
        };
      }
      return total
    }
  }
}
