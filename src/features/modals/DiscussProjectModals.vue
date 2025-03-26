<script setup>
import { defineEmits, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['close']);

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};


onMounted(disableScroll);
onUnmounted(enableScroll);
</script>

<template>
  <div class="modal-owerlay" @click.self="emit('close')">
    <div class="modal">
      <div class="info">
        <h3 class="info__title">обсудить проект</h3>
        <p class="info__desc">Отправка заявки вас ни к чему не обязывает.
          Созвонимся, проведём консультацию,
          финальное решение — за вами</p>
      </div>
      <form class="form">
        <input type="text" class="form__input" placeholder="Укажите ФИО" required>
        <input type="tel" class="form__input" placeholder="+7 (999) 999-99-99" required>
        <input type="email" class="form__input" placeholder="Почта" required>
        <input style="margin-top: 1rem" type="text" class="form__input" placeholder="Ваш бюджет" required>
        <textarea placeholder="Опишите задачу" class="form__textarea" required></textarea>
        <div class="form__checkbox">
          <input type="checkbox" class="form__checkbox-input" required>
          <p>Согласен с <a href="#">политикой конфиденциальности</a></p>
        </div>
        <button class="form__send">ОТПРАВИТЬ</button>
      </form>
      <button @click="emit('close')" class="close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.9999 1.00009L1 23M0.999907 1L22.9998 22.9999" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-owerlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  overflow-y: auto;
}

.modal {
  position: relative;
  background-color: #ffffff;
  padding: 4rem;
  max-width: 1000px;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  //flex-wrap: wrap;
  align-items: flex-start;
  overflow-y: auto;
  }

.info {
  width: 632px;
  margin-right: 2rem;
  &__title {
    font-weight: 600;
    font-size: 36px;
    text-transform: uppercase;
    color: #1e1e1e;
  }

  &__desc {
    font-weight: 300;
    font-size: 18px;
    color: #2b2b2b;
    //max-width: 400px;
    margin-top: 10px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;

  &__input {
    font-weight: 300;
    font-size: 1rem;
    color: #474747;
    border: 1px solid rgba(27, 51, 178, 0.4);
    border-radius: 6px;
    padding: 1rem 0 1rem 1rem;
    max-width: 467px;
    background: #fff;
  }

  &__textarea {
    border: 1px solid rgba(27, 51, 178, 0.4);
    border-radius: 6px;
    padding: 16px 0 120px 16px;
    max-width: 467px;
    background: #fff;
    font-weight: 300;
    font-size: 16px;
    color: #474747;
  }

  &__checkbox {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-top: 1rem;

    &-input {
      border: 1px solid #1b33b2;
      border-radius: 6px;
      width: 18px;
      height: 18px;
    }

    p {
      font-weight: 300;
      font-size: 1rem;

      a {
        font-weight: 400;
        color: #1b33b2;
      }
    }
  }

  &__send {
    border: 1px solid #1b33b2;
    border-radius: 6px;
    padding: 22px 0;
    max-width: 467px;
    font-weight: 500;
    font-size: 18px;
    color: #1b33b2;
    margin-top: 1rem;

    &:hover {
      background-color: #1b33b2;
      color: #fff;
      transition: 0.6s;
    }
  }
}

@media (max-width: 780px) {}

@media (max-width: 320px) {
  .modal {
    border-radius: 6px;
    padding: 12px;
    max-width: 296px;
  }

  .info {
    width: 100%;
    margin-right: 0;
    te
    &__title {
      font-weight: 600;
      font-size: 20px;
    }

    &__desc {
      font-weight: 300;
      font-size: 12px;
      color: #2b2b2b;
      margin-top: 12px;

    }
  }

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;

    &__input {
      font-weight: 300;
      font-size: 1rem;
      color: #474747;
      border: 1px solid rgba(27, 51, 178, 0.4);
      border-radius: 6px;
      padding: 1rem 0 1rem 1rem;
      max-width: 467px;
      background: #fff;
    }

    &__textarea {
      border: 1px solid rgba(27, 51, 178, 0.4);
      border-radius: 6px;
      padding: 16px 0 120px 16px;
      max-width: 467px;
      background: #fff;
      font-weight: 300;
      font-size: 16px;
      color: #474747;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin-top: 1rem;

      &-input {
        border: 1px solid #1b33b2;
        border-radius: 6px;
        width: 18px;
        height: 18px;
      }

      p {
        font-weight: 300;
        font-size: 1rem;

        a {
          font-weight: 400;
          color: #1b33b2;
        }
      }
    }

    &__send {
      border: 1px solid #1b33b2;
      border-radius: 6px;
      padding: 22px 0;
      max-width: 467px;
      font-weight: 500;
      font-size: 18px;
      color: #1b33b2;
      margin-top: 1rem;

      &:hover {
        background-color: #1b33b2;
        color: #fff;
        transition: 0.6s;
      }
    }
  }
}
</style>