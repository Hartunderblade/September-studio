<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
</script>

<template>
  <section>
    <MainPageTitle titleTop="Наши" titleBottom="проекты"/>
    <div class="projects">
      <div class="project">
        <img class="project__cover" src="@/assets/images/project-img.jpg" alt="Работы студии September">
        <p class="project__title">студия звукозаписи</p>
        <div class="project-hashtags">
          <p class="project-hashtags__hashtag">UX/UI</p>
          <p class="project-hashtags__hashtag">Минимализм</p>
          <p class="project-hashtags__hashtag">Шрифт</p>
        </div>
      </div>
      <div class="project">
        <img class="project__cover" src="@/assets/images/project-img.jpg" alt="Работы студии September">
        <p class="project__title">студия звукозаписи</p>
        <div class="project-hashtags">
          <p class="project-hashtags__hashtag">UX/UI</p>
          <p class="project-hashtags__hashtag">Минимализм</p>
          <p class="project-hashtags__hashtag">Шрифт</p>
        </div>
      </div>
      <div class="project">
        <img class="project__cover" src="@/assets/images/project-img.jpg" alt="Работы студии September">
        <p class="project__title">студия звукозаписи</p>
        <div class="project-hashtags">
          <p class="project-hashtags__hashtag">UX/UI</p>
          <p class="project-hashtags__hashtag">Минимализм</p>
          <p class="project-hashtags__hashtag">Шрифт</p>
        </div>
      </div>
      <div class="project">
        <img class="project__cover" src="@/assets/images/project-img.jpg" alt="Работы студии September">
        <p class="project__title">студия звукозаписи</p>
        <div class="project-hashtags">
          <p class="project-hashtags__hashtag">UX/UI</p>
          <p class="project-hashtags__hashtag">Минимализм</p>
          <p class="project-hashtags__hashtag">Шрифт</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .projects {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 1488px;
    margin-top: 240px;
    margin-left: 376px;
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
  }

  @media (max-width: 780px) {
    .projects {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      max-width: 1488px;
      margin-top: 0;
      margin-left: 0;
      text-align: start;
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
    }
  }

  @media (max-width: 320px) {
    .projects {
      margin-top: 10rem;
    }

    .project {

      &__cover {
        width: 297px;
        height: 199px;
      }

      &__title {
        font-size: 24px;
        margin-top: 10px;
      }

      &-hashtags {
        column-gap: 1rem;
        margin-top: 6px;
      }
    }
  }
</style>