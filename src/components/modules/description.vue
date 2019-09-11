<template>
  <section id="description" class="description">
    <div class="container mt-3">
      <div>
        <div>
          <div>
            <h2 class="mb-2 text-center">
              <span class="description__title">你準備好為了賞金而戰了嗎 !?</span>
            </h2>
            <p class="mb-3 mb-sm-5 text-center">
              世界政府為這些窮凶惡極的海賊發布了懸賞，懸賞金額根據罪刑、影響力與實力而有所不同
            </p>
          </div>
        </div>
      </div>
      <div class="row mb-5 align-items-center position-relative">
        <div class="description__bg d-none d-sm-block description__bg--left"></div>
        <div class="col-sm-4 mb-1 mb-sm-0">
          <div class="animatedL text-center">
            <h3 class="mb-1 mb-sm-2 ">
              <span class="description__subtitle">罪刑</span>
            </h3>
            <p class="bg--content">被懸賞者所犯下的罪刑與對人民的威脅，也代表邪惡程度</p>
          </div>
        </div>
        <div class="col-sm-8 position-relative animatedR">
          <img class="w-100 " src="@/assets/img/description-kid.png" alt="">
          <div class="masked__bg"></div>
          <div class="masked masked--crime d-flex justify-content-end">
            <h4 class="masked__text masked__text--vertical">CRIME</h4>
          </div>
        </div>
      </div>
      <div class="row mb-5 align-items-center position-relative flex-column-reverse flex-sm-row">
        <div class="description__bg d-none d-sm-block description__bg--right"></div>
        <div class="col-sm-8 animatedL">
          <img class="w-100" src="@/assets/img/description-doragan.png" alt="">
          <div class="masked__bg"></div>
          <div class="masked masked--influence d-flex justify-content-center">
            <h4 class="masked__text">INFLUENCE</h4>
          </div>
        </div>
        <div class="col-sm-4 mb-1 mb-sm-0">
          <div class="animatedR text-center">
            <h3 class="mb-1 mb-sm-2">
              <span class="description__subtitle">影響力</span>
            </h3>
            <p>被懸賞者具備特殊的能力與地位，意味著對世界政府造成的威脅程度</p>
          </div>
        </div>
      </div>
      <div class="row mb-3 align-items-center position-relative">
        <div class="description__bg d-none d-sm-block description__bg--left"></div>
        <div class="col-sm-4 mb-1 mb-sm-0">
          <div class="animatedL text-center">
            <h3 class="mb-1 mb-sm-2 ">
              <span class="description__subtitle">實力</span>
            </h3>
            <p>被懸賞者所具備的個人戰力，是影響懸賞金最重要的因素</p>
          </div>
        </div>
        <div class="col-sm-8 animatedR">
          <img class="w-100" src="@/assets/img/description-luffy.png" alt="">
          <div class="masked__bg"></div>
          <div class="masked masked--strength d-flex justify-content-center align-items-end">
            <h4 class="masked__text">STRENGTH</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~@/assets/utils/_mixin.scss';
  @import '~@/assets/utils/variables/color.scss';

  .description {
    overflow: hidden;
    &__title {
      font-weight: bold;
      border: 1px solid black;
      padding: 4px 8px;
      transition: all .5s;
      font-size: 18px;
      @include mobile {
        font-size: 28px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
      }
    }
    &__subtitle {
      font-weight: bold;
      border: 1px solid black;
      padding: 4px 8px;
      transition: all .5s;
      font-size: 16px;
      @include mobile {
        font-size: 20px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
      }
    }
    &__bg {
      width: 100%;
      height: 70%;
      position: absolute;
      &--left {
        background-image: linear-gradient(right, rgba(0, 0, 0, 0.1) 20%, transparent 70%);
        transform: translateX(-50%);
      }
      &--right {
        background-image: linear-gradient(left, rgba(0, 0, 0, 0.1) 20%, transparent 70%);
        transform: translateX(50%);
      }
    }
    .animatedR {
      opacity: 0;
      transform: translateX(300px);
      transition: all 1.5s;
    }
    .animatedL {
      opacity: 0;
      transform: translateX(-300px);
      transition: all 1.5s;
    }
    .fadeInX {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .masked {
    top: 0;
    left: 10px;
    width: calc(100% - 20px);
    height: 100%;
    &--crime {
      @include text-masked('../../assets/img/description-kid.png');
    }
    &--influence {
      @include text-masked('../../assets/img/description-doragan.png');
    }
    &--strength {
      @include text-masked('../../assets/img/description-luffy.png');
    }
    &__bg {
      background-color: rgba(255, 255, 255, 0.4);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 10px;
      width: calc(100% - 20px);
    }
    &__text {
      font-size: 65px;
      font-weight: bold;
      @include tablet {
        font-size: 85px;
      }
      @include desktop {
        font-size: 115px;
      }
      &--vertical {
        writing-mode: vertical-lr;
      }
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

        $('.animatedR').each(function () {
          let thisPos = $(this).offset().top
          if ((scrollPos + windowHeight) >= thisPos) {
            $(this).addClass('fadeInX')
          }
        })
        $('.animatedL').each(function () {
          let thisPos = $(this).offset().top
          if ((scrollPos + windowHeight) >= thisPos) {
            $(this).addClass('fadeInX')
          }
        })
      })
    })
  }
}
</script>
