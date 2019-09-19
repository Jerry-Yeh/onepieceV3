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
            <li class="sidebar__item" :class="{active : status.category == '所有罪犯'}" @click.prevent="changeCategory('所有罪犯')">
              <a class="sidebar__link" href="#">所有罪犯</a>
            </li>
            <li class="sidebar__item" :class="{active : status.category == '草帽海賊團'}" @click.prevent="changeCategory('草帽海賊團')">
              <a class="sidebar__link" href="#">草帽海賊團</a>
              </li>
            <li class="sidebar__item" :class="{active : status.category == '四皇'}" @click.prevent="changeCategory('四皇')">
              <a class="sidebar__link" href="#">四皇</a>
              </li>
            <li class="sidebar__item" :class="{active : status.category == '最惡世代'}" @click.prevent="changeCategory('最惡世代')">
              <a class="sidebar__link" href="#">最惡世代</a>
              </li>
          </ul>
        </div>
        <!-- wanted  -->
        <div class="col-md-9">
          <ul class="wanted">
<<<<<<< HEAD
            <li class="wanted__item d-flex flex-column flex-sm-row" v-for="item in categoryProducts" :key="item.id">
=======
            <li class="wanted__item d-flex flex-column flex-sm-row" v-for="item in filterProducts" :key="item.id">
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
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
                  <i class="fas fa-spinner fa-spin" v-if="loadingCart === item.id"></i>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    pagination
  },
  methods: {
    // 取得所有分頁商品
    getProducts (page = 1) {
      this.$store.dispatch('productsModules/getProductsPages', page)
    },
    // 取得單一商品詳細資料
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    // 加到討伐列表
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
    },
    // 更改項目
    changeCategory (category) {
      this.$store.dispatch('productsModules/changeCategory', category)
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    status () {
      return this.$store.state.productsModules.status
    },
    pagination () {
      return this.$store.state.productsModules.pagination
    },
<<<<<<< HEAD
    loadingCart () {
      return this.$store.state.cartModules.status.loadingCart
    },
    ...mapGetters('productsModules', ['categoryProducts'])
=======
    loadingCart() {
      return this.$store.state.cartModules.status.loadingCart
    },
    ...mapGetters('productsModules', ['filterProducts'])
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
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
