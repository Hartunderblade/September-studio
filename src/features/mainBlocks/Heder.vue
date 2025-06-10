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
    <div class="content">
      <div class="left">
        <h1>СТУДИЯ ВЕБ-ДИЗАЙНА</h1>
        <button class="order__button" @click="openModal" style="">
          <img src="@/assets/icons/add-order.svg">
          <span>нажмите, чтобы оставить заявку</span>
        </button>
      </div>
      <div class="right">
        <div class="socials">
          <img src="@/assets/icons/whatsapp.svg" alt="Whatsapp" />
          <img src="@/assets/icons/telegram.svg" alt="Telegram" />
          <img src="@/assets/icons/vk.svg" alt="Vk" />
          <img src="@/assets/icons/behance.svg" alt="Behance" />
          <img src="@/assets/icons/dribble.svg" alt="Dribble" />
        </div>
        <img class="logo-star" src="@/assets/icons/logo-star.svg" alt="LogoStar" />
      </div>
    </div>
    <DiscussProjectModals v-if="isModalOpen" @close="closeModal" />
    <div class="ellipse">
      <img src="@/assets/icons/elepse.png" alt="Ellipse" />
    </div>
  </header>

</template>

<style scoped lang="scss">

header {
  position: relative;
}

.ellipse {
  position: absolute;
  top: 0;
  left: 3rem;
  z-index: -30;


  img {
    width: 100%;
    height: 1100px;
  }
}

  .content {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .left {
    h1 {
      font-weight: 700;
      font-size: 200px;
      line-height: 113%;
      text-transform: uppercase;
      color: #1e1e1e;
    }
  }

  .order__button {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-align: start;
    margin-top: 200px;

    span {
      font-weight: 400;
      font-size: 22px;
      max-width: 170px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      max-width: 359px;
      max-height: 361px;
    }

  }

  .socials {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    img {
      width: 28px;
      height: 28px;
    }
  }

@media (max-width: 780px) {

  header {

  }

  .content {
  }

  .left {
    h1 {
      font-size: 68px;
      text-align: center;
    }
  }

  .order__button {
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    span {
      font-weight: 400;
      font-size: 22px;
      max-width: 170px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      //display: none;
    }

  }

  .ellipse {
    display: none;
  }

  .logo-star {
    display: none;
  }
}

@media (max-width: 320px) {
  header {

  }

  .content {
  }

  .left {
    h1 {
      font-size: 68px;
      text-align: center;
    }
  }

  .order__button {
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    span {
      font-weight: 400;
      font-size: 22px;
      max-width: 170px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      //display: none;
    }

  }

  .ellipse {
    display: none;
  }

  .logo-star {
    display: none;
  }
}


</style>
