<script setup>
import { ref } from "vue";
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";

const slides = ref([
  {
    title: "Брифинг и ТЗ",
    text: "Определяем цели и задачи сайта, изучаем целевую аудиторию, анализируем конкурентов и состовляем подробное техническое задание, подбираем референсы"
  },
  {
    title: "Договор и предоплата",
    text: "Подписываем договор. Отправляем вам таблицу с указанием дат для каждого этапа работы. Внесение предоплаты 50%"
  },
  {
    title: "Разработка дизайна",
    text: "Презентуем готовый дизайн главной страницы сайта, представляем своё виденение и аргументируем решения. После согласования доделываем остальные страницы"
  },
  {
    title: "Верстка и анимация",
    text: "Верстаем готовый дизайн сайта, собираем страницы, адаптируем под все разрешения и добавляем анимацию"
  },
  {
    title: "Презентация проекта",
    text: "Презентуем готовый проект, описываем каждое своё решение, демонстрируем дизайн на различных носителях для наглядности"
  },
  {
    title: "Утверждение и передача",
    text: "Финальное утверждение и внесение оставшейся суммы. Подключаем домен и выкладываем сайт на сервер, сдаём проект"
  }
]);


</script>

<template>
  <div class="step">
    <MainPageTitle titleTop="этапы" titleBottom="работы"/>
    <div class="content">
      <div class="slider-container">
        <div class="line"></div>
        <div  class="slides">
          <div v-for="(slide, index) in slides" :key="index" class="slide">
            <img class="star" src="@/assets/images/main-star.svg">
            <p class="slide__title">{{ slide.title }}</p>
            <p class="slide__desc">{{ slide.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 200px;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.line {
  width: 100%;
  height: 2px;
  background: #1B33B2;
  position: relative;
  margin-bottom: 2rem;
}

.star {
  position: absolute;
  top: -30px;
  color: #1B33B2;
  font-size: 20px;
  width: 68px;
  height: 68px;
  z-index: 10;
}

.slides {
  display: flex;
  align-items: start;
  column-gap: 5rem;
}

.slide {
  margin-top: 2rem;
  &__title {
    font-weight: 500;
    font-size: 2rem;
  }

  &__desc {
    font-weight: 300;
    font-size: 1.4rem;
    max-width: 480px;
    margin-top: 1rem;
  }
}

</style>