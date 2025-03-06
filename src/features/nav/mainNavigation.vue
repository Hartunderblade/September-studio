<script setup>
import '@/assets/styles/mainPage.scss';
import { RouterLink } from "vue-router";
</script>

<template>
<nav class="navbar">
  <div class="logo">
    <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
  </div>
  <div class="links">
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
  <div class="auth">
    <button class="auth__register">Зарегистрироваться</button>
    <button class="auth__login">Войти</button>
  </div>
</nav>
</template>