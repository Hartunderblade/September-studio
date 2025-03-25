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
    <MainPageTitle titleTop="наши" titleBottom="услуги"/>
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
  .content {
    margin-top: 240px;
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
</style>