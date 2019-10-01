<template>
  <div class="wrap d-flex align-items-center">
    <!-- loading  -->
    <loading :active.sync="isLoading">
      <div class="d-flex align-items-end">
        <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
        <span class="ml-1">Loading...</span>
      </div>
    </loading>
    <!-- Alert -->
    <Alert></Alert>
    <!-- form -->
    <form class="form" @submit.prevent="signin">
      <h2 class="text-center mb-2">Please Login</h2>
      <div class="form-group">
        <label class="mb-1" for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="user.username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label class="mb-1" for="exampleInputPassword1">Password</label>
        <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-outline-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/utils/variables/color.scss';
  .wrap {
    height: 100vh;
    background-image: url('~@/assets/img/bg-3.png');
    background-size: cover;
    background-position: center;
  }
  .form {
    width: 100%;
    max-width: 330px;
    margin: auto;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
  }
</style>

<script>
import Alert from '../components/modules/alertMessage'

export default {
  data () {
    return {
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    Alert
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      vm.isLoading = true
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin')
          vm.isLoading = false
        } else {
          vm.isLoading = false
          vm.$store.dispatch('alertModules/updateMessage', {
          message: response.data.message,
          status: 'danger'
        }, { root: true })
        }
      })
    }
  }
}
</script>
