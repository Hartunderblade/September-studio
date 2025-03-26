<script setup>
import { ref } from 'vue';
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";

const items = ref([
  { title: 'Как выбрать веб-студию?', content: 'Да можно. На биржах продаются готовые сайты. Студии, у которых повисли проекты. Они могут \n' + 'адаптировать подходящий дизайн под ваш бизнес со скидкой.  ' },
  { title: 'Сколько стоит сайт и сколько времени его делают?', content: 'Content for item 2' },
  { title: 'Важно ли, что веб студия в другом городе?', content: 'Content for item 3' },
  { title: 'Можно ли устроиться к вам на работу?', content: 'Content for item 3' },
  { title: 'Как заказать сайт  и что требуется?', content: 'Content for item 3' },
  { title: 'Можно ли купить готовый сайт', content: 'Content for item 3' }
]);

const toggleItem = (index) => {
  items.value[index].isOpen = !items.value[index].isOpen;
};

console.log(toggleItem)

</script>

<template>
  <div class="questions">
    <MainPageTitle titleTop="FAQ" titleBottom=""/>
    <div class="content">
      <div class="preface">
        <svg width="132" height="4" viewBox="0 0 132 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H130" stroke="black" stroke-width="4" stroke-linecap="round" />
        </svg>
        <h3>Мы собрали список частых вопросов по разработке и созданию сайтов, которые задают 75% клиентов</h3>
      </div>
      <div class="accordion">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="accordion-item"
        >
          <button class="accordion-header" @click="toggleItem(index)">
            {{ item.title }}
            <svg width="81" height="9" viewBox="0 0 81 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5H80L53.5593 8.5" stroke="#1B33B2" />
            </svg>
          </button>
          <div v-if="item.isOpen" class="accordion-body">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 10px;
    margin-left: 376px;
  }

  .preface {
    display: flex;
    column-gap: 1rem;

    h3 {
      font-weight: 600;
      font-size: 3rem;
      max-width: 900px;
    }

    svg {
      margin-top: 32px;
    }
  }

  .accordion {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    margin-top: 128px;
  }

  .accordion-item {
    border-bottom: 1px solid #adb3d6;
    padding: 0 0 1rem 0;
  }

  .accordion-header {
    font-weight: 500;
    font-size: 2rem;
    width: 100%;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .accordion-body {
    padding: 10px;

    p {
      font-size: 1.4rem;
    }
  }

  .accordion-body[style*="display: block"] {
    display: block;
  }

  @media (max-width: 780px) {
    .content {
      margin-top: 10px;
      margin-left: 0;
    }

    .accordion-item {
      text-align: start;
    }

    .preface {
      display: flex;
      column-gap: 1rem;

      h3 {
        font-weight: 600;
        font-size: 2rem;
        max-width: 900px;
      }
    }
  }

  @media (max-width: 320px) {
    .content {
      margin-top: 5rem;
      margin-left: 0;
    }

    .preface {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      h3 {
        font-size: 12px;
        max-width: 224px;
      }

      svg {
        display: none;
      }
    }

    .accordion {
      row-gap: 1rem;
      margin-top: 2rem;
    }

    .accordion-item {
      border-bottom: 1px solid #adb3d6;
      padding: 0 0 0 0;
    }

    .accordion-header {
      font-size: 1rem;
    }

    .accordion-body {
      padding: 0;

      p {
        font-size: 0.9rem;
      }
    }
  }
</style>