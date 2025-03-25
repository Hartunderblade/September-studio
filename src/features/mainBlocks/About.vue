<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
</script>

<template>
  <div class="about">
    <MainPageTitle titleTop="О веб-" titleBottom="студии"/>
    <div class="content">
      <p class="content__description"><span style="font-weight: 500; text-transform: uppercase;">September</span> — это команда талантливых дизайнеров, разработчиков и маркетологов, объединенных общим стремлением к совершенству</p>
      <div style="display: flex; flex-wrap: wrap; column-gap: 86px; align-items: start; margin-top: 4rem;">
        <div class="benefits">
          <div class="benefit">
            <p class="benefit__number">00</p>
            <p class="benefit__text">негативных отзывов за все время работы</p>
          </div>
          <div class="benefit">
            <p class="benefit__number">97</p>
            <p class="benefit__text">процентов заказчиков были довольны работой</p>
          </div>
          <div class="benefit">
            <p class="benefit__number">48</p>
            <p class="benefit__text">реализованных проекта за 4 года</p>
          </div>
          <div class="benefit">
            <p class="benefit__number">22</p>
            <p class="benefit__text">место в топ-50 рф более чем по 22 срезам</p>
          </div>
        </div>
        <img style="max-width: 736px; max-height: 647px;" src="@/assets/images/about.jpg" alt="О нас">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 240px;
    margin-left: 376px;

    &__description {
      font-weight: 300;
      font-size: 24px;
      text-transform: lowercase;
      max-width: 656px;
    }
  }

  .benefits {
    width: 666px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 136px;
    row-gap: 2rem;
  }

  .benefit {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 258px;
    
    &__number {
      font-weight: 500;
      font-size: 48px;
      text-transform: uppercase;
    }

    &__text {
      font-weight: 300;
      font-size: 1.1rem;
      text-transform: lowercase;
    }
  }

  @media (max-width: 780px) {
    .about {
      margin-top: 3rem;
    }

    .content {
      margin-top: 0;
      margin-left: 0;

      &__description {
        font-weight: 300;
        font-size: 24px;
        text-transform: lowercase;
        max-width: 656px;
        margin-top: 2rem;
      }
    }

    .benefits {
      text-align: start;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 320px) {
    .about {
      margin-top: 3rem;
    }

    .content {
      margin-top: 0;
      margin-left: 0;

      &__description {
        font-weight: 300;
        font-size: 12px;
        text-transform: lowercase;
        max-width: 656px;
        margin-top: 2rem;
      }
    }
  }

</style>