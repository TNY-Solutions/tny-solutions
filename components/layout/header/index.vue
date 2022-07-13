<template>
  <header class="header wow animate__fadeInDown" data-wow-duration="1s">
    <div class="container">
      <a class="header__logo" href="/">
        <img src="/images/Logo.png" alt="TNY Solutions" />
      </a>
      <ul class="header__navigation">
        <li class="header__navigation__item">
          <a href="#about-us">About Us</a>
        </li>
        <li class="header__navigation__item">
          <a href="#services">Services</a>
        </li>
        <li class="header__navigation__item">
          <a href="#careers">Careers</a>
        </li>
        <li class="header__navigation__item">
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    stickyHeader() {
      let header = document.querySelector("header");

      if (window.pageYOffset > 200) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.stickyHeader);
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 44px;
  border-bottom: 1px solid transparent;
  @include transition(all 0.3s ease-in-out);

  &--sticky {
    position: fixed;
    background: #fff;
    inset: 0 auto auto 0;
    width: 100%;
    z-index: 99;
    padding: 20px 0;
    border-bottom-color: #ddd;
  }

  &__logo {
    flex-grow: 1;
    display: flex;
  }

  &__navigation {
    display: flex;
    list-style-type: none;
    gap: 40px;

    & a {
      text-decoration: none;
      font-size: 14px;
      display: block;
      font-weight: 500;
      color: #000;
      border-bottom: 1px solid transparent;
      @include transition(all 0.3s);

      &:hover {
        border-bottom-color: #000;
      }
    }
  }
}

@include mobile {
  .header {
    justify-content: center;

    &__navigation {
      display: none;
    }

    &__logo {
      justify-content: center;
    }
  }
}
</style>
