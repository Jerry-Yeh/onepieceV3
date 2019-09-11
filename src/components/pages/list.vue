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
export default {
  data () {
    return {
      cart: {
        carts: []
      },
      coupon_code: '',
      isLoading: false,
      orderId: ''
    }
  },
  methods: {
    // 取得討伐列表
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data
        vm.isLoading = false
      })
    },
    // 套用事件代碼
    addCouponCode () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      let coupon = {
        code: vm.coupon_code
      }
      vm.$http.post(api, { data: coupon }).then((response) => {
        console.log(response.data)
        vm.getCart()
        if (response.data.success === true) {
          vm.$bus.$emit('message:push', response.data.message, 'success')
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
        }
      })
    },
    // 刪除討法列表項目
    deleteCartItem (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.$http.delete(api).then((response) => {
        vm.$bus.$emit('message:push', '成功刪除懸賞犯', 'success')
        vm.getCart()
      })
    },
    // 下一步
    nextStep () {
      const vm = this
      vm.$validator.validate().then(valid => {
        if (valid) {
          this.$router.push('/createList')
        } else {
          vm.$bus.$emit('message:push', '請輸入事件代碼', 'danger')
        }
      })
    }

  },
  computed: {
    totalPrice () {
      const vm = this
      let carts = vm.cart.carts
      let total = 0

      if (carts.length > 0) {
        for (let i = 0; i < carts.length; i++) {
          total += carts[i].final_total
        };
      }
      return total
    }
  },
  created () {
    this.getCart()
  }
}
</script>
