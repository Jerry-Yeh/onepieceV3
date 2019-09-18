<template>
  <div class="m-card container mt-8 mb-3">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- content -->
    <h2 class="text-center">確認列表</h2>
    <div class="row pt-3 mb-3 step">
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">資料填寫</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">確認列表</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point">列表完成</h5>
      </div>
    </div>
    <!-- table  -->
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="m-card__bg">
          <h4 class="text-center m-card__subtitle mb-0"><strong>訂單訊息</strong></h4>
          <ul>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>列表成立時間</strong></span>
              <span>{{ order.create_at | date }}</span>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>列表編號</strong></span>
              <span>{{ order.id }}</span>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>總懸賞金</strong></span>
              <span class="text-danger h4">{{ order.total | currency }}</span><small>貝利</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <form class="m-card__bg" @submit.prevent="payOrder">
          <h4 class="text-center m-card__subtitle mb-0"><strong>獵人資料</strong></h4>
          <ul class="p-0" style="list-style-type: none">
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>Email</strong></span>
              <span>{{ order.user.email }}</span>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>姓名</strong></span>
              <span>{{ order.user.name }}</span>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>收件人電話</strong></span>
              <span>{{ order.user.tel }}</span>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>收件人地址</strong></span>
              <span>{{ order.user.address }}</span>
            </li>
            <li class="m-card__item">
              <h5 class="m-card__item__title"><strong>其他需求與備註</strong></h5>
              <p>{{ order.message }}</p>
            </li>
            <li class="m-card__item">
              <span class="m-card__item__title"><strong>列表狀態</strong></span>
              <span v-if="!order.is_paid">尚未寄出</span>
              <span v-else class="text-success">已寄出</span>
            </li>
          </ul>
          <div class="row">
            <div class="col-md-6">
              <router-link class="btn btn-outline-primary w-100" to="/wanted">取消列表</router-link>
            </div>
            <div class="col-md-6">
              <router-link :to="'/completed/' + orderId" class="btn btn-danger w-100">確認寄出</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/modules/_card.scss';

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      this.$store.dispatch('orderModules/getOrder', this.orderId)
    },
    payOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$http.post(api).then((response) => {
        vm.getOrder()
        vm.$store.dispatch('alertModules/updateMessage', {
          message: '成功寄出',
          status: 'success'
        }, { root: true })
      })
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    order() {
      return this.$store.state.orderModules.order
    },
    ...mapGetters('cartModules', ['totalPrice'])
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
