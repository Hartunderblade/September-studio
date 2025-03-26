<script setup>
import { ref } from 'vue';
import BriefTitle from "@/shared/ui/BriefTitle.vue";
</script>

<template>
  <div class="brief">
    <div class="one">
      <div class="header">
        <BriefTitle
            titleTop="бриф на лого"
            titleBottom="и фирменный стиль"
            description="Благодарим, что нашли время заполнить бриф.
            Помните, максимальноподробно заполненный бриф помогает
            вам получить айдентику,которая полностью
            соответствует вашим ожиданиям"/>
      </div>
      <div class="content">
        <div class="form">
          <h3>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input class="form-items__item" type="text" placeholder="Имя">
            <input class="form-items__item" type="text" placeholder="+7 (999) 999-99-99">
            <input class="form-items__item" type="text" placeholder="Почта">
            <input class="form-items__item" type="text" placeholder="Способ связи">
          </div>
        </div>
        <div class="form">
          <h3>опишите конкурентов</h3>
          <div class="form-items">
            <input class="form-items__item" type="text" placeholder="Преимущества*">
            <input class="form-items__item" type="text" placeholder="Недостатки*">
            <input class="form-items__item" type="text" placeholder="Ссылки сайтов конкурентов">
          </div>
        </div>
        <div class="form">
          <h3>целевая аудитория</h3>
          <div class="form-items">
            <input class="form-items__item" type="text" placeholder="Пол">
            <input class="form-items__item" type="text" placeholder="Возраст">
            <input class="form-items__item" type="text" placeholder="Интересы">
            <input class="form-items__item" type="text" placeholder="Что важно для него / неё?">
            <input class="form-items__item" type="text" placeholder="Что побуждает?">
            <input class="form-items__item" type="text" placeholder="Что останавливает?">
          </div>
        </div>
        <div class="form">
          <h3>ПОЖЕЛАНИЯ И ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input class="form-items__item" type="text" placeholder="Где чаще всего будет использоваться логотип? Какая «главная часть» логотипа?">
            <input class="form-items__item" type="text" placeholder="Формат логотипа*">
            <input class="form-items__item" type="text" placeholder="С чем логотип должен ассоциироваться?*">
            <input class="form-items__item" type="text" placeholder="Предпочитаемые цвета">
            <label class="form-items__checkbox">
              <input type="checkbox" required/>
              <a>Согласен c политикой конфиденциальности</a>
            </label>
          </div>
        </div>
        <button class="send">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 96px;
  margin-left: 376px;
}

.form {
  margin-top: 4rem;
  h3 {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  &-items {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    &__item {
      border-bottom: 1px solid #1b33b2;
      padding: 1rem 0;
      max-width: 1112px;
      width: 100%;
      background: #fff;
      font-size: 1.2rem;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      input {
        border: 1px solid #1b33b2;
        width: 24px;
        height: 24px;
        border-radius: 6px;
      }

      a {
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: #1B33B2;
      }
    }
  }
}

.send {
  border: 2px solid #1b33b2;
  border-radius: 6px;
  padding: 40px 0;
  max-width: 1112px;
  width: 100%;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  color: #1b33b2;
  margin-top: 4rem;
  background-color: #ffffff;

  &:hover {
    background-color: #1b33b2;
    color: #ffffff;
    transition: 0.3s;
  }
}

@media (max-width: 320px) {
  .content {
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
  }
  .form {
    margin-top: 2rem;
    h3 {
      font-size: 20px;
      margin-bottom: 26px;
    }

    &-items {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;

      &__item {
        border-bottom: 1px solid #1b33b2;
        padding: 8px 0;
        max-width: 1112px;
        width: 100%;
        background: #fff;
        font-size: 12px;
      }

      &__checkbox {
        display: flex;
        align-items: center;
        column-gap: 0.3rem;

        input {
          width: 14px;
          height: 14px;
          border-radius: 3px;
        }

        a {
          font-size: 12px;
          text-align: start;
        }
      }
    }
  }
  .send {
    border-radius: 6px;
    padding: 1rem 0;
    font-size: 18px;
    margin-top: 26px;
  }
}

@media (max-width: 780px) {
  .content {
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
  }
  .send {
    border-radius: 6px;
    padding: 1rem 0;
    font-size: 18px;
    margin-top: 26px;
  }
}
</style>