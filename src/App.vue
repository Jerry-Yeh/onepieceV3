<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/all";
  body{
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Microsoft JhengHei",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  }
</style>
