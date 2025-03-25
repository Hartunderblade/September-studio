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
    <span v-if="!isMenuOpen"></span>
    <span v-if="!isMenuOpen"></span>
    <span v-if="!isMenuOpen"></span>
    <span v-if="isMenuOpen" class="close-icon">&times;</span>
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
}

.burger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background: black;
}

.close-icon {
  font-size: 32px;
  color: black;
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
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
  }

  .links.active {
    display: flex;
  }

  .auth {
    display: none;
  }
}
</style>