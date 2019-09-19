import Vue from 'vue'

Vue.prototype.$bus = new Vue() // 將 event bue 直接掛在 Vue 原型下

// AlertMessage.vue
// this.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 樣式
// timestamp: 訊息 ID
