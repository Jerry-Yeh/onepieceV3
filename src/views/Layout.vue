<template>
  <div>
    <!-- content -->
    <Navbar></Navbar>
    <Alert></Alert>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/modules/navbar'
import Footer from '../components/modules/footer'
import Alert from '../components/modules/alertMessage'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Navbar,
    Footer,
    Alert
  }
}
</script>
