<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import DiscussProjectModals from "@/features/modals/DiscussProjectModals.vue";
import {ref} from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="about">
    <h1>Наши</h1>
    <div class="wrapper">
      <h1 class="">услуги</h1>
    </div>
    <div class="content">
      <div class="items">
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <h3 class="item__title">лендинг/ <br> одностраничный сайт</h3>
          <p class="item__desc">Удобная подача информации по полочкам
            для ваших клиентов. Весь фокус направлен
            на один продукт или услугу, ведёт к конкретному
            действию. Идеальный инструмент
            для рекламного трафика</p>
          <p class="item__desc">Отличительная особенность - наиболее высокая
            конверсия, одно целевое действие. Конверсия
            зависит от маркетинговой упаковки
            и востребованности услуги</p>
          <p class="item__price">От 16 000 ₽</p>
          <button @click="openModal" class="item__button">
            заказать лендинг <br>
            одностраничник
            <svg width="113" height="10" viewBox="0 0 113 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H112L74.983 9" stroke="#1B33B2" />
            </svg>
          </button>
        </div>
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <h3 class="item__title">лендинг/ <br> одностраничный сайт</h3>
          <p class="item__desc">Удобная подача информации по полочкам
            для ваших клиентов. Весь фокус направлен
            на один продукт или услугу, ведёт к конкретному
            действию. Идеальный инструмент
            для рекламного трафика</p>
          <p class="item__desc">Отличительная особенность - наиболее высокая
            конверсия, одно целевое действие. Конверсия
            зависит от маркетинговой упаковки
            и востребованности услуги</p>
          <p class="item__price">От 16 000 ₽</p>
          <button @click="openModal" class="item__button">
            заказать лендинг <br>
            одностраничник
            <svg width="113" height="10" viewBox="0 0 113 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H112L74.983 9" stroke="#1B33B2" />
            </svg>
          </button>
        </div>
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <h3 class="item__title">лендинг/ <br> одностраничный сайт</h3>
          <p class="item__desc">Удобная подача информации по полочкам
            для ваших клиентов. Весь фокус направлен
            на один продукт или услугу, ведёт к конкретному
            действию. Идеальный инструмент
            для рекламного трафика</p>
          <p class="item__desc">Отличительная особенность - наиболее высокая
            конверсия, одно целевое действие. Конверсия
            зависит от маркетинговой упаковки
            и востребованности услуги</p>
          <p class="item__price">От 16 000 ₽</p>
          <button @click="openModal" class="item__button">
            заказать лендинг <br>
            одностраничник
            <svg width="113" height="10" viewBox="0 0 113 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H112L74.983 9" stroke="#1B33B2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <DiscussProjectModals v-if="isModalOpen" @close="closeModal"/>
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
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .item {
    background-color: #fff;
    border: 1px solid #132063;
    padding: 2rem;
    border-radius: 0.4rem;
    max-width: 540px;

    img {
      width: 3rem;
      height: 3rem;
    }

    &__title {
      font-weight: 400;
      font-size: 2rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    &__desc {
      font-weight: 300;
      font-size: 22px;
      max-width: 531px;
      margin-top: 1rem;
    }

    &__price {
      font-weight: 400;
      font-size: 28px;
      margin-top: 3rem;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 300;
      font-size: 26px;
      text-transform: uppercase;
      margin-top: 40px;
      width: 100%;
    }
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
    margin-top: 3rem;
  }

  .item {
    background-color: #fff;
    border: 1px solid #132063;
    padding: 1rem;
    border-radius: 0.4rem;
    max-width: 540px;
  }

  .item__button {
    text-align: start;
    font-size: 1.4rem;
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

    .content {
      margin-top: 3rem;
    }

    .items {
      gap: 1rem;
      text-align: start;
    }

    .item {
      padding: 1rem;
      border-radius: 0.2rem;
      max-width: 297px;

      img {
        width: 2rem;
        height: 2rem;
      }

      &__title {
        font-size: 20px;
        margin-bottom: 10px;
      }

      &__desc {
        font-size: 12px;
        max-width: 290px;
        margin-top: 1rem;
      }

      &__price {
        font-size: 22px;
        margin-top: 22px;
      }

      &__button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        margin-top: 26px;
        text-align: start;
      }
    }
  }
</style>