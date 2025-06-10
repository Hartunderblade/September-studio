<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import ReviewModal from "@/features/modals/ReviewModal.vue";
</script>

<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <div class="wrapper">
      <div class="content">
<!--        <img class="star" src="@/assets/images/main-star.svg" alt="Star">-->
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
  </div>
</template>

<style scoped lang="scss">
h1 {
  align-items: start;
  font-weight: 600;
  font-size: 200px;
  line-height: 1;
  text-transform: uppercase;
}

.wrapper {
  max-width: 1488px;
  //width: 100%;
  //border: 1px solid red;
  margin-left: auto;

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 200px;
    text-transform: uppercase;
  }
}
  .content {
    margin-top: 4rem;
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
    .wrapper {
      //align-items: center;
      //text-align: center;

      h1 {
        font-size: 54px;
      }
    }

    h1 {
      font-size: 54px;
    }
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
        font-size: 1.3rem;
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
    .wrapper {
      //align-items: center;
      //text-align: center;

      h1 {
        font-size: 54px;
      }
    }

    h1 {
      font-size: 54px;
    }
  }
</style>