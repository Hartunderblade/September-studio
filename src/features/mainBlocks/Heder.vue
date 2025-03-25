<script setup>
import { ref } from 'vue';
import '@/assets/styles/mainPage.scss';
import MainNavigation from "@/features/nav/mainNavigation.vue";
import DiscussProjectModals from "@/features/modals/DiscussProjectModals.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <header>
    <nav>
      <MainNavigation/>
    </nav>
    <div class="title">
      <h1 class="title__top">Студия Веб-</h1>
      <h1 class="title__bottom">дизайна</h1>
    </div>
<!--    <img class="star" src="@/assets/images/star-header.svg" alt="Studio September" />-->
    <div class="socials">
      <div class="item-socials">
        <img src="@/assets/icons/whatsapp.svg" alt="Whatsapp" />
        <img src="@/assets/icons/telegram.svg" alt="Telegram" />
        <img src="@/assets/icons/vk.svg" alt="Vk" />
      </div>
      <div class="item-order">
        <button @click="openModal" style="width: 300px; display: flex; flex-direction: column; row-gap: 1rem; align-items: center; font-weight: 400; font-size: 22px; text-align: center;">
          <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="84" height="84" rx="5" stroke="#1B33B2" stroke-width="2" />
            <path d="M56 43.0001L43 43.0001M43 43.0001L30 43.0001M43 43.0001L43 30M43 43.0001L43 56" stroke="#1B33B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          нажмите, чтобы оставить <br> заявку
        </button>
      </div>
      <div class="item-socials">
        <img src="@/assets/icons/whatsapp.svg" alt="Whatsapp" />
        <img src="@/assets/icons/telegram.svg" alt="Telegram" />
        <img src="@/assets/icons/vk.svg" alt="Vk" />
      </div>
    </div>
    <DiscussProjectModals v-if="isModalOpen" @close="closeModal" />
  </header>

</template>

<style scoped lang="scss">
.title {
  max-width: 1622px;
  width: 100%;
  height: 544px;
  position: relative;

  &__top {
    font-weight: 600;
    font-size: 240px;
    text-transform: uppercase;
  }

  &__bottom {
    font-weight: 600;
    font-size: 240px;
    text-transform: uppercase;
    position: absolute;
    top: 17rem;
    left: 330px;
  }

}

.socials {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 7rem;
}

.item-socials {
  display: flex;
  column-gap: 1rem;
}

.star {
  position: absolute;
  right: 0;
  top: 0;
}

@media (max-width: 780px) {
  .title {
    max-width: 1722px;
    width: 100%;
    height: 400px;
    text-align: center;
    position: relative;

    &__top {
      width: 100%;
      font-weight: 600;
      font-size: 100px;
    }

    &__bottom {
      font-weight: 600;
      font-size: 100px;
      position: absolute;
      top: 7rem;
      left: 0;
    }

  }

  .socials {
    margin-top: 0;
  }
}

@media (max-width: 320px) {
  .title {
    max-width: 1722px;
    width: 100%;
    height: 300px;
    text-align: center;
    position: relative;

    &__top {
      font-size: 60px;
    }

    &__bottom {
      font-size: 60px;
      position: absolute;
      top: 7rem;
      left: 0;
    }

  }

  .socials {
    margin-top: 0;
  }
}
</style>
