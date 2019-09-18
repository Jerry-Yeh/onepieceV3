<template>
  <div class="m-card container mt-8 mb-3">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- process -->
    <h2 class="text-center">資料填寫</h2>
    <div class="row pt-3 mb-3 step">
      <div class="col-md-4">
        <h5 class="text-center step__point step__point--ready">資料填寫</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point">確認列表</h5>
      </div>
      <div class="col-md-4">
        <h5 class="text-center step__point">列表完成</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <!-- order -->
        <form class="m-card__bg" @submit.prevent="createOrder">
          <h4 class="text-center m-card__subtitle"><strong>獵人資料</strong></h4>

          <div class="form-group">
            <label for="useremail">Email</label>
            <input type="email" class="form-control" name="email" id="useremail"
              v-model="form.user.email" placeholder="請輸入 Email"
              v-validate="'required|email'" :class="{'is-invalid': errors.has('email')}">
            <span class="text-danger" v-if="errors.has('email')">
              {{ errors.first('email') }}
            </span>
          </div>

          <div class="form-group">
            <label for="username">收件人姓名</label>
            <input type="text" class="form-control" name="name" id="username"
              v-model="form.user.name" v-validate="'required'"
              :class="{'is-invalid': errors.has('name')}" placeholder="輸入姓名">
            <span class="text-danger" v-if="errors.has('name')">必須輸入姓名</span>
          </div>

          <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input type="tel" class="form-control" name="tel" id="usertel"
              v-model="form.user.tel" v-validate="'required'"
              :class="{'is-invalid': errors.has('tel')}" placeholder="請輸入電話">
            <span class="text-danger" v-if="errors.has('tel')">必須輸入電話</span>
          </div>

          <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input type="text" class="form-control" name="address" id="useraddress"
              v-model="form.user.address" v-validate="'required'"
              :class="{'is-invalid': errors.has('address')}" placeholder="請輸入地址">
            <span class="text-danger" v-if="errors.has('address')">必須輸入地址</span>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="5" placeholder="其他需求與備註" v-model="form.message"></textarea>
          </div>

          <div class="row">
            <div class="col-6">
              <router-link to="/list" class="btn btn-outline-primary w-100">上一步</router-link >
            </div>
            <div class="col-6">
              <button class="btn btn-outline-danger w-100">送出討伐列表</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-5">
        <div class="m-card__bg">
          <h4 class="text-center m-card__subtitle"><strong>列表內容</strong></h4>
          <ul>
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
          <h5 class="text-right mb-2">總懸賞金 : <span class="text-danger h4">{{ totalPrice | currency }}</span><small>貝利</small></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/modules/_card.scss';
  @import '~@/assets/utils/variables/color.scss';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
    }
  },
  methods: {
    // 取得討伐列表
    getCart () {
      this.$store.dispatch('cartModules/getCart')
    },
    // 建立訂單
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.$validator.validate().then(valid => {
        if (valid) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/checkout/${response.data.orderId}`)
            } else {
              vm.$store.dispatch('alertModules/updateMessage', {
                message: '討伐列表無資料',
                status: 'danger'
              }, { root: true })
            }
          })
        } else {
          vm.$store.dispatch('alertModules/updateMessage', {
            message: '資料尚未填妥',
            status: 'danger'
          }, { root: true })
        }
      })
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    cart() {
      return this.$store.state.cartModules.cart
    },
    ...mapGetters('cartModules', ['totalPrice'])
  },
  created () {
    this.getCart()
  }
}
</script>
