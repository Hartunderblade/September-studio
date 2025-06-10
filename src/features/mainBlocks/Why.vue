<script setup>
import MainPageTitle from "@/shared/ui/MainPageTitle.vue";
</script>

<template>
  <div class="why">
    <h1>Почему</h1>
    <div class="wrapper">
      <h1 class="">мы?</h1>
      <div class="items">
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <div class="item-info">
            <p class="item-info__title">Профессионализм и Опыт</p>
            <p class="item-info__desc"><span>Команда экспертов:</span> September состоит из опытных дизайнеров, разработчиков,
              маркетологов и аналитиков, гарантируя высокое качество работы</p>
            <p class="item-info__desc"><span>Большой опыт:</span> Студия предлагает эффективные решения для любой задачи,
              независимо от масштаба проекта</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <div class="item-info">
            <p class="item-info__title">Индивидуальный Подход</p>
            <p class="item-info__desc"><span>Анализ потребностей:</span> September проводит глубокий анализ бизнеса и целевой
              аудитории для создания уникального сайта</p>
            <p class="item-info__desc"><span>Уникальный дизайн:</span> Каждый проект — это уникальная концепция,
              обеспечивающая удобство и высокую конверсию</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <div class="item-info">
            <p class="item-info__title">Полный Цикл Услуг</p>
            <p class="item-info__desc"><span>От идеи до реализации:</span> September предлагает полный спектр услуг,
              от стратегического планирования до продвижения сайта</p>
            <p class="item-info__desc"><span>Поддержка на всех этапах:</span> Студия обеспечивает поддержку на каждом
              этапе проекта, без необходимости привлечения других подрядчиков</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/images/main-star.svg" alt="Studio september icon">
          <div class="item-info">
            <p class="item-info__title">Результаты, Которые Впечатляют</p>
            <p class="item-info__desc"><span>Увеличение трафика:</span> Профессиональный дизайн и SEO-оптимизация
              привлекают больше посетителей и повышают конверсию</p>
            <p class="item-info__desc"><span>Рост продаж:</span> Эффективные сайты September увеличивают продажи и расширяют бизнес</p>
            <p class="item-info__desc"><span>Долгосрочное сотрудничество:</span> September гарантирует качество и поддержку на протяжении
              всего сотрудничества, стремясь к вашему успеху</p>
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

  .content {
    margin-top: 240px;
    margin-left: 376px;
    max-width: 1096px;
    width: 100%;
  }

  .items {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    margin-top: 4rem;
  }

  .item {
    //display: flex;
    align-items: start;
    column-gap: 2rem;
    flex-wrap: wrap;
    img {
      width: 60px;
      height: 60px;
    }

    &-info {
      &__title {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 20px;
      }

      &__desc {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 1rem;

        span {
          font-weight: 500;
        }
      }

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

    .items {
      margin-top: 3rem;
      row-gap: 2rem;
    }

    .content {
      margin-top: 0;
      margin-left: 0;
      max-width: 1096px;
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    .content {
      margin-top: 10rem;
      //margin-left: 0;
      //max-width: 1096px;
      //width: 100%;
    }

    .items {
      row-gap: 1rem;
      margin-top: 2rem;
    }

    .item {
      display: flex;
      align-items: start;
      column-gap: 2rem;
      text-align: left;
      img {
        width: 2rem;
        height: 2rem;
      }

      &-info {
        &__title {
          font-size: 20px;
          margin-bottom: 12px;
        }

        &__desc {
          font-size: 12px;
          margin-bottom: 0.4rem;
        }

      }
    }
  }
</style>