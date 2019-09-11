<template>
  <div class="container mt-8">
    <!-- loading  -->
    <loading :active.sync="isLoading" ></loading>
    <!-- found button  -->
    <div class="text-right mb-2">
      <button class="btn btn-primary" @click="openCouponModal(true)">
        建立新的事件
      </button>
    </div>
    <!-- table  -->
    <table class="table">
      <thead>
        <tr>
          <th>名稱</th>
          <th>懸賞金百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date}}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-primary btn-sm"
              @click="openDelCouponModal(item)"
            >刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination  -->
    <pagination :pagination="pagination" @switchPageContent="getCoupons"></pagination>
    <!-- modal  -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增或編輯事件</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                placeholder="請輸入標題">
            </div>
            <div class="form-group">
              <label for="coupon_code">事件代碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                placeholder="請輸入優惠碼">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date"
                v-model="tempCoupon.due_date">
            </div>
            <div class="form-group">
              <label for="price">變動百分比</label>
              <input type="number" class="form-control" id="price"
                v-model="tempCoupon.percent" placeholder="請輸入變動百分比">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled" id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"
              @click="updateCoupon">更新事件</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete modal  -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除事件</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 事件(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import pagination from '../modules/pagination'

export default {
  data () {
    return {
      isNew: false,
      isLoading: false,
      pagination: {},
      coupons: {},
      tempCoupon: {}
    }
  },
  components: {
    pagination
  },
  methods: {
    getCoupons (page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.isLoading = false
        vm.coupons = response.data.coupons
        vm.pagination = response.data.pagination
      })
    },
    openCouponModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
        this.isNew = true
      } else {
        this.tempCoupon = Object.assign({}, item)
        this.isNew = false
      }
      $('#couponModal').modal('show')
    },
    openDelCouponModal (item) {
      this.tempCoupon = Object.assign({}, item)
      $('#delCouponModal').modal('show')
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      let httpMethod = 'post'
      const vm = this
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        $('#couponModal').modal('hide')
        this.getCoupons()
      })
    },
    // 刪除優惠卷
    deleteCoupon () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      this.$http.delete(api, { data: vm.tempCoupon }).then((response) => {
        if (response.data) {
          $('#delCouponModal').modal('hide')
          vm.getCoupons()
        }
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
