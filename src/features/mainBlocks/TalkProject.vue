<script setup>

import DiscussProjectModals from "@/features/modals/DiscussProjectModals.vue";
import {ref} from "vue";
import ReviewModal from "@/features/modals/ReviewModal.vue";
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="project">
    <div class="content">
      <div style="display: flex; flex-wrap: wrap;">
        <div class="left">
          <h2>Давайте вместе <br>
            создадим <br>
            крутой проект! </h2>
          <button @click="openModal">обсудить проект
            <svg width="113" height="14" viewBox="0 0 113 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H112L74.983 13" stroke="#132063" />
            </svg>
          </button>
        </div>
        <img src="@/assets/images/project-baner.jpg" alt="">
      </div>
      <img class="star" src="@/assets/images/main-star.svg" alt="Star">
    </div>
    <DiscussProjectModals v-if="isModalOpen" @close="closeModal"/>
  </div>
</template>

<style scoped lang="scss">

  .project {
    margin: 160px 0;
  }

  .content {
    display: flex;
    align-items: flex-end;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img {
      max-width: 736px;
      max-height: 736px;
      border-radius: 6px;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 128px;

    h2 {
      font-weight: 600;
      font-size: 80px;
    }

    button {
      font-weight: 300;
      font-size: 32px;
      text-transform: uppercase;
      color: #1b33b2;
      display: flex;
      align-items: center;
      column-gap: 2rem;
    }
  }

  .star {
    max-width: 180px;
    max-height: 180px;
    margin-left: 196px;
  }

  @media (max-width: 780px) {
    .project {
      margin: 0 0;
    }

    .star {
      overflow: hidden;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 2rem;

      h2 {
        font-weight: 600;
        font-size: 80px;
      }

      button {
        font-weight: 300;
        font-size: 32px;
        text-transform: uppercase;
        color: #1b33b2;
        display: flex;
        align-items: center;
        column-gap: 2rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 320px) {
    .project {
      margin: 0 0;
    }

    .star {
      overflow: hidden;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 2rem;

      h2 {
        font-weight: 600;
        font-size: 2rem;
      }

      button {
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        color: #1b33b2;
        display: flex;
        align-items: center;
        column-gap: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
</style>