<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="p-2 d-flex justify-content-between flex-column flex-sm-row">
        <p class="text-center mb-1">僅為個人練習使用，不做任何商業用途</p>
        <div class="footer__icons d-flex justify-content-center">
          <a class="footer__icons__icon" href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a class="footer__icons__icon" href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a class="footer__icons__icon" href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '@/assets/utils/variables/color.scss';

  .footer {
    width: 100%;
    height: 100px;
    &__content {
      border-top: 3px solid $secondary;
    }
    &__icons {
      font-size: 36px;
      &__icon {
        color: rbga(0, 0, 0, 0.7);
        margin-right: 10px;
      }
    }
  }
</style>
