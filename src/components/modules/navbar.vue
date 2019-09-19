<template>
  <div class="fixed-top navbar__bg">
    <div class="container">
      <nav class="navbar navbar-expand-lg p-0">
        <div class="w-100 d-flex justify-content-between py-1 d-lg-none">
          <router-link to="/">
            <img class="navbar__img" src="@/assets/img/logo-3.png" alt="">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 d-flex justify-content-around align-items-center">
            <li class="navbar__item">
              <router-link class="navbar__link text-secondary" to="/">
                <strong>Home</strong>
              </router-link>
            </li>
            <li class="navbar__item">
              <router-link class="navbar__link text-secondary" to="/wanted">
                <strong>Wanted</strong>
              </router-link>
            </li>
            <li class="d-none d-lg-block">
              <router-link to="/">
                <img class="navbar__img" src="@/assets/img/logo-3.png" alt="">
              </router-link>
            </li>
            <li class="navbar__item">
              <router-link class="navbar__link text-secondary" to="/list">
                <strong>List</strong>
              </router-link>
            </li>
            <li class="navbar__item">
              <router-link class="navbar__link text-secondary" to="/login">
                <strong>Login</strong>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~@/assets/utils/_mixin.scss';
  @import '~@/assets/utils/variables/color.scss';

  .navbar {
    &__bg {
      background-color: $light;
      transition: all .5s;
      @include desktop {
        background-color: transparent;
      }
      &--color {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    &__img {
      width: 100px;
    }
    &__item {
      width: 80px;
      text-align: center;
      transition: all .5s;
      position: relative;
    }
    &__link {
      padding: 15px 0;
      display: block;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 3px solid $secondary;
        width: 0;
        transition: .5s;
      }
      &:hover {
        &::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
</style>

<script>
/* global $ */

export default {
  created () {
    $(window).scroll(() => {
      let navPos = $('.navbar').offset().top
      let windowWidth = $(window).width()
      if (navPos > 0 && windowWidth > 992) {
        $('.navbar__bg').addClass('navbar__bg--color')
      } else {
        $('.navbar__bg').removeClass('navbar__bg--color')
      }
    })
  }
}
</script>
