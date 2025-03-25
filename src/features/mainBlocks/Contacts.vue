<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
</script>

<template>
  <div class="contacts">
    <MainPageTitle titleTop="свяжитесь" titleBottom="с нами"/>
    <div class="content">
      <img class="star" src="@/assets/images/main-star.svg" alt="Star">
      <div class="items">
        <div class="item">
          <p>Почта</p>
          <h3>september@web.ru</h3>
        </div>
        <div class="item">
          <p>Телефон</p>
          <h3>+79812345678</h3>
        </div>
        <div class="item">
          <p>Время работы</p>
          <h3>Пн-Пт 10:00 - 18:00 по МСК
            Сб, Вс - выходные</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 240px;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    justify-content: space-between;
  }

  .items {
    max-width: 1488px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid #adb3d6;
    padding-bottom: 2rem;

    p {
      font-weight: 300;
      font-size: 2rem;
      color: #1e1e1e;
    }

    h3 {
      font-weight: 400;
      font-size: 4rem;
      color: #1b33b2;
      max-width: 806px;
    }
  }

  .star {
    max-width: 180px;
    max-height: 180px;
  }

  @media (max-width: 780px) {
    .content {
      margin-top: 2rem;
      align-items: start;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: start;
      border-bottom: 1px solid #adb3d6;
      padding-bottom: 0.8rem;
      text-align: start;

      p {
        font-weight: 300;
        font-size: 1rem;
        color: #1e1e1e;
        width: 100%;
      }

      h3 {
        font-weight: 400;
        font-size: 2rem;
        color: #1b33b2;
        max-width: 806px;
      }
    }

    .star {
      max-width: 3rem;
      max-height: 3rem;
      margin-bottom: 1.6rem;
    }
  }

  @media (max-width: 320px) {

  }
</style>