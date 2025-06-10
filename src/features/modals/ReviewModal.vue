<script setup>
import { defineEmits, onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios';

const emit = defineEmits(['close']);
const isLoading = ref(false);
const formData = ref({
  name: '',
  text: ''
});

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const submitReview = async (e) => {
  e.preventDefault();

  // Проверка заполнения полей
  if (!formData.value.name.trim() || !formData.value.text.trim()) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  isLoading.value = true;

  try {
    const response = await axios.post('http://localhost:3000/reviews', formData.value, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Очищаем форму после успешной отправки
    formData.value = { name: '', text: '' };
    emit('close');
    alert('Спасибо! Ваш отзыв успешно отправлен.');
  } catch (error) {
    console.error('Ошибка при отправке отзыва:', error);

    let errorMessage = 'Произошла ошибка при отправке отзыва';
    if (error.response) {
      // Ошибка от сервера
      if (error.response.status === 400) {
        errorMessage = 'Некорректные данные';
      } else if (error.response.status === 401) {
        errorMessage = 'Требуется авторизация';
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      errorMessage = 'Сервер не отвечает. Попробуйте позже.';
    }

    alert(errorMessage);
  } finally {
    isLoading.value = false;
  }
};

onMounted(disableScroll);
onUnmounted(enableScroll);
</script>

<template>
  <div class="modal-owerlay" @click.self="emit('close')">
    <div class="modal">
      <div class="info">
        <h3 class="info__title">оставьте отзыв</h3>
        <p class="info__desc">Оставляя отзыв, вы даёте нам понять насколько
          качественно была выполнена работа</p>
      </div>
      <form class="form" @submit.prevent="submitReview">
        <input
            type="text"
            class="form__input"
            placeholder="Укажите имя"
            required
            v-model.trim="formData.name"
        >
        <textarea
            placeholder="Напишите отзыв"
            class="form__textarea"
            required
            v-model.trim="formData.text"
        ></textarea>
        <button
            type="submit"
            class="form__send"
            :disabled="isLoading"
        >
          <span v-if="!isLoading">ОТПРАВИТЬ</span>
          <span v-else>ОТПРАВКА...</span>
        </button>
      </form>
      <button class="close" @click="emit('close')">
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
  align-items: flex-start;
  overflow-y: auto;
}

.info {
  //width: 560px;
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
    max-width: 487px;
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

@media (max-width: 780px) {
  .modal {
    position: relative;
    background-color: #ffffff;
    padding: 1rem;
    max-width: 1000px;
    width: 80%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: auto;
  }

  .info {
    &__desc {
      margin-bottom: 10px;
    }
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}

@media (max-width: 320px) {
}
</style>