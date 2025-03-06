<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

const email = ref('');
const name = ref('');
const password = ref('');
const repeatPassword = ref('');
const conset = ref('');

</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth-form">
        <img src="@/assets/icons/logo-icon.svg" alt="Logo" class="auth-form__logo" />
        <h2 class="auth-form__title">Добро пожаловать!</h2>
        <form>
          <input type="email" v-model="name" placeholder="ФИО полностью" class="auth__input" required/>
          <input type="email" v-model="email" placeholder="Почта" class="auth__input" required/>
          <input type="password" v-model="password" placeholder="Пароль" class="auth__input" required/>
          <input type="password" v-model="repeatPassword" placeholder="Повторите пароль" class="auth__input" required/>
          <div style="display: flex;">
            <input type="checkbox" v-model="conset" class="auth__checkbox" required>
            <span>Я принимаю условия <a>политики конфиденциальности</a> и даю согласие на обработку персональных данных.</span>
          </div>

          <button type="submit" class="button">Авторизоваться</button>
        </form>
        <p class="auth-form__register">
          Уже есть аккаунт? <a @click="router.push('/login')">Войти</a>
        </p>
      </div>
      <div class="auth__container-graphic"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-graphic {
      flex: 1;
      background-image: url('@/assets/images/bc-auth.png');
      background-position: center;
      background-size: cover;
    }
  }
  &-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    align-items: center;

    &__logo {
      width: 70px;
      margin-bottom: 36px;
    }

    &__title {
      font-weight: 600;
      font-size: 24px;
      color: #1B33B2;
      margin-bottom: 20px;
    }

    &__register {
      margin-top: 1rem;
      font-weight: 300;
      font-size: 1rem;
      color: #808080;

      a {
        font-weight: 600;
        color: #1b33b2;
      }
    }

  }

  form {
    max-width: 656px;
    text-align: center;
    input {
      border-bottom: 1px solid #1b33b2;
      padding-bottom: 0.9rem;
      max-width: 656px;
      width: 100%;
      margin-bottom: 2rem;
    }

    button {
      font-weight: 500;
      font-size: 22px;
      text-transform: capitalize;
      color: #1b33b2;
      border: 1px solid #1b33b2;
      border-radius: 6px;
      padding: 16px 0;
      max-width: 657px;
      width: 100%;
      background: #fff;
      cursor: pointer;

      &:hover {
        color: #ffffff;
        background-color: #1b33b2;
        transition: 0.6s ease;
      }
    }
  }
}


@media (max-width: 768px) {
  .login__container {
    flex-direction: column;
    text-align: center;
  }

  .login__container-graphic {
    display: none;
  }
}

@media (max-width: 320px) {
  .login__container {
    flex-direction: column;
    text-align: center;
  }

  .login__container-graphic {
    display: none;
  }
}
</style>