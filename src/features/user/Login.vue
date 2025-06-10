<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios'

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

// const login = async () => {
//   errorMessage.value = '';
//
//   if (!email.value || !password.value) {
//     errorMessage.value = "Введите почту и пароль";
//     return;
//   }
//
//   try {
//     const response = await axios.post("http://localhost:3000/auth/login", {
//       email: email.value,
//       password: password.value
//     });
//
//     localStorage.setItem('token', response.data.token);
//     localStorage.setItem('user', JSON.stringify(response.data.user));
//
//     // Переход в профиль по ID
//     router.push('/user');
//
//   } catch (error) {
//     console.error("Login error:", error);
//     errorMessage.value = error.response?.data?.message || "Ошибка входа";
//   }
// };

const login = async () => {
  isLoading.value = true;
  errorMessage.value = ''; // Очистить ошибку перед новым запросом
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: email.value,
      password: password.value
    });

    // Сохраняем токен и информацию о пользователе в localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user)); // Сохраняем данные пользователя

    // Переход в зависимости от роли пользователя
    if (response.data.user.email === 'admin123@gmail.com') {
      router.push('/admin'); // Переход в админ-панель
    } else {
      router.push('/user'); // Переход в профиль обычного пользователя
    }
  } catch (error) {
    errorMessage.value = error.response ? error.response.data.message : 'Ошибка сервера';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth-form">
        <img src="@/assets/images/logo.svg" alt="Logo" class="auth-form__logo" />
        <h2 class="auth-form__title">Снова здравствуйте!</h2>
        <p class="auth-form__text">Чтобы продолжить войдите в свой профиль</p>
        <form @submit.prevent="login">
          <input
              type="email"
              v-model="email"
              placeholder="Почта"
              class="auth__input"
              required
          />
          <input
              type="password"
              v-model="password"
              placeholder="Пароль"
              class="auth__input"
              required
          />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <button type="submit" class="button">Войти</button>
        </form>
        <p class="auth-form__register">
          Ещё нет аккаунта? <a @click="router.push('/registration')">Авторизоваться</a>
        </p>
      </div>
      <div class="auth__graphic"></div>
    </div>

  </div>

</template>

<style scoped lang="scss">
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