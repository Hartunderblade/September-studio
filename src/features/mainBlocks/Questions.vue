<script setup>
import { ref } from 'vue';
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import ReviewModal from "@/features/modals/ReviewModal.vue";

const items = ref([
  { title: 'Как выбрать веб-студию?', content: 'Да можно. На биржах продаются готовые сайты. Студии, у которых повисли проекты. Они могут \n' + 'адаптировать подходящий дизайн под ваш бизнес со скидкой.  ' },
  { title: 'Сколько стоит сайт и сколько времени его делают?', content: 'В среднем от 120 до 300 т.р. На стоимость влияют пожелания клиента, сложность и объем работ, дополнительные услуги. Без обратной связи, мы не можем сказать точную цену за проект, так как мы не магазин) Один лендинг может стоить 80000, а другой 180000, потому что второй навороченнее, сложнее, больше по объему контента. А если у вас корпоративный сайт на 30 страниц, то очевидно, что он не может стоить 60000. Либо он плохой, шаблонный, без адаптации с видом из 90-х и бесполезный, либо это 400+ тысяч рублей.Content for item 2' },
  { title: 'Важно ли, что веб студия в другом городе?', content: 'Не имеет значения. Веб студии России работают по всей стране с любыми регионами. Мы — не исключение. Один наш сотрудник работает удаленно из Владивостока. Связь выстраивается через skype, e-mail, мессенджеры\n' +
        '\n' +
        'Если клиент находится в том же городе, есть возможность встречи. Но в этом часто нет необходимости. Мы отправляем клиентам видео описания проектов, разборы, демонстрируем графические элементы на кружках и визитках, отправляем макеты с пояснением, и все это сопровождается голосовым общением' },
  { title: 'Можно ли устроиться к вам на работу?', content: 'Мы обучаем начинающих веб-дизайнеров разработчиков на Tilda. Если нужен сотрудник, нанимаем среди тех, кого обучили' },
  { title: 'Как раскрутить сайт или привлечь клиентов?', content: 'Для раскрутки сайта потребуется:\n' +
        '\n' +
        '1. Создать крутой проект\n' +
        '2. Оптимизировать сайт для поисковой выдачи\n' +
        '3. Наладить SEO продвижение\n' +
        '4. Настроить рекламу\n' +
        '5. SERM — репутация в сети — сделать так, чтобы о вас говорили сами.\n' +
        '6. Шаманизм, соцсети и прочие вещи' },
  { title: 'Можно ли купить готовый сайт', content: 'Да, можно\n' +
        '\n' +
        'На биржах продаются готовые сайты\n' +
        '\n' +
        'Студии, у которых повисли проекты. Они могут адаптировать подходящий дизайн под ваш бизнес со скидкой\n' +
        '\n' +
        'У нас редко появляются концепты. В свободное время создаем дизайн, и его можно купить или заказать сайт со скидкой с таким дизайном' }
]);

const toggleItem = (index) => {
  items.value[index].isOpen = !items.value[index].isOpen;
};

console.log(toggleItem)

</script>

<template>
  <div class="questions">
    <h1>FAQ</h1>
    <div class="wrapper">
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
  margin-top: 4rem;

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 200px;
    text-transform: uppercase;
  }
}

  .content {
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
    //padding: 10px;

    p {
      font-size: 1.4rem;
    }
  }

  .accordion-body[style*="display: block"] {
    display: block;
  }

  @media (max-width: 780px) {
    .accordion-body {
      //padding: 10px;

      p {
        font-size: 1rem;
        margin-top: 0.3rem;
      }
    }
    .wrapper {
      //align-items: center;
      //text-align: center;

      margin-top: 3rem;

      h1 {
        font-size: 54px;
      }
    }

    h1 {
      font-size: 54px;
    }

    .content {
      margin-top: 10px;
      margin-left: 0;
    }

    .accordion {
      margin-top: 2rem;
    }

    .accordion-item {
      text-align: start;
    }

    .preface {
      display: flex;
      column-gap: 1rem;

      h3 {
        font-weight: 600;
        font-size: 24px;
        max-width: 900px;
      }
    }

    .accordion-header {
      font-weight: 500;
      font-size: 1.4rem;
      width: 100%;
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
    }

    .preface {

      svg {
        margin-top: 0px;
        display: none;
      }
    }
  }

  @media (max-width: 320px) {
    .wrapper {
      //align-items: center;
      //text-align: center;
      margin-top: 3rem;

      h1 {
        font-size: 54px;
      }
    }

    .accordion {
      margin-top: 3rem;
    }

    h1 {
      font-size: 54px;
    }
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
      font-weight: 500;
      font-size: 1rem;
      width: 100%;
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
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

    .preface {

      svg {
        margin-top: 0px;
        display: none;
      }
    }
  }
</style>