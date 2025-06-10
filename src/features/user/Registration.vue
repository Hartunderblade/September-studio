<script setup>
import { ref, watch } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';
import CapchaModal from "@/features/modals/CapchaModal.vue";

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const agreement = ref(false);

const errorMessage = ref('');
const showCaptcha = ref(false);

const fieldErrors = ref({
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
  agreement: ''
});

// Лайв-валидация через watch
watch(name, val => {
  fieldErrors.value.name = val ? '' : 'Введите имя';
});
watch(email, val => {
  fieldErrors.value.email = val ? '' : 'Введите email';
});
watch(password, val => {
  fieldErrors.value.password = val.length >= 8 ? '' : 'Пароль должен быть не менее 8 символов';
  fieldErrors.value.repeatPassword =
      repeatPassword.value === val && repeatPassword.value
          ? ''
          : 'Пароли не совпадают';
});
watch(repeatPassword, val => {
  fieldErrors.value.repeatPassword =
      val === password.value && val
          ? ''
          : 'Пароли не совпадают';
});
watch(agreement, val => {
  fieldErrors.value.agreement = val ? '' : 'Необходимо согласие';
});

const validateForm = () => {
  fieldErrors.value.name = name.value ? '' : 'Введите имя';
  fieldErrors.value.email = email.value ? '' : 'Введите email';
  fieldErrors.value.password = password.value.length >= 8 ? '' : 'Пароль должен быть не менее 8 символов';
  fieldErrors.value.repeatPassword =
      repeatPassword.value === password.value && repeatPassword.value
          ? ''
          : 'Пароли не совпадают';
  fieldErrors.value.agreement = agreement.value ? '' : 'Необходимо согласие';

  const hasErrors = Object.values(fieldErrors.value).some(msg => msg !== '');
  if (hasErrors) {
    errorMessage.value = 'Исправьте ошибки в форме';
    return false;
  }

  errorMessage.value = '';
  return true;
};

const register = async () => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: repeatPassword.value,
      agreement: Boolean(agreement.value)
    });

    if (response.status < 300) {
      router.push('/login');
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Ошибка при регистрации";
  }
};

const onCaptchaSuccess = () => {
  showCaptcha.value = false;
  register();
};

const onSubmit = () => {
  if (validateForm()) {
    showCaptcha.value = true;
  }
};
</script>

<template>
  <div class="auth">
    <CapchaModal v-if="showCaptcha" @success="onCaptchaSuccess" @close="showCaptcha = false" />
    <div class="auth__container">
      <div class="auth-form">
        <img src="@/assets/images/logo.svg" alt="Logo" class="auth-form__logo" />
        <h2 class="auth-form__title">Добро пожаловать!</h2>
        <p class="auth-form__text">Для начала работы создайте новый аккаунт</p>
        <form @submit.prevent="onSubmit">
          <input
              type="text"
              v-model="name"
              placeholder="ФИО полностью"
              class="auth__input"
              :class="{ 'input-error': fieldErrors.name }"
              required
          />
          <p v-if="fieldErrors.name" class="error-field-message">{{ fieldErrors.name }}</p>

          <input
              type="email"
              v-model="email"
              placeholder="Почта"
              class="auth__input"
              :class="{ 'input-error': fieldErrors.email }"
              required
          />
          <p v-if="fieldErrors.email" class="error-field-message">{{ fieldErrors.email }}</p>

          <input
              type="password"
              v-model="password"
              placeholder="Пароль"
              class="auth__input"
              :class="{ 'input-error': fieldErrors.password }"
              required
          />
          <p v-if="fieldErrors.password" class="error-field-message">{{ fieldErrors.password }}</p>

          <input
              type="password"
              v-model="repeatPassword"
              placeholder="Повторить пароль"
              class="auth__input"
              :class="{ 'input-error': fieldErrors.repeatPassword }"
              required
          />
          <p v-if="fieldErrors.repeatPassword" class="error-field-message">{{ fieldErrors.repeatPassword }}</p>

          <div class="form-chek" :class="{ 'checkbox-error': fieldErrors.agreement }">
            <input type="checkbox" v-model="agreement" />
            <p>
              Я принимаю
              <a style="color: #132063;" href="/Политика конфиденциальности.pdf" target="_blank" rel="noopener noreferrer">
                условия политики конфиденциальности
              </a> и даю согласие на обработку персональных данных
            </p>
          </div>
          <p v-if="fieldErrors.agreement" class="error-field-message">{{ fieldErrors.agreement }}</p>

          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

          <button type="submit" class="button">Зарегистрироваться</button>
        </form>

        <p class="auth-form__register">
          Ещё нет аккаунта? <a @click="router.push('/login')">Войти</a>
        </p>
      </div>
      <div class="auth__graphic"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-error {
  border: 1px solid red;
}

.checkbox-error input {
  outline: 2px solid red;
}

.error-field-message {
  color: red;
  font-size: 12px;
  margin: 4px 0 8px 4px;
}

.error-message {
  color: darkred;
  margin-bottom: 10px;
  font-weight: bold;
}
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;

  &__container {
    display: flex;
    width: 100%;
    //max-width: 1200px;
    min-height: 100vh;
  }

  &__graphic {
    flex: 1;
    background-image: url('@/assets/images/bc-auth.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }

  &-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    max-width: 500px;
    margin: 0 auto;

    &__logo {
      max-width: 297px;
      margin-bottom: 2.25rem;
    }

    &__title {
      font-weight: 600;
      font-size: 2rem;
      color: #1B33B2;
      margin-bottom: 1rem;
      //text-align: center;
    }

    &__text {
      font-weight: 400;
      font-size: 20px;
      color: #1B33B2;
      margin-bottom: 2rem;
      //text-align: center;
    }

    &__register {
      margin-top: 1.5rem;
      font-weight: 300;
      font-size: 1rem;
      color: #808080;
      text-align: center;

      a {
        font-weight: 600;
        color: #1b33b2;
        cursor: pointer;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #142a8a;
          text-decoration: underline;
        }
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .auth__input {
      border: none;
      border-bottom: 1px solid #1b33b2;
      padding: 0.75rem 0;
      font-size: 1rem;
      background: transparent;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #142a8a;
      }

      &::placeholder {
        color: rgba(27, 51, 178, 0.5);
      }
    }

    .button {
      font-weight: 500;
      font-size: 1.125rem;
      color: #1b33b2;
      border: 1px solid #1b33b2;
      border-radius: 6px;
      padding: 1rem;
      background: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;

      &:hover {
        color: #ffffff;
        background-color: #1b33b2;
      }
    }
  }
}

.form-chek {
  display: flex;
  align-items: start;
  column-gap: 4px;
  input {
    width: 18px;
    height: 18px;
    border-radius: 6px;
    border: 1px solid #1B33B2;
  }

  span {
    font-size: 12px;
  }
}

/* Адаптация для экранов до 780px */
@media (max-width: 780px) {
  .auth__container {
    flex-direction: column;
  }

  .auth__graphic {
    display: none;
  }

  .auth-form {
    padding: 1.5rem;
    width: 100%;
    max-width: 90%;
  }
}

/* Адаптация для экранов до 320px */
@media (max-width: 320px) {
  .auth-form {
    padding: 1rem;

    &__logo {
      width: 60px;
      margin-bottom: 1.5rem;
    }

    &__title {
      font-size: 1.25rem;
    }

    form {
      .button {
        font-size: 1rem;
        padding: 0.75rem;
      }
    }
  }
}
</style>