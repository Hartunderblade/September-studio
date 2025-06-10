<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
import DiscussProjectModals from "@/features/modals/DiscussProjectModals.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";

import slideImage from '@/assets/images/slide.png'

const scrollPosition = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    scrollPosition.value += 1
    // Если вся картинка прокрутилась — сброс позиции
    const imageWidth = 2000 // замените на реальную ширину изображения в пикселях
    const containerWidth = 800 // ширина контейнера (см. CSS ниже)
    if (scrollPosition.value > imageWidth - containerWidth) {
      scrollPosition.value = 0
    }
  }, 20) // скорость прокрутки (меньше значение — быстрее)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

</script>

<template>
  <div class="about">
    <h1>Этапы</h1>
    <div class="wrapper">
      <h1 class="">работы</h1>
    </div>
    <div class="content">

      <div style="overflow: hidden;" class="slider-container">
        <div class="slider-track" :style="{ transform: `translateX(-${scrollPosition}px)` }">
          <img :src="slideImage" alt="Слайд" />
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

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 200px;
    text-transform: uppercase;
  }
}

.content {
  margin-top: 4rem;
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

@media (max-width: 780px) {
  .wrapper {
    //align-items: center;
    //text-align: center;

    h1 {
      font-size: 54px;
    }
  }

  h1 {
    font-size: 54px;
  }

  .content {
    margin-top: 3rem;
  }

  .item {
    background-color: #fff;
    border: 1px solid #132063;
    padding: 1rem;
    border-radius: 0.4rem;
    max-width: 540px;
  }

  .item__button {
    text-align: start;
    font-size: 1.4rem;
  }
}

@media (max-width: 320px) {

  .wrapper {
    //align-items: center;
    //text-align: center;

    h1 {
      font-size: 54px;
    }
  }

  h1 {
    font-size: 54px;
  }

  .content {
    margin-top: 3rem;
  }

  .items {
    gap: 1rem;
    text-align: start;
  }

  .item {
    padding: 1rem;
    border-radius: 0.2rem;
    max-width: 297px;

    img {
      width: 2rem;
      height: 2rem;
    }

    &__title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    &__desc {
      font-size: 12px;
      max-width: 290px;
      margin-top: 1rem;
    }

    &__price {
      font-size: 22px;
      margin-top: 22px;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 26px;
      text-align: start;
    }
  }
}
</style>