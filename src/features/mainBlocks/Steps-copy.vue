<script setup>
import { ref, onMounted } from "vue";
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
    text: "Презентуем готовый дизайн главной страницы сайта, представляем своё видение и аргументируем решения. После согласования доделываем остальные страницы"
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

const slidesPerPage = 3; // Количество слайдов на одной странице
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % Math.ceil(slides.value.length / slidesPerPage);
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + Math.ceil(slides.value.length / slidesPerPage)) % Math.ceil(slides.value.length / slidesPerPage);
};

onMounted(() => {
  setInterval(nextSlide, 5000); // Автопрокрутка каждые 5 секунд
});

const getCurrentSlides = () => {
  const start = currentIndex.value * slidesPerPage;
  return slides.value.slice(start, start + slidesPerPage);
};
</script>

<template>
  <div class="step">
    <MainPageTitle titleTop="этапы" titleBottom="работы" />
    <div class="content">
      <div class="slider-container">
        <div class="line"></div>
        <div class="slides-wrapper">
          <div class="slides">
            <div v-for="(slide, index) in getCurrentSlides()" :key="index" class="slide">
              <img class="star" src="@/assets/images/main-star.svg">
              <p class="slide__title">{{ slide.title }}</p>
              <p class="slide__desc">{{ slide.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 260px;
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

.slides-wrapper {
  display: flex;
  //align-items: center;
  //justify-content: center;
  position: relative;
}

.slides {
  display: flex;
  column-gap: 5.2rem;
  transition: transform 0.8s ease-in-out;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.slide__title {
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1.6rem;
}

.slide__desc {
  font-weight: 300;
  font-size: 1.4rem;
  max-width: 480px;
  margin-top: 1rem;
}

.star {
  position: absolute;
  top: -66px;
  color: #1B33B2;
  font-size: 20px;
  width: 68px;
  height: 68px;
  z-index: 10;
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
