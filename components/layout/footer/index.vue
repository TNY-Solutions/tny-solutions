<template>
  <footer class="footer wow animate__fadeIn" data-wow-duration="2s">
    <div class="container">
      <a class="footer__logo" href="/">
        <img src="~/assets/images/logo.png" alt="TNY Solutions" />
        <span>
          We are solving your <br />
          problems with tiny solutions.
        </span>
      </a>
      <ul class="footer__navigation">
        <li class="footer__navigation__item footer__navigation__item--title">
          <a href="javasscript: void(0);">Lorem</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Connections</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Protocols</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Personas</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Integrations</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Catalog</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Pricing</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Security</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">GDPR</a>
        </li>
      </ul>
      <ul class="footer__navigation">
        <li class="footer__navigation__item footer__navigation__item--title">
          <a href="javasscript: void(0);">Ipsum</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Docs</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">API</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Open Source</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Engineering Team</a>
        </li>
      </ul>
      <ul class="footer__navigation">
        <li class="footer__navigation__item footer__navigation__item--title">
          <a href="javasscript: void(0);">Ipsum</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Docs</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">API</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Open Source</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Engineering Team</a>
        </li>
      </ul>
      <ul class="footer__navigation">
        <li class="footer__navigation__item footer__navigation__item--title">
          <a href="javasscript: void(0);">Dolor</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Docs</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">API</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Open Source</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Engineering Team</a>
        </li>
      </ul>
      <ul class="footer__navigation">
        <li class="footer__navigation__item footer__navigation__item--title">
          <a href="javasscript: void(0);">Sit Amet</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Help Center</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Contact Us</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Security</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Bulletins</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Documentation</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Partner</a>
        </li>
        <li class="footer__navigation__item">
          <a href="javasscript: void(0);">Portal</a>
        </li>
      </ul>
      <div class="footer__copyright">
        © 2021 - TNY Solutions. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fbfbfb;
  padding: 63px 0 0 0;

  & .container {
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
    color: #000;
    text-decoration: none;

    & img {
      padding-bottom: 24px;
    }
  }

  &__navigation {
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      & a {
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        color: #160637;
        @include transition(all 0.3s);
        border-bottom: 1px solid transparent;

        &:hover {
          border-bottom-color: #000;
        }
      }

      &--title a {
        font-size: 16px;
        font-weight: bold;

        &:hover {
          border-bottom-color: transparent;
        }
      }
    }
  }

  &__copyright {
    font-size: 12px;
    font-weight: 300;
    color: #b9b9b9;
    width: 100%;
    padding: 65px 0 30px 0;
    text-align: center;
  }
}

@include mobile {
  .footer {
    &__logo,
    &__navigation {
      width: 100%;
    }

    &__logo {
      padding-bottom: 30px;
      & img {
        align-self: center;
      }
    }

    &__navigation {
      padding: 15px 0;
    }

    & .container {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>
