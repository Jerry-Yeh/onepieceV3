<template>
  <section id="bountyHunter" class="wrap bg-primary mb-5 py-3 py-sm-9">
    <div class="container bounty">
      <h3 class="bounty__title mb-3 bounty--animated">最強賞金獵人</h3>
      <div class="row bounty--animated">
        <div class="col-md-4 bounty__item">
          <img class="bounty__img" src="@/assets/img/hunter-1.png" alt="">
          <h5 class="bounty__subtitle">刀神 - 強尼 &amp; 劍聖 - 約瑟夫</h5>
          <p>因為娜美大姐哭了！除了這個，還會有什麼原因能讓我們賭命？</p>
        </div>
        <div class="col-md-4 bounty__item">
          <img class="bounty__img" src="@/assets/img/hunter-2.png" alt="">
          <h5 class="bounty__subtitle">海軍上校 - 斯摩格</h5>
          <p>既然你這麼不甘心，就變得更強給我看啊！</p>
        </div>
        <div class="col-md-4 bounty__item">
          <img class="bounty__img" src="@/assets/img/hunter-3.png" alt="">
          <h5 class="bounty__subtitle">海賊劊子手 - 蕭萊亞</h5>
          <p>我一定要打敗嘉斯帕德!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .wrap {
    background: url('~@/assets/img/background.png') repeat;
    background-size: 100% auto;
    background-attachment: fixed;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      background-color: rgba(255, 255, 255, .8);
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  .bounty {
    &__title{
      font-size: 30px;
      text-align: center;
    }
    &__subtitle {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

    }
    &__img {
      max-width: 100%;
      width: 150px;
      height: auto;
      margin-bottom: 20px;
      border-radius: 50%;
      transition: all .5s;
      overflow: hidden;
    }
    &--animated {
      opacity: 0;
      transform: translateY(100px);
      transition: all 1s;
    }
    &--bounceInUp {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<script>
/* global $ */
export default {
  created () {
    $(document).ready(() => {
      $(window).scroll(() => {
        let scrollPos = $(window).scrollTop()
        let windowHeight = $(window).height()
        $('.bounty--animated').each(function () {
          let thisPos = $(this).offset().top

          if ((scrollPos + windowHeight) >= thisPos) {
            $(this).addClass('bounty--bounceInUp')
          };
        })
      })
    })
  }
}
</script>
