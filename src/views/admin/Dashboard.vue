<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Navbar from '../../components/admin/navbar'
import Alert from '../../components/modules/alertMessage'

export default {
  components: {
    Navbar,
    Alert
  }
}
</script>
