<template>
  <div class="d-none d-sm-block">
    <ul class="sidebar">
      <li class="sidebar__item">
        <a class="sidebar__link animatedSB active" href="#jumbotron">Jumbotron</a>
      </li>
      <li class="sidebar__item">
        <a class="sidebar__link animatedSB" href="#description">Description</a>
      </li>
      <li class="sidebar__item">
        <a class="sidebar__link animatedSB" href="#emperor">Emperor</a>
      </li>
      <li class="sidebar__item">
        <a class="sidebar__link animatedSB" href="#bountyHunter">Bounty Hunter</a>
      </li>
      <li class="sidebar__item">
        <a class="sidebar__link animatedSB" href="#strawHat">Straw-Hat Pirates</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/utils/variables/color.scss';
  @import '~@/assets/config/_typography.scss';

  .sidebar {
    list-style-type: none;
    position: fixed;
    top: 40%;
    margin-left: 50px;
    z-index: 2;
    &__item {
      border-left: 1px solid black;
    }
    &__link {
      color: rgba(0, 0, 0, 0.4);
      padding: 10px 0 8px 20px ;
      display: block;
      transition: all .5s;
      &:hover {
        font-size: $font-xl;
      }
    }
  }
  .active {
    border-left: 4px solid black;
    color: $secondary;
    font-size: $font-xl;
  }
</style>

<script>
/* global $ */

export default {
  data () {
    return {}
  },
  created () {
    $(window).scroll(() => {
      let scrollPos = $(window).scrollTop() + ($(window).height() / 2)

      $('.animatedSB').each(function () {
        let thisId = $(this).attr('href')
        let thisPos = $(`${thisId}`).offset().top
        if (scrollPos >= thisPos) {
          $(this).addClass('active')
          $(this).parent().siblings().children().removeClass('active')
        }
      })
    })
  }
}
</script>
