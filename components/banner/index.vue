<template>
  <section class="banner wow animate__fadeIn" data-wow-duration="1s">
    <div class="container wow animate__fadeIn" data-wow-duration="2s">
      <h1 class="banner__title wow animate__fadeInLeft" data-wow-duration="1s">
        FAST, BEST, <b>ENJOY</b> SOLUTIONS!
      </h1>
      <p class="banner__slogan wow animate__fadeInUp" data-wow-duration="1s">
        We are solving your problems with tiny solutions.
      </p>
      <div class="banner__form wow animate__fadeInUp" data-wow-duration="2s">
        <form>
          <label for="subscribe">Subscribe</label>
          <input
            type="text"
            placeholder="Please enter your email to subscribe our newsletter"
          />
        </form>
      </div>
      <div
        class="banner__box wow animate__fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      ></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  padding-top: 90px;
  background-image: linear-gradient(to bottom, #fff 0%, #fbfbfb 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    inset: auto auto 0 0;
    width: 125%;
    height: 210px;
    background: #fff;
    bottom: -16%;
    display: block;
    position: absolute;
    transform: rotate(-5deg);
  }

  & .container {
    min-height: 570px;
    background-image: url("~assets/images/banner.png");
    background-size: auto contain;
    background-repeat: no-repeat;
    background-position: top right;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  }

  &__box {
    content: "";
    display: block;
    width: 117px;
    height: 111px;
    position: absolute;
    z-index: 9;
    inset: auto auto 100px 100px;
    background-image: url("~assets/images/banner-box.png");
  }

  &__title {
    font-size: 48px;
    font-weight: bold;
    max-width: 470px;
    color: #000;
    margin: 0;
    padding-top: 30px;

    & b {
      color: #35d0ba;
    }
  }

  &__slogan {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #000;
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    max-width: 300px;
    width: 100%;

    & label {
      font-size: 16px;
      font-weight: bold;
      color: #160637;
      padding-bottom: 15px;
    }

    & input {
      width: 100%;
      height: 40px;
      padding: 0 15px;
      box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.05);
      font-size: 12px;
      color: #8989a2;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
}

@include mobile {
  .banner {
    padding-top: 45px;

    & .container {
      background-image: url("~assets/images/banner-mobile.png");
      align-items: center;
    }

    &__slogan,
    &__title {
      text-align: center;
    }

    &__box {
      display: none;
    }

    &__form {
      max-width: 100%;
      padding-top: 0;
    }

    & form {
      display: flex;
      flex-direction: column;
      padding-top: 0;
      max-width: 100%;

      & input {
        width: unset;
      }

      & label {
        text-align: center;
      }
    }
  }
}
</style>
