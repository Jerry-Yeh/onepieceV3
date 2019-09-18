import axios from 'axios'
import $ from 'jquery'

export default {
  namespaced: true,
  state: {
    products: [],
    productsPages: [],
    status: {
      category: '所有罪犯',
      loadingItem: '',
    },
    pagination: '',
    product: {},
    category: ''
  },
  actions: {
    // 取得所有商品
    getProducts (context, product) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products.filter((item) => {
          if (product.category === '最惡世代' || product.title === '蒙其·D·魯夫' || product.title === '羅羅亞·索隆') {
            return item.category === product.category || item.title === '蒙其·D·魯夫' || item.title === '羅羅亞·索隆'
          } else {
            return item.category === product.category
          }
          // return item.category === '草帽海賊團'
        }))
        context.commit('LOADING', false, { root: true })
      })
    },
    // 取得所有分頁商品
    getProductsPages (context, page) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      context.commit('LOADING', true, { root: true })
      if (context.state.status.category === '所有罪犯') {
        axios.get(api).then((response) => {
          context.commit('PRODUCTSPAGES', response.data.products)
          context.commit('LOADING', false, { root: true })
          context.commit('PAGINATION', response.data.pagination)
          $('nav[aria-label="Page navigation example"]').removeClass('d-none')
        })
      } else {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
        axios.get(api).then((response) => {
          context.commit('PRODUCTSPAGES', response.data.products)
          context.commit('LOADING', false, { root: true })
        })
        $('nav[aria-label="Page navigation example"]').addClass('d-none')
      }
    },
    // 取得單一商品詳細資料
    getProduct (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('STATE_LOADINGITEM', id)
      axios.get(api).then((response) => {
        $('#productModal').modal('show')
        context.commit('PRODUCT', response.data.product)
        context.commit('PRODUCT_NUM', 1)
        context.commit('STATE_LOADINGITEM', '')
      })
    },
    // 改變商品項目
    changeCategory (context, category) {
      context.commit('STATE_CATEGORY', category)
      context.dispatch('getProductsPages')
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCTSPAGES (state, payload) {
      state.productsPages = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    STATE_CATEGORY (state, payload) {
      state.status.category = payload
    },
    STATE_LOADINGITEM (state, payload) {
      state.status.loadingItem = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    },
    PRODUCT_NUM (state, payload) {
      state.product.num = payload
    }
  },
  getters: {
    filterProducts (state) {
      let newProducts = ''
      let productsPages = state.productsPages
      if (state.status.category === '所有罪犯') {
        newProducts = productsPages
      } else if (state.status.category === '草帽海賊團') {
        newProducts = productsPages.filter((item) => item.category === '草帽海賊團')
      } else if (state.status.category === '四皇') {
        newProducts = productsPages.filter((item) => item.category === '四皇')
      } else if (state.status.category === '最惡世代') {
        newProducts = productsPages.filter((item) => {
          return item.category === '最惡世代' || item.title === '蒙其·D·魯夫' || item.title === '羅羅亞·索隆'
        })
      }
      return newProducts
    }
  }
}
