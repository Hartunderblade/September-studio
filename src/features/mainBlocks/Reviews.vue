<script setup>
import { ref } from 'vue';
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import ReviewModal from "@/features/modals/ReviewModal.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const reviews = ref([
  {
    name: 'Юрий Маркин',
    text: 'Недавно я обратился в студию September для редизайна своего сайта, который' +
        'посвящен транспортным перевозкам. Мы долго искали команду, которая могла бы не только' +
        'обновить внешний вид сайта, но и улучшить его функциональность. Мы решили внедрить стиль' +
        'bento grid, который, как мне казалось, будет идеальным решением для организации информации' +
        'о наших услугах и маршрутах. С самого первого общения меня приятно удивила профессиональность' +
        'и креативность команды. Они выслушали все мои пожелания и идеи, предложили множество вариантов' +
        'и концепций, что позволило нам обсудить каждый элемент дизайна. Я вполне доволен результатом' +
        'работы и с уверенностью могу рекомендовать студию September всем, кто ищет качественный редизайн' +
        'своего сайта. Это команда настоящих профессионалов, которые понимают нужды клиента и готовы' +
        'предложить лучшие решения!'
  },
  {
    name: 'Анна Петрова',
    text: 'Отличная команда, которая помогла мне создать сайт мечты! Очень довольна результатом.'
  },
  {
    name: 'Иван Смирнов',
    text: 'Быстро, качественно, профессионально. Буду обращаться ещё!'
  }
]);

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

</script>

<template>
  <div class="">
    <div style="display: flex; justify-content: space-between;">
      <MainPageTitle titleTop="отзывы" titleBottom=""/>
      <button @click="openModal" style="font-size: 1.2rem; text-decoration: underline; color: #1B33B2; margin-bottom: 14rem;">Оставить отзыв</button>
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
      <img src="@/assets/images/main-star.svg">
    </div>
    <ReviewModal v-if="isModalOpen" @close="closeModal"/>
  </div>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: end;
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
</style>