<template>
  <div class="m-card container mt-8 mb-3">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- list -->
    <h3 class="text-center py-2">您的討伐列表</h3>
    <div class="row">
      <div v-if="cart.carts.length == 0" class="col-md-7 d-flex align-items-center justify-content-center">
        <h4 class="list__empty">目前列表中沒有懸賞犯 !</h4>
      </div>
      <div v-else class="col-md-7">
        <ul>
          <li class="m-card__bg d-flex flex-column align-items-center flex-sm-row mb-2" v-for="item in cart.carts" :key="item.id">
            <div class="m-card__img">
              <img :src="item.product.imageUrl" alt="">
            </div>
            <div class="m-card__content d-flex flex-column">
              <h4>
                <strong>{{ item.product.title }}</strong>
              </h4>
              <h5>分類: {{ item.product.category }}</h5>
              <h5>懸賞金 {{ item.final_total | currency }} 貝利</h5>
              <h5>
                是否申請軍艦 :
                <span v-if="item.qty == 1">是</span>
                <span v-else>否</span>
              </h5>
            </div>
            <button class="btn btn-outline-danger btn-sm" @click="deleteCartItem(item.id)">刪除懸賞犯</button>
          </li>
        </ul>

      </div>
      <div class="col-md-5">
        <div class="m-card__bg">
          <h4 class="text-center m-card__subtitle">列表金額</h4>
          <ul class="p-0" style="list-style-type: none">
            <li class="m-card__item d-flex justify-content-between" v-for="item in cart.carts" :key="item.id">
              <div>
                <h4><strong>{{ item.product.title }}</strong></h4>
                <h5 v-if="item.qty == 1">申請軍艦</h5>
                <h5 v-else>未申請軍艦</h5>
                <span class="text-success" v-if="item.final_total !== item.total">已套用事件</span>
              </div>
              <span>懸賞金 {{ item.final_total | currency }} 貝利</span>
            </li>
          </ul>
          <!-- coupon input -->
          <p class="mb-1 m-card__text">頂上戰爭失利，世界政府破產，所有賞金減少一半，請輸入事件代碼: Paramount War</p>
          <form class="mb-1" @submit.prevent="nextStep">
            <div class="input-group input-group-sm">
              <input type="text" class="form-control"
                :class="{'is-invalid': errors.has('coupon')}"
                v-validate="'required'" name="coupon"
                v-model="coupon_code"
                placeholder="請輸入事件代碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"
                @click="addCouponCode">
                  套用事件代碼
                </button>
              </div>
            </div>
            <p class="text-danger mb-3" v-if="errors.has('coupon')">請輸入事件代碼</p>
            <h5 class="text-right mb-2">總懸賞金 : <span class="text-danger h4">{{ totalPrice | currency }}</span><small>貝利</small></h5>
            <button v-if="cart.carts.length > 0" class="btn btn-outline-primary btn-block btn-sm">下一步</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/utils/_mixin.scss';
  @import '~@/assets/utils/variables/color.scss';
  @import '~@/assets/modules/_card.scss';

  .list {
    &__empty {
      padding: 10px;
      border: 1px solid $gray-600;
      border-radius: 5px;
    }
  }

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      coupon_code: '',
      orderId: ''
    }
  },
  methods: {
    // 取得討伐列表
    getCart () {
      this.$store.dispatch('cartModules/getCart')
    },
    // 刪除討法列表項目
    deleteCartItem (id) {
      this.$store.dispatch('cartModules/deleteCartItem', id)
    },
    // 套用事件代碼
    addCouponCode () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      let coupon = {
        code: vm.coupon_code
      }
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.getCart()
        if (response.data.success === true) {
          vm.$store.dispatch('alertModules/updateMessage', {
            message: '成功套用事件代碼',
            status: 'success'
          }, { root: true })
        } else {
          vm.$store.dispatch('alertModules/updateMessage', {
            message: '事件代碼不存在',
            status: 'danger'
          }, { root: true })
        }
      })
    },
    // 下一步
    nextStep () {
      const vm = this
      vm.$validator.validate().then(valid => {
        if (valid) {
          this.$router.push('/createList')
        } else {
          vm.$store.dispatch('alertModules/updateMessage', {
            message: '請輸入事件代碼',
            status: 'danger'
          }, { root: true })
        }
      })
    }

  },
  computed: {
<<<<<<< HEAD
    isLoading () {
      return this.$store.state.isLoading
    },
    cart () {
=======
    isLoading() {
      return this.$store.state.isLoading
    },
    cart() {
>>>>>>> 334e8f4060868643cf64bb998f97d6f6b134a7a3
      return this.$store.state.cartModules.cart
    },
    ...mapGetters('cartModules', ['totalPrice'])
  },
  created () {
    this.getCart()
  }
}
</script>
