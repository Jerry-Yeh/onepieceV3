<template>
  <section class="mb-5 container" id="strawHat">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <h2 class="text-center bounty__title mb-1">最惡の世代</h2>
    <h2 class="text-center bounty__subtitle">草帽海賊團</h2>
    <!-- swiper -->
    <swiper :options="swiperOption" v-if="products.length > 0">
<<<<<<< HEAD
      <swiper-slide class="bounty__swiper" v-for="item in products" :key="item.id">
        <img class="bounty__img" :src="item.imageUrl" alt="">
        <div class="bounty__more">
          <router-link :to="'/details/' + item.id"
            class="btn btn-outline-light btn-sm mb-1"
            @click="getProduct(item.id)">
            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
            查看更多
          </router-link>
          <button type="button" class="btn btn-outline-light btn-sm"
          @click="addtoCart(item.id)">
            <i class="fas fa-spinner fa-spin" v-if="loadingCart === item.id"></i>
            加到討伐列表
          </button>
        </div>
=======
      <swiper-slide v-for="item in products" :key="item.id">
        <img class="bounty__img" :src="item.imageUrl" alt="">
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
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
  </section>
</template>

<style lang="scss">  // 如果要加上 pagination，就不能加上 scoped ，否則要將樣式加在全域
  @import '~@/assets/utils/variables/color.scss';
  @import '~@/assets/config/_typography.scss';

  .bounty {
<<<<<<< HEAD
    &__swiper {
      &:hover {
        .bounty__more {
          opacity: 1;
        }
      }
    }
=======
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
    &__img {
      width: 100%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
<<<<<<< HEAD
    &__more {
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all .5s;
      background-color: rgba(0, 0, 0, .4);
      a, button {
        width: 50%;
      }
    }
=======
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
    &__title {
      font-size: $font-xxl;
    }
    &__subtitle {
      font-size: $font-xl;
    }
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  data () {
    return {
      product: {
<<<<<<< HEAD
        category: '草帽海賊團'
=======
        category: '草帽海賊團',
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
      },
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
      },
      pages: ''
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
<<<<<<< HEAD
    // 取得商品
    getProducts () {
      this.$store.dispatch('productsModules/getProducts', this.product)
    },
    // 取得單一商品詳細資料
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    // 加到討伐列表
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
=======
    getProducts() {
      this.$store.dispatch('productsModules/getProducts', this.product)
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    products () {
      return this.$store.state.productsModules.products
<<<<<<< HEAD
    },
    status () {
      return this.$store.state.productsModules.status
    },
    loadingCart () {
      return this.$store.state.cartModules.status.loadingCart
=======
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
