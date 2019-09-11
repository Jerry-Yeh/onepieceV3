<template>
  <header id="jumbotron">
    <div class="jumbotron bg-white mb-0 d-flex justify-content-center">
      <h2 class="jumbotron__title">WANTED</h2>
      <img class="jumbotron__img" src="@/assets/img/jumbotron-2.png" alt="">
      <h3 class="jumbotron__subtitle">DEAD &nbsp; OR &nbsp; ALIVE</h3>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '~@/assets/utils/variables/color.scss';
@import '~@/assets/utils/_mixin.scss';
@import '~@/assets/utils/variables/font-family.scss';

  .jumbotron {
    position: relative;
    margin-top: 68px;
    font-family: $font-family-primary;
    color: $secondary;
    &__title {
      position: absolute;
      top: 0px;
      font-size: 80px;
      @include mobile {
        font-size: 140px;
      }
    }
    &__img {
      width: 320px;
      margin-top: 25px;
      z-index: 1;
      transition: all .5s;
      @include mobile {
        width: 600px;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    &__subtitle {
      position: absolute;
      top: 265px;
      font-size: 24px;
      letter-spacing: 3px;
      @include mobile {
        font-size: 48px;
        top: 475px;
        letter-spacing: 5px;
      }
    }
  }
</style>
