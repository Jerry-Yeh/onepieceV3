<template>
  <div>
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- banner -->
    <div class="banner"></div>
    <!-- content -->
    <div class="container my-5">
      <div class="row">
        <!-- sidebar -->
        <div class="col-md-3">
          <ul class="sidebar d-md-block d-flex">
            <li class="sidebar__item" :class="{active : status.criminal == '所有罪犯'}" @click.prevent="status.criminal='所有罪犯', getProducts()">
              <a class="sidebar__link" href="#">所有罪犯</a>
            </li>
            <li class="sidebar__item" :class="{active : status.criminal == '草帽海賊團'}" @click.prevent="status.criminal='草帽海賊團', getProducts()">
              <a class="sidebar__link" href="#">草帽海賊團</a>
              </li>
            <li class="sidebar__item" :class="{active : status.criminal == '四皇'}" @click.prevent="status.criminal='四皇', getProducts()">
              <a class="sidebar__link" href="#">四皇</a>
              </li>
            <li class="sidebar__item" :class="{active : status.criminal == '最惡世代'}" @click.prevent="status.criminal='最惡世代', getProducts()">
              <a class="sidebar__link" href="#">最惡世代</a>
              </li>
          </ul>
        </div>
        <!-- wanted  -->
        <div class="col-md-9">
          <ul class="wanted">
            <li class="wanted__item d-flex flex-column flex-sm-row" v-for="item in filterProducts" :key="item.id">
              <div class="wanted__img">
                <img :src="item.imageUrl" alt="">
              </div>
              <div class="wanted__item__body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h4>
                    <strong>{{ item.title }}</strong>
                  </h4>
                  <h4 class="badge badge-secondary">{{ item.category }}</h4>
                </div>
                <p class="wanted__content">{{ item.content }}</p>
                <div class="d-flex flex-column mt-auto">
                  <div class="h5" v-if="!item.price">{{ item.origin_price | currency }} 元</div>
                  <del class="h6">原懸賞金 {{ item.origin_price | currency }} 貝利</del>
                  <div class="h5">新懸賞金 {{ item.price | currency }} 貝利</div>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-center px-1 wanted__btn">
                <router-link :to="'/details/' + item.id"
                  class="btn btn-outline-secondary btn-sm mb-1"
                  @click="getProduct(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  查看更多
                </router-link>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="addtoCart(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingCart === item.id"></i>
                  加到討伐列表
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- pagination  -->
      <pagination :class="{ 'd-none': pagination == ''}" :pagination="pagination" @switchPageContent="getProducts"></pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/utils/_mixin.scss';
@import '~@/assets/config/_typography.scss';
@import '~@/assets/utils/variables/color.scss';
@import '~@/assets/utils/_mixin.scss';

  .banner {
    background: url('~@/assets/img/bg-4.png') no-repeat;
    background-size: cover;
    height: 500px;
    margin-top: 53px;
    @include desktop {
      height: 600px;
    }
  }
  .sidebar {
    width: 100%;
    position: sticky;
    top: 20%;
    list-style-type: none;
    &__item {
      text-align: center;
      padding: 20px;
      transition: all .5s;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
      @include tablet {
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 0;
      }
      &:hover {
        cursor: pointer;
        @include tablet {
          font-size: $font-l;
        }
        a {
          color: darken($primary, 30%);
          transition: all .5s;
        }
      }
    }
    &__link {
      color: $primary;
    }
  }
  .active {
    border-top: 4px solid black;
    @include tablet {
      border-left: 4px solid black;
      border-top: 0;
      font-size: $font-l;
    }
  }
  .wanted {
    &__item {
      margin-bottom: 20px;
      padding: 15px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      transition: all .5s;
      background-color: rgba(0, 0, 0, 0.05);
      border: 5px solid white;
      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      }
      &__body {
        padding: 0 10px;
        @include mobile {
          width: 60%;
        }
      }
    }
    &__img {
      margin: 0 0 20px;
      @include mobile {
        width: 25%;
        margin-right: 0 10px 0 0;
      }
      img {
        width: 100%;
      }
    }
    &__category {
      background-color: black;
      color: white;
    }
    &__content {
      margin-bottom: 10px;
      font-size: $font-s;
      @include text-ellipsis(2);
      @include desktop {
        font-size: $font-m;
        line-height: $lh-l;
      }
    }
    &__btn {
      @include mobile {
        width: 25%;
      }
    }
  }

</style>

<script>
/* global $ */
import pagination from '../modules/pagination'

export default {
  data () {
    return {
      products: [],
      category: '',
      status: {
        criminal: '所有罪犯',
        loadingItem: '',
        loadingCart: ''
      },
      pagination: '',
      product: {},
      isLoading: false
    }
  },
  components: {
    pagination
  },
  methods: {
    // 取得全部商品
    getProducts (page) {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      vm.isLoading = true
      if (vm.status.criminal === '所有罪犯') {
        vm.$http.get(api).then((response) => {
          vm.products = response.data.products
          vm.isLoading = false
          vm.pagination = response.data.pagination
          $('nav[aria-label="Page navigation example"]').removeClass('d-none')
        })
      } else {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
        vm.$http.get(api).then((response) => {
          vm.products = response.data.products
          vm.isLoading = false
        })
        $('nav[aria-label="Page navigation example"]').addClass('d-none')
      }
    },
    // 取得單一商品詳細資料
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      const vm = this
      vm.status.loadingItem = id
      vm.$http.get(api).then((response) => {
        $('#productModal').modal('show')
        vm.product = response.data.product
        vm.product.num = 1
        vm.status.loadingItem = ''
      })
    },
    // 加到討伐列表
    addtoCart (id, qty = 1) {
      const vm = this
      const cartApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        'product_id': id,
        qty
      }

      vm.$http.get(cartApi).then((response) => {
        let filterArray = response.data.data.carts.filter(item => {
          return item.product_id === id
        })
        if (filterArray.length === 0) {
          vm.status.loadingCart = id
          vm.$http.post(api, { data: cart }).then((response) => {
            $('#productModal').modal('hide')
            vm.status.loadingCart = ''
            vm.$bus.$emit('message:push', '成功加入討伐列表', 'success')
          })
        } else {
          this.$bus.$emit('message:push', '此懸賞犯已在討伐列表中', 'danger')
          $('#productModal').modal('hide')
        }
      })
    }
  },
  computed: {
    filterProducts () {
      const vm = this
      let newProducts = ''
      if (vm.status.criminal === '所有罪犯') {
        newProducts = vm.products
      } else if (vm.status.criminal === '草帽海賊團') {
        newProducts = vm.products.filter((item) => item.category === '草帽海賊團')
      } else if (vm.status.criminal === '四皇') {
        newProducts = vm.products.filter((item) => item.category === '四皇')
      } else if (vm.status.criminal === '最惡世代') {
        newProducts = vm.products.filter((item) => {
          return item.category === '最惡世代' || item.title === '蒙其·D·魯夫' || item.title === '羅羅亞·索隆'
        })
      }
      return newProducts
    }
  },
  created () {
    this.getProducts()
    $(window).scroll(() => {
      let scrollPos = $(window).scrollTop()
      let windowWidth = $(window).width()
      if (windowWidth > 992) {
        $('.banner').css('background-position-y', -(scrollPos) + 'px')
      } else {
        $('.banner').css('background-position-y', -(scrollPos / 2) + 'px')
      }
    })
  }
}
</script>
