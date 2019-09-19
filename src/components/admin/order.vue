<template>
  <div class="container mt-8">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- table -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th>列表建立時間</th>
          <th>Email</th>
          <th>列表內容</th>
          <th>總懸賞金</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr v-for="(item, key) in sortOrder" :key="key"
          :class="{'text-secondary': !item.is_paid}">
          <td>{{ item.create_at | date}}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未起用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination  -->
    <pagination :pagination="pagination" @switchPageContent="getOrders"></pagination>
  </div>
</template>

<script>
import pagination from '../modules/pagination'

export default {
  data () {
    return {
      orders: [],
      isLoading: false,
      pagination: {}
    }
  },
  components: {
    pagination
  },
  methods: {
    getOrders (page) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    }
  },
  computed: {
    sortOrder () {
      let newOrder = []
      const vm = this
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          let aIsPaid = a.is_paid
          let bIsPaid = b.is_paid
          return aIsPaid - bIsPaid
        })
      }
      return newOrder
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
