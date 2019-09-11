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
      <swiper-slide v-for="item in products" :key="item.id">
        <img class="bounty__img" :src="item.imageUrl" alt="">
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
    &__img {
      width: 100%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
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
      products: [],
      pages: '',
      isLoading: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    // 取得商品資料
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products.filter((item) => {
          return item.category === '草帽海賊團'
        })
        vm.isLoading = false
      })
    }

  },
  created () {
    this.getProducts()
  }
}
</script>
