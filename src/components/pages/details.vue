<template>
  <div class="container my-7">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- content -->
    <div class="row justify-content-center mb-2">
      <div class="col-md-4 mb-2 mb-md-0">
        <img :src="product.imageUrl" class="details__img" alt="">
      </div>
      <div class="col-md-4">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <h3 class="mb-2 pb-2 details__title text-center"><strong>{{ product.title }}</strong></h3>
            <h5 class="details__originPrice" v-if="!product.price">{{ product.origin_price | currency }} 貝利</h5>
            <del class="details__originPrice d-block mb-1" v-if="product.price">原懸賞金 {{ product.origin_price | currency }} 貝利</del>
            <h5 class="details__price mb-3 text-danger" v-if="product.price">現懸賞金 {{ product.price | currency }} 貝利</h5>
            <p class="mb-1">是否申請軍艦協同作戰，如不申請軍艦，則賞金為 <span class="text-danger">兩倍</span></p>
            <select name="" class="form-control mb-1" v-model="product.num">
              <option :value="1" :key="true" selected="selected">
                是
              </option>
              <option :value="2" :key="false">
                否
              </option>
            </select>
            <h5 class="text-right">取得賞金 <strong>{{ product.num * product.price | currency }}</strong> 貝利</h5>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary"
              @click="addtoCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="product.id === loadingCart"></i>
              加到討伐列表
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row details__content">
      <div class="mb-1">
        <h4 class="details__subtitle">懸賞犯能力</h4>
        <p class="details__text mb-2">{{ product.content }}</p>
        <h4 class="details__subtitle">懸賞犯描述</h4>
        <p class="details__text">{{ product.description }}</p>
      </div>
    </div>
    <div class="row">
      <h4>其他{{ product.category }}</h4>
      <!-- swiper -->
      <swiper :options="swiperOption" v-if="filterProducts.length > 0">
        <swiper-slide v-for="item in filterProducts" :key="item.id">
          <img class="swiper-img" :src="item.imageUrl" alt="">
        </swiper-slide>
        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- navigation button -->
        <div class="swiper-button-prev" slot="button-prev">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <i class="fas fa-chevron-right"></i>
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/utils/variables/color.scss';
  @import '~@/assets/config/_typography.scss';

  .details {
    &__img {
      width: 100%;
    }
    &__title {
      border-bottom: 1px solid $gray-400;
    }
    &__subtitle {
      margin-bottom: 12px;
    }
    &__originPrice {
      color: $gray-600;
    }
    &__content {
      padding-top: 20px;
      border-top: 1px solid $gray-400;
    }
    &__text {
      color: $gray-600;
      line-height: $lh-l;
    }
  }
  .swiper-img {
      width: 80%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
  .swiper-container {
    padding: 70px 0 !important;
  }
  .swiper-slide {
    transition: all .5s;
    height: 80%;
    position: relative;
    &:hover {
      cursor: grab;
    }
    img {
      filter: blur(5px);
    }
  }
  .swiper-slide-next {
    transform: scale(1.3);
    img {
      filter: blur(0);
    }
  }
  .swiper-pagination-bullet-active {
    background: rgba(0, 0, 0, 0.9) !important;
  }
  .swiper-button-prev, .swiper-button-next{
    background-image: none !important;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.6);
  }
</style>

<script>
/* global $ */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: { // 自動撥放
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 1000, // 切換速度
        loop: true, // 是否循環撥放
        slidesPerView: 3, // 預設 slider 數量
        spaceBetween: 60, // slider 間隔
        breakpoints: { // 斷點
          576: {
            spaceBetween: 30
          }
        },
        pagination: { // 頁籤
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next', // 下一個按鈕
          prevEl: '.swiper-button-prev' // 上一個按鈕
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    // 取得所有商品
    getProducts() {
      this.$store.dispatch('productsModules/getProducts', this.product)
    },
    // 取得單一商品詳細資料
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    // 加到討伐列表
    addtoCart (id, qty) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    loadingCart() {
      return this.$store.state.cartModules.status.loadingCart
    },
    filterProducts() {
      return this.$store.state.productsModules.products
    },
    product() {
      return this.$store.state.productsModules.product
    }
  },
  created () {
    this.getProduct(this.$route.params.id)
  }
}
</script>
