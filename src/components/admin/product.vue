<template>
  <div class="container my-8">
    <!-- loading  -->
    <loading :active.sync="isLoading" >
      <img src="https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif" alt="">
    </loading>
    <!-- found button  -->
    <div class="text-right mb-2">
      <button class="btn btn-primary" @click="openModal(true)">新增懸賞犯</button>
    </div>
    <!-- table  -->
    <table class="table">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>懸賞犯名稱</th>
          <th width="120">原懸賞金</th>
          <th width="120">懸賞金</th>
          <th width="100">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | currency }}
          </td>
          <td class="t ext-right">
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm mb-1" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination  -->
      <pagination :pagination="pagination" @switchPageContent="getProducts"></pagination>
    <!-- edit & found modal  -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增懸賞犯</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="col-form-label" for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="customFile">或 上傳懸賞單
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img class="img-fluid" alt="" :src="tempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label class="col-form-label" for="title">懸賞犯名稱</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label class="col-form-label" for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="tempProduct.category">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label class="col-form-label" for="origin_price">原懸賞金</label>
                    <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label class="col-form-label" for="price">懸賞金</label>
                    <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="tempProduct.price">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label class="col-form-label" for="description">懸賞犯描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入懸賞犯描述" v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="content">懸賞犯能力說明</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入懸賞犯能力說明" v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled" >
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete modal  -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除懸賞犯</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
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
      products: [],
      isLoading: false,
      tempProduct: {},
      status: {},
      isNew: false,
      pagination: {}
    }
  },
  components: {
    pagination
  },
  methods: {
    // 取得商品資料
    getProducts (page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products
        vm.isLoading = false
        vm.pagination = response.data.pagination
      })
    },
    // 打開新增與編輯視窗
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    // 打開刪除視窗
    openDelModal (item) {
      this.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    // 商品建立與修改
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      vm.isLoading = true
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          vm.getProducts(2)
        } else {
          $('#productModal').modal('hide')
          vm.getProducts()
        }
        vm.isLoading = false
      })
    },
    // 刪除商品
    deleteProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      vm.$http.delete(api).then((response) => {
        $('#delProductModal').modal('hide')
        vm.getProducts()
      })
    },
    // 新增圖片
    uploadFile () {
      const vm = this
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
