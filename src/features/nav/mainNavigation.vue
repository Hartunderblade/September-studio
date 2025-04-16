<script setup>
import '@/assets/styles/mainPage.scss';
import {RouterLink, useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const isMenuOpen = ref(false);
</script>

<template>
<nav class="navbar">
  <button @click="router.push('/')" class="logo">
    <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
  </button>
  <button class="burger-menu" @click="isMenuOpen = !isMenuOpen">
    <svg v-if="!isMenuOpen" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.230469" width="30" height="4" rx="2" fill="#1B33B2" />
      <rect y="8.23047" width="30" height="4" rx="2" fill="#1B33B2" />
    </svg>
    <span v-if="isMenuOpen" class="close-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L19 19" stroke="#1B33B2" stroke-width="2" stroke-linecap="round" />
        <path d="M1 19L19 1" stroke="#1B33B2" stroke-width="2" stroke-linecap="round" />
      </svg>
    </span>
  </button>
  <div :class="['links', { 'active': isMenuOpen }]" class="links">
    <div class="links-block">
      <a class="links-block__link" href="#">О нас</a>
      <a class="links-block__link" href="#">Проекты</a>
      <a class="links-block__link" href="#">Услуги</a>
    </div>
    <div class="links-block">
      <a class="links-block__link" href="#">Отзывы</a>
      <a class="links-block__link" href="#">Контакты</a>
      <a class="links-block__link" href="#">FAQ</a>
      <a class="links-block__link" href="#">Бриф</a>
    </div>
    <div class="links-block" v-if="isMenuOpen">
      <a style="color: #1B33B2;" @click="router.push('/registration')" class="links-block__link">Зарегистрироваться</a>
      <a style="color: #1B33B2;" @click="router.push('/login')" class="links-block__link">Войти</a>
    </div>
<!--    <div class="auth links-block" v-if="isMenuOpen">-->
<!--      <button @click="router.push('/registration')" class="auth__register">Зарегистрироваться</button>-->
<!--      <button @click="router.push('/login')" class="auth__login">Войти</button>-->
<!--    </div>-->
  </div>
  <div class="auth" v-if="!isMenuOpen">
    <button @click="router.push('/registration')" class="auth__register">Зарегистрироваться</button>
    <button @click="router.push('/login')" class="auth__login">Войти</button>
  </div>
</nav>
</template>

<style scoped>

.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 200;
  color: #1B33B2;
}

.burger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  color: #ffffff;
}

.close-icon {
  font-size: 32px;
  color: #ffffff;
}

@media (max-width: 780px) {
  .burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
    z-index: 199;
    text-align: start;
  }

  .links.active {
    display: flex;
  }

  .auth {
    display: none;
  }

  .links-block__link {
    font-size: 2rem;
    border-bottom: 1px solid rgba(27, 51, 178, 0.7);
    padding: 6px 0 6px 0;
    width: 100%;
    text-decoration: none;
  }
}

@media (max-width: 320px) {
  .burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
    z-index: 199;
    text-align: start;
  }

  .links.active {
    display: flex;
  }

  .auth {
    display: none;
  }

  .links-block__link {
    font-size: 2rem;
    border-bottom: 1px solid rgba(27, 51, 178, 0.7);
    padding: 6px 0 6px 0;
    width: 100%;
    text-decoration: none;
  }
}
</style>