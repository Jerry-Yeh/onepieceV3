<template>
  <nav class="page" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !pagination.has_pre}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="switchPage(pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active' : pagination.current_page === page }">
        <a class="page-link" href="#" @click.prevent="switchPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled': !pagination.has_next}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="switchPage(pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .page {
    display: flex;
    justify-content: center;
  }
  .page-link {
    transition: all .3s;
  }
</style>

<script>
export default {
  props: ['pagination'],
  data () {
    return {
      page: 1
    }
  },
  methods: {
    switchPage (page) {
      const vm = this
      vm.page = page
      vm.$emit('switchPageContent', Number(vm.page))
    }
  }
}
</script>
