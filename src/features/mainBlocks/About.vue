<script setup>
</script>

<template>
  <div class="contents">
    <h1>О веб-</h1>
    <div class="wrapper">
      <h1 class="">СТУДИИ</h1>
      <p class="about__description"><span>September</span> — это команда талантливых дизайнеров, разработчиков и
        маркетологов, объединенных общим стремлением к совершенству</p>
      <div class="about">
        <div class="about-block">
          <img class="about-block__img" src="@/assets/images/about.jpg" alt="О нас">
        </div>
        <div class="benefits">
          <div class="benefits-item">
            <div class="benefit">
              <p class="benefit__number">00</p>
              <p class="benefit__text">негативных отзывов за все время работы</p>
            </div>
            <div class="benefit">
              <p class="benefit__number">97</p>
              <p class="benefit__text">процентов заказчиков были довольны работой</p>
            </div>
          </div>
          <div class="benefits-item">
            <div class="benefit">
              <p class="benefit__number">48</p>
              <p class="benefit__text">реализованных проекта за 4 года</p>
            </div>
            <div class="benefit">
              <p class="benefit__number">22</p>
              <p class="benefit__text">место в топ-50 рф более чем по 22 срезам</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contents {
  margin-top: 100px;
}
h1 {
  align-items: start;
  font-weight: 600;
  font-size: 200px;
  line-height: 1;
  text-transform: uppercase;
}

.wrapper {
  max-width: 1488px;
  width: 100%;
  //border: 1px solid red;
  margin-left: auto;

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 200px;
    text-transform: uppercase;
  }


}



.about__description {
  font-size: 24px;
  margin-top: 4rem;
  max-width: 630px;

  span {
    font-weight: 500;
    text-transform: uppercase;
  }
}

.about-block__img {
  width: 100%;
  height: auto;
}

.about {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  &-block {
    display: flex;
    flex-direction: column;
    row-gap: 57px;

    &__img {
      max-width: 736px;
      max-height: 647px;
    }

    &__button {
      font-weight: 300;
      font-size: 2rem;
      line-height: 112%;
      text-transform: uppercase;
      color: #1b33b2;
      text-align: start;
    }
  }
}

.benefits {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  &-item {
    display: flex;
    column-gap: 5rem;
  }
}

.benefit {
  max-width: 260px;
  display: flex;
  column-gap: 1rem;
  align-items: center;

  &__number {
    font-weight: 500;
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
  }

  &__text {
    font-weight: 300;
    font-size: 16px;
    text-transform: lowercase;
  }
}

@media (max-width: 780px) {

  .contents {
    margin-top: 4rem;
  }

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 54px;
  }

  .wrapper {

    h1 {
      align-items: start;
      font-weight: 600;
      font-size: 54px;
    }


  }

  .about {
    margin-top: 2rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .content {
    margin-top: 0;
    margin-left: 0;

    &__description {
      font-size: 12px;
      max-width: 244px;
      margin-top: 2rem;
    }
  }

  .benefits {
    text-align: start;
    margin-bottom: 1rem;
  }

  .about-block__img {
    //max-width: 296px;
    //max-height: 257px;
  }

  .benefits {
    display: flex;
    flex-direction: column;
    row-gap: 0;


    &-item {
      display: flex;
      flex-direction: column;
      column-gap: 0;
    }
  }
}

@media (max-width: 320px) {

  .contents {
    margin-top: 4rem;
  }

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 54px;
  }

  .wrapper {

    h1 {
      align-items: start;
      font-weight: 600;
      font-size: 54px;
    }
  }

  .about {
    margin-top: 3rem;
  }

  .content {
    margin-top: 10rem;
    margin-left: 0;

    &__description {
      font-size: 12px;
      max-width: 244px;
      margin-top: 2rem;
    }
  }

  .benefits {
    width: 210px;
    row-gap: 1rem;
    align-items: center;
  }

  .benefit {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    //width: 258px;

    &__number {
      font-size: 2rem;
    }

    &__text {
      font-size: 14px;
    }
  }

  .about-img {
    width: 296px;
    height: 257px;
  }

  .block {
    align-items: center;
  }

  .about-block__img {
    //width: 296px;
    //height: 257px;
  }

}

</style>