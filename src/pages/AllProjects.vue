<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="mr">
    <button @click="router.push('/user')">
      Вернуться на главную
      <svg width="70" height="15" viewBox="0 0 70 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H70L46.8644 15" stroke="#1B33B2" />
      </svg>
    </button>
    <div class="wrapper">
      <div class="projects">
        <div class="info">
          <div class="about">
            <h2>Разработка сайта <br>
              для студии интерьеров</h2>
            <div class="items">
              <div class="item">
                <p>аналитика и исследование ниши</p>
                <p>Информационная архитектура</p>
                <p>прототип</p>
              </div>
              <div class="item">
                <p>дизайн</p>
                <p>верстка</p>
                <p>продвижение</p>
              </div>
            </div>
          </div>
          <img class="info__cover" src="@/assets/images/page-2.png" alt="">
        </div>
        <p class="projects__description">Сайт студии интерьеров "InHouse" был создан для представления услуг и проектов компании в интернете —
          как профессионального портфолио и удобного канала связи с клиентами. Разработка началась с анализа целевой аудитории и проектирования удобной
          структуры, включающей портфолио, описание услуг, информацию о студии и форму обратной связи. Особое внимание уделили визуальному оформлению:
          минималистичный дизайн, светлая палитра и акцент на фотографиях интерьеров подчёркивают стиль и эстетику студии. Сайт стал важным инструментом
          для продвижения, укрепления имиджа и привлечения новых клиентов.</p>
        <p class="projects__title">о проекте</p>
        <div class="projects-photo">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__first" src="@/assets/images/image 5.png" alt="">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__second" src="@/assets/images/image 6.png" alt="">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__third" src="@/assets/images/image 8.png" alt="">
        </div>
      </div>
      <div class="projects">
        <div class="info">
          <div class="about">
            <h2>Разработка сайта <br>
              для студии звукозаписи</h2>
            <div class="items">
              <div class="item">
                <p>аналитика и исследование ниши</p>
                <p>Информационная архитектура</p>
                <p>прототип</p>
              </div>
              <div class="item">
                <p>дизайн</p>
                <p>верстка</p>
                <p>продвижение</p>
              </div>
            </div>
          </div>
          <img class="info__cover" src="@/assets/images/page-1.png" alt="">
        </div>
        <p class="projects__description">Сайт студии звукозаписи "REC" был создан как цифровая визитка и платформа для взаимодействия с музыкантами, продюсерами и исполнителями. Основной задачей стало отражение атмосферы студии и демонстрация её технических возможностей, поэтому акцент сделали на аудиопримерах, фотооборудования и отзывов клиентов. Удобная навигация позволяет быстро узнать о предоставляемых услугах — от записи вокала до полного сведения треков, а встроенная форма бронирования делает процесс сотрудничества простым и быстрым. Сайт стал эффективным инструментом привлечения новых артистов и укрепления репутации студии на рынке музыкальных услуг.</p>
        <p class="projects__title">о проекте</p>
        <div class="projects-photo">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__first" src="@/assets/images/3.png" alt="">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__second" src="@/assets/images/8.png" alt="">
        </div>
      </div>
      <div class="projects">
        <div class="info">
          <div class="about">
            <h2>Брендинг для Horeca</h2>
            <div class="items">
              <div class="item">
                <p>буклет</p>
                <p>открытка</p>
                <p>Визитка</p>
              </div>
              <div class="item">
                <p>Брендинг</p>
                <p>Фирменный стиль</p>
                <p>Новый стиль</p>
              </div>
            </div>
          </div>
          <img class="info__cover" src="@/assets/images/page-3.png" alt="">
        </div>
        <p class="projects__description">Поставщики ресторанной посуды, кухонного и барного инвентаря. Опыт работы в сфере Хорека 10 лет</p>
        <p class="projects__title">о проекте</p>
        <div class="projects-photo">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__first" src="@/assets/images/hr-1.jpg" alt="">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__second" src="@/assets/images/hr-2.jpg" alt="">
          <img style="max-width: 736px; width: 100%; height: auto;" class="projects-photo__second" src="@/assets/images/hr-3.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
button {
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: #1b33b2;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
}
.mr {
  margin-top: 3rem;
}

.wrapper {
  max-width: 1488px;
  margin-left: auto;
  margin-bottom: 5rem;
}

.projects {
  margin-top: 100px;
  &__description {
    font-weight: 400;
    font-size: 24px;
    margin-top: 26px;
  }

  &__title {
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 26px;
  }

  &-photo {
    display: flex;
    gap: 1rem;
    align-items: start;
    flex-wrap: wrap;
  }

}


.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    font-weight: 500;
    font-size: 46px;
    text-transform: uppercase;
    border-bottom: 1px solid #1b33b2;
    padding: 0 0 2rem 0;
    max-width: 660px;
  }

  &__cover {
    max-width: 737px;
    width: 100%;
    height: auto;
  }
}

.items {
  display: flex;
  align-items: start;
  column-gap: 65px;
  margin-top: 1rem;
}

.item {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  p {
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
    color: #383838;
  }
}
</style>