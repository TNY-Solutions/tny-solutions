<template>
  <section class="boxes">
    <div class="container">
      <ul class="boxes__list">
        <li class="boxes__list__item">
          <div
            class="boxes__list__item__left wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <h4>What We Do?</h4>
            <p>
              With years of experience in digital transformation, we help
              leading companies create easy-to-use, beautiful and robust digital
              experiences for a new generation of customers.
            </p>
            <p>
              We execute a strategic approach for your objectives in all areas
              that your brand interacts with people. We create the strategic
              approach with an holistic point of view, and offer solutions
              covering a wide range from design to software and social media to
              production.
            </p>
          </div>
          <div
            class="boxes__list__item__right boxes__list__item__right--what__we__do wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <img src="~assets/images/what-we-do.jpg" alt="What We Do" />
          </div>
        </li>
        <li class="boxes__list__item">
          <div
            class="boxes__list__item__left boxes__list__item__left--flip boxes__list__item__left--our__culture wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <img src="~assets/images/our-culture.jpg" alt="Our Culture" />
          </div>
          <div
            class="boxes__list__item__right boxes__list__item__right--flip wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <h4>Our Culture</h4>
            <p>
              Great things happen when you step out of your comfort zone. At
              TNY, we’re not just building amazing tech for marketers, we’re
              building a culture that inspires us all to dream bigger and leave
              a positive impact on everything we touch. Ready to disrupt?
            </p>
          </div>
        </li>
        <li class="boxes__list__item">
          <div
            class="boxes__list__item__left wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <h4>Why TNY</h4>
            <p>
              Our top priority for all our customers we serve is not to
              compromise on our culture and mission. As TNY team, we do our job
              with love and respect. What we're staying true to the highest
              quality and universal standards to be in every project
            </p>
          </div>
          <div
            class="boxes__list__item__right boxes__list__item__right--why__tny wow animate__fadeIn"
            data-wow-duration="3s"
          >
            <img src="~assets/images/why-tny.jpg" alt="What We Do" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.boxes {
  &__list {
    list-style-type: none;
    width: 100%;
    padding: 0;

    &__item {
      padding: 125px 0;
      display: flex;
      align-items: center;

      &__left {
        max-width: 475px;
        position: relative;

        &--flip {
          max-width: unset;
        }

        & img {
          position: relative;
          z-index: 9;
          border-radius: 16px;
          overflow: hidden;
        }

        &--our__culture::before {
          content: "";
          display: block;
          width: 135px;
          height: 131px;
          background-image: url("~assets/images/our-culture-box-1.png");
          position: absolute;
          inset: -65px auto auto -75px;
        }

        &--our__culture::after {
          content: "";
          display: block;
          width: 123px;
          height: 120px;
          background-image: url("~assets/images/our-culture-box-2.png");
          position: absolute;
          inset: auto -40px -80px auto;
          z-index: 10;
        }
      }

      &__right {
        flex-grow: 1;
        padding-left: 97px;
        position: relative;

        &--flip {
          max-width: 475px;
        }

        & img {
          position: relative;
          z-index: 9;
          border-radius: 16px;
          overflow: hidden;
        }

        &--what__we__do::before {
          content: "";
          display: block;
          width: 93px;
          height: 95px;
          background-image: url("~assets/images/what-we-do-box-2.png");
          position: absolute;
          inset: -50px 30px auto auto;
          z-index: 10;
        }

        &--what__we__do::after {
          content: "";
          display: block;
          width: 143px;
          height: 131px;
          background-image: url("~assets/images/what-we-do-box-1.png");
          position: absolute;
          inset: auto auto -75px 15px;
        }

        &--why__tny::before {
          content: "";
          display: block;
          width: 194px;
          height: 198px;
          background-image: url("~assets/images/why-tny-box-1.png");
          position: absolute;
          inset: -75px 0px auto auto;
        }

        &--why__tny::after {
          content: "";
          display: block;
          width: 82px;
          height: 75px;
          background-image: url("~assets/images/why-tny-box-2.png");
          position: absolute;
          inset: auto auto -35px 55px;
          z-index: 10;
        }
      }

      & h4 {
        font-size: 32px;
        padding: 0;
        font-weight: bold;
        line-height: 1.25;
        color: #160637;
        margin: 0 0 24px 0;
      }

      & p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        color: #8989a2;
      }
    }
  }
}

@include mobile {
  .boxes {
    margin-top: -75px;

    &__list {
      &__item {
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        & h4 {
          margin: 24px 0;
        }

        &:first-child {
          flex-direction: column-reverse;
        }

        &__left {
          &::before,
          &::after {
            display: none;
            content: unset;
          }
        }

        &__right {
          padding-left: 0;

          &::before,
          &::after {
            display: none;
            content: unset;
          }
        }
      }
    }
  }
}
</style>
