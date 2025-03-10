<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <a class="top__email" href="#" title="Почта веб студии September">september@web.ru</a>
        <button>Обудить проект <img src="@/assets/icons/arrow-footer.svg"></button>
      </div>
      <div class="large">
        <div class="info">
          <div class="info-contacts">
            <p class="info-contacts__phone">+7 (123) 456-78-90</p>
            <p class="info-contacts__address">Россия, г. Астрахань, Восточная ул., д. 4</p>
          </div>
          <div class="info-socials">
            <p>Ⓒ 2025 September</p>
            <div class="socials">
              <img src="@/assets/icons/whatsApp.svg">
              <img src="@/assets/icons/youtube.svg">
              <img src="@/assets/icons/telegram.svg">
            </div>
          </div>
        </div>
        <div style="max-width: 730px; width: 100%;" class="info">
          <div style="display: flex; column-gap: 132px; height: 269px;">
            <div>
              <p style="font-size: 1.1rem; font-weight: 200; color: #A5A5A5;">Компания</p>
              <div style="display: flex; flex-direction: column; row-gap: 0.3rem; margin-top:1rem;">
                <a style="font-size: 1.1rem; font-weight: 200;" href="#">О нас</a>
                <a style="font-size: 1.1rem; font-weight: 200;" href="#">Преимущества</a>
                <a style="font-size: 1.1rem; font-weight: 200;" href="#">Реализованные проекты</a>
                <a style="font-size: 1.1rem; font-weight: 200;" href="#">Отзывы</a>
                <a style="font-size: 1.1rem; font-weight: 200;" href="#">Прайс</a>
              </div>
            </div>
            <div>
            <p style="font-size: 1.1rem; font-weight: 200; color: #A5A5A5;">Услуги</p>
            <div style="display: flex; flex-direction: column; row-gap: 0.3rem; margin-top:1rem;">
              <a style="font-size: 1.1rem; font-weight: 200;" href="#">Редизайн</a>
              <a style="font-size: 1.1rem; font-weight: 200;" href="#">Лендинг</a>
              <a style="font-size: 1.1rem; font-weight: 200;" href="#">Корпоративный сайт</a>
            </div>
          </div>
          </div>
          <div class="info-about">
            <p style="font-size: 1.1rem; font-weight: 400;">Сайт разработала Корчунова Дарья</p>
          </div>
        </div>
      </div>
      <div style="margin-top: 2rem;" class="bottom">
        <img style="width: 100%" src="@/assets/images/logo-2.png">
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    background-color: #1e1e1e;
    color: #fff;
    margin-top: 10rem;
  }

  .container {
    color: #ffffff;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 1px solid #ffffff;

    &__email {
      font-size: 1rem;
      font-weight: lighter;
    }

    button {
      display: flex;
      align-items: center;
      column-gap: 0.6rem;
      cursor: pointer;
    }
  }

  .large {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    border-bottom: 1px solid #ffffff;
  }

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 216px;
    &-contacts {
      &__phone {
        font-weight: 500;
        font-size: 64px;
        text-transform: uppercase;
      }

      &__address {
        font-weight: 400;
        font-size: 4rem;
        line-height: 110%;
        color: #a5a5a5;
        width: 608px;
        margin-top: 2rem;
      }
    }

    &-socials {
      display: flex;
      align-items: center;
      column-gap: 2rem;
      p {
        font-weight: 500;
        font-size: 1.6rem;
      }

      .socials {
        display: flex;
        align-items: center;
        column-gap: 1rem;
      }
    }
  }
</style>