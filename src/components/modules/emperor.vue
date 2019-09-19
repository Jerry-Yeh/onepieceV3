<template>
  <section id="emperor">
    <div class="container py-3">
      <h3 class="emperor__title text-center mb-4">海上皇帝</h3>
      <div class="row no-gutters">
        <div class="col-6 col-md-3 animated">
          <div class="emperor d-flex justify-content-center">
            <img class="emperor__img" src="@/assets/img/kaido-3.png" alt="">
            <img class="emperor__name" src="@/assets/img/name-kaido.png" alt="">
          </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center animated">
          <div class="emperor d-flex justify-content-center">
            <img class="emperor__img" src="@/assets/img/big-mom-3.png" alt="">
            <img class="emperor__name" src="@/assets/img/name-big-mom.png" alt="">
          </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center animated">
          <div class="emperor d-flex justify-content-center">
            <img class="emperor__img" src="@/assets/img/Jack-2.png" alt="">
            <img class="emperor__name" src="@/assets/img/name-shanks.png" alt="">
          </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center animated">
          <div class="emperor d-flex justify-content-center">
            <img class="emperor__img" src="@/assets/img/dteach-3.png" alt="">
            <img class="emperor__name" src="@/assets/img/name-dteach.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~@/assets/all.scss';

  .emperor {
    position: relative;
    transition: all .3s;
    &__title {
      font-size: 30px;
    }
    &:hover {
      box-shadow: 5px 5px 20px black;
      transform: scale(1.05);
      .emperor__name {
        opacity: 1;
        transform: translateY(0)
      }
    }
    &__img {
      width: 100%;
    }
    &__name {
      position: absolute;
      bottom: 50px;
      width: 80%;
      opacity: 0;
      transition: all .5s;
      transform: translateY(50px)
    }
  }
  .animated {
    opacity: 0;
    transition: all 1s;
    transform: translateX(200px);
    &:hover {
      z-index: 2;
    }
  }
  .fadeIn {
    opacity: 1;
    transform: translateX(0px);
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
      let scrollPos = $(window).scrollTop()
      let windowHeight = $(window).height()
      let thisPos

      if ($('.animated').length > 0) {
        thisPos = $('.animated').offset().top
      }

      if ((scrollPos + windowHeight) >= thisPos) {
        for (let i = 0; i < $('.animated').length; i++) {
          $(`.animated:eq(${i})`).delay(i * 1000).queue(function () {
            $(this).addClass('fadeIn')
          })
        }
      };
    })
  }
}
</script>
