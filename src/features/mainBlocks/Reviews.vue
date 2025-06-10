<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import ReviewModal from "@/features/modals/ReviewModal.vue";
import DiscussProjectModals from "@/features/modals/DiscussProjectModals.vue";

const isModalOpen = ref(false);
const reviews = ref([]);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const fetchReviews = async () => {
  try {
    const response = await axios.get('http://localhost:3000/reviews/get');
    reviews.value = response.data;
  } catch (error) {
    console.error('Ошибка при загрузке отзывов:', error);
  }
};



const currentIndex = ref(0);

const nextReview = () => {
  if (reviews.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
  }
};

const prevReview = () => {
  if (reviews.value.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length;
  }
};

console.log(nextReview)
onMounted(fetchReviews);
</script>

<template>
  <div class="">
    <h1>Отзывы</h1>
    <div class="wrapper">
      <button class="link" @click="openModal">Оставить отзыв</button>
    </div>
    <div class="content">
      <div class="reviews">
        <div class="review">
          <p class="review__name">
            {{ reviews[currentIndex]?.name }}
          </p>
          <p class="review__comment">
            {{ reviews[currentIndex]?.text }}
          </p>
        </div>
        <div class="count">
          <button @click="prevReview">
            <svg width="81" height="9" viewBox="0 0 81 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81 0.5H0.999998L27.4407 8.5" stroke="#1B33B2" />
            </svg>
          </button>
          <div class="count-num">
            <p>{{ currentIndex + 1 }}</p> <p>/</p> <p>{{ reviews.length }}</p>
          </div>
          <button @click="nextReview">
            <svg width="81" height="9" viewBox="0 0 81 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5H80L53.5593 8.5" stroke="#1B33B2" />
            </svg>
          </button>
        </div>
      </div>
      <img class="star" src="@/assets/images/main-star.svg">
    </div>
    <ReviewModal v-if="isModalOpen" @close="closeModal"/>
  </div>
</template>

<style scoped lang="scss">
h1 {
  align-items: start;
  font-weight: 600;
  font-size: 280px;
  line-height: 1;
  text-transform: uppercase;
}
  .content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .link {
    font-size: 1.2rem;
    text-decoration: underline;
    color: #1B33B2;
    margin-bottom: 0;
  }

  .reviews {
    max-width: 1140px;
  }

  .review {
    &__name {
      font-weight: 600;
      font-size: 48px;
      text-transform: capitalize;
      color: #1b33b2;
      margin-bottom: 1.4rem;
    }

    &__comment {
      font-weight: 300;
      font-size: 20px;
      max-width: 1060px;
    }
  }

  .count {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    column-gap: 40px;

    &-num {
      display: flex;
      align-items: center;
      column-gap: 4px;

      p {
        font-weight: 400;
        font-size: 26px;
        color: #1b33b2;
      }
    }
  }


  @media (max-width: 780px) {
    h1 {
      font-size: 54px;
    }
    .star {
      display: none;
    }

    .link {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

  }

  @media (max-width: 320px) {
    h1 {
      font-size: 54px;
    }
    .content {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      text-align: start;
    }

    .reviews {
      max-width: 296px;
    }

    .review {
      &__name {
        font-size: 20px;
        margin-bottom: 10px;
      }

      &__comment {
        font-size: 12px;
        max-width: 296px;
      }
    }

    .count {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      column-gap: 40px;

      &-num {
        display: flex;
        align-items: center;
        column-gap: 4px;

        p {
          font-weight: 400;
          font-size: 26px;
          color: #1b33b2;
        }
      }
    }

    .star {
      display: none;
    }

    .link {
      margin-bottom: 1rem;
    }
  }
</style>