<template>
  <div class="container m-card mt-8 mb-3">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- content -->
    <h2 class="text-center">列表完成</h2>
    <div class="row pt-3 mb-3 step">
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">資料填寫</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">確認列表</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">列表完成</h5>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="m-card__bg">
          <h4 class="text-center">感謝您的參與，祝您討伐成功!</h4>
          <ul>
            <li class="py-1">
              <span class="m-card__item__title"><strong>列表成立時間</strong></span>
              <span>{{ order.create_at | date }}</span>
            </li>
            <li class="py-1">
              <span class="m-card__item__title"><strong>列表編號</strong></span>
              <span>{{ order.id }}</span>
            </li>
            <li class="pt-1">
              <span class="m-card__item__title"><strong>總懸賞金</strong></span>
              <span>{{ order.total | currency }}</span>
            </li>
          </ul>
          <router-link to="/wanted" class="btn btn-outline-danger btn-block btn-sm">繼續瀏覽懸賞榜</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/modules/_card.scss';
</style>

<script>
export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      this.$store.dispatch('orderModules/getOrder', this.orderId)
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    order () {
      return this.$store.state.orderModules.order
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
