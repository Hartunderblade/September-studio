<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
</script>

<template>
  <div class="">
    <h1>Наши</h1>
    <div class="wrapper">
      <h1 class="">проекты</h1>
      <div class="projects">
        <div class="project">
          <img class="project__cover" src="@/assets/images/Page-4.png" alt="Работы студии September">
          <p class="project__title">студия звукозаписи</p>
          <div class="project-hashtags">
            <p class="project-hashtags__hashtag">UX/UI</p>
            <p class="project-hashtags__hashtag">Минимализм</p>
            <p class="project-hashtags__hashtag">Шрифт</p>
          </div>
        </div>
        <div class="project">
          <img class="project__cover" src="@/assets/images/Page-1.png" alt="Школа танцев">
          <p class="project__title">Логотип школы танцев</p>
          <div class="project-hashtags">
            <p class="project-hashtags__hashtag">Логотип</p>
            <p class="project-hashtags__hashtag">Брендинг</p>
          </div>
        </div>
        <div class="project">
          <img class="project__cover" src="@/assets/images/page-2.png" alt="Студия дизайна интерьеров">
          <p class="project__title">Студия дизайна интерьера</p>
          <div class="project-hashtags">
            <p class="project-hashtags__hashtag">UX/UI</p>
            <p class="project-hashtags__hashtag">Лендинг</p>
            <p class="project-hashtags__hashtag">Пользовательский опыт</p>
          </div>
        </div>
        <div class="project">
          <img class="project__cover" src="@/assets/images/page-3.png" alt="Брендинг для Horeca">
          <p class="project__title">Брендинг для Horeca</p>
          <div class="project-hashtags">
            <p class="project-hashtags__hashtag">Брендинг</p>
            <p class="project-hashtags__hashtag">Фирменный стиль</p>
            <p class="project-hashtags__hashtag">Новый стиль</p>
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

  h1 {
    align-items: start;
    font-weight: 600;
    font-size: 200px;
    text-transform: uppercase;
  }


}





  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 4rem;
  }

  .project {
    &__cover {
      max-width: 736px;
      max-height: 500px;
      border-radius: 0.4rem;
    }

    &__title {
      font-weight: 500;
      font-size: 2rem;
      text-transform: uppercase;
      margin-top: 1rem;
    }

    &-hashtags {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      margin-top: 12px;

      &__hashtag {
        font-weight: 300;
        font-size: 16px;
        color: #1b33b2;
      }
    }

    .project__cover {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 780px) {

    .project {
      margin-top: 1.4rem;
    }

    .wrapper {
      //align-items: center;
      //text-align: center;

      h1 {
        font-size: 54px;
      }
    }

    .projects {
      display: block;
      margin-top: 2rem;
      row-gap: 1rem;
    }

    h1 {
      font-size: 54px;
    }

    .project__cover {
      //max-width: 400px;
      height: auto;
    }

    .project__title {
      align-items: start;
      font-size: 24px;
      margin-top: 10px;
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

    .projects {
      display: block;
      margin-top: 2rem;
      row-gap: 1rem;
    }

    h1 {
      font-size: 54px;
    }

    .project__cover {
      max-width: 400px;
      height: auto;
    }

    .project__title {
      align-items: start;
      font-size: 24px;
      margin-top: 10px;
    }
  }
</style>