<template>
  <div>
    <jumbotron></jumbotron>
    <description></description>
    <emperor></emperor>
    <bountyHunter></bountyHunter>
    <bounty></bounty>
    <sidebar></sidebar>
  </div>
</template>

<script>
import jumbotron from '../modules/jumbotron'
import bountyHunter from '../modules/bounty-hunter'
import bounty from '../modules/carousel'
import description from '../modules/description'
import emperor from '../modules/emperor'
import sidebar from '../modules/sidebar'

export default {
  components: {
    jumbotron,
    bountyHunter,
    emperor,
    bounty,
    description,
    sidebar
  }
}
</script>

<style scoped>
  .index {
    padding-top: 68px;
    color: white;
  }
</style>
