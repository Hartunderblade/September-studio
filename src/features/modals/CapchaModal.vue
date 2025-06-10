<script setup>
import { ref, defineEmits, onMounted } from 'vue';

const emit = defineEmits(['success', 'close']);

const number1 = ref(0);
const number2 = ref(0);
const userAnswer = ref('');
const error = ref('');
const successMessage = ref('');
let correctAnswer = 0;

const generateCaptcha = () => {
  number1.value = Math.floor(Math.random() * 10) + 1;
  number2.value = Math.floor(Math.random() * 10) + 1;
  correctAnswer = number1.value + number2.value;
  userAnswer.value = '';
  error.value = '';
  successMessage.value = '';
};

onMounted(generateCaptcha);

const verifyCaptcha = () => {
  if (parseInt(userAnswer.value) === correctAnswer) {
    successMessage.value = 'Капча пройдена! Перенаправление на страницу входа...';
    error.value = '';
    setTimeout(() => {
      emit('success');
    }, 3000);
  } else {
    error.value = 'Неправильный ответ. Попробуйте снова.';
    generateCaptcha(); // новый пример
  }
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div class="modal-owerlay">
    <div class="modal">
      <p class="modal__title">Пройдите капчу и введите ответ</p>

      <div class="capcha">
        <p class="capcha__title">{{ number1 }} + {{ number2 }} =</p>
        <input v-model="userAnswer" class="capcha__answer" type="number" placeholder="Ответ" required>
        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </div>
      <div class="modal-buttons">
        <button @click="verifyCaptcha" :disabled="!!successMessage" type="submit" class="modal-buttons__send">Отправить</button>
        <button @click="closeModal" type="submit" class="modal-buttons__close">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance:textfield;
}

button {
  padding: 0;
  border: none;
}

.modal-owerlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal {
  position: relative;
  background-color: #ffffff;
  padding: 3rem;
  max-width: 374px;
  width: 100%;
  border-radius: 1rem;

  &__title {
    font-weight: 300;
    font-size: 1rem;
  }

  &-buttons {
    margin-top: 1rem;

    &__send {
      border-radius: 6px;
      padding: 10px 0;
      width: 100%;
      background-color: #1b33b2;
      border: 1px solid #1b33b2;
      font-weight: 400;
      font-size: 14px;
      color: #fff;

      &:hover {
        background-color: #ffffff;
        border: 1px solid #1b33b2;
        transition: 0.5s;
        color: #000000;
      }
    }

    &__close {
      border: 1px solid #1b33b2;
      border-radius: 6px;
      background-color: #ffffff;
      width: 100%;
      padding: 10px 0;
      font-weight: 400;
      font-size: 14px;
      margin-top: 6px;

      &:hover {
        border-radius: 6px;
        padding: 10px 0;
        width: 100%;
        background-color: #1b33b2;
        border: 1px solid #1b33b2;
        font-weight: 400;
        font-size: 14px;
        color: #fff;
        transition: 0.5s;
      }
    }
  }
}

.capcha {
  margin-top: 1rem;
  &__title {
    font-weight: 400;
    font-size: 1rem;
    color: #1b33b2;
  }

  &__answer {
    font-size: 1rem;
    border-bottom: 1px solid #000;
    padding-bottom: 6px;
    width: 100%;
    margin-top: 10px;
    &::placeholder {
      font-weight: 100;
      font-size: 14px;
      color: #000;
    }
  }
}

@media (max-width: 320px) {
  .modal {
    padding: 12px;
    min-width: 283px;
    border-radius: 6px;

    &__title {
      font-size: 13px;
    }

    &-buttons {
      margin-top: 12px;

      &__send {
        border-radius: 5px;
        padding: 8px 0;
        width: 100%;
        font-size: 11px;
      }

      &__close {
        border-radius: 5px;
        padding: 8px 0;
        width: 100%;
        font-size: 11px;
      }
    }
  }
}

.capcha {
  margin-top: 12px;
  &__title {
    font-size: 13px;
  }

  &__answer {
    font-size: 11px;
    margin-top: 8px;
  }
}

@media (max-width: 500px) {
  .modal {
    padding: 1rem;
  }
}
</style>