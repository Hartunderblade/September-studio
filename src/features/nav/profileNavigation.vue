<script setup>
import '@/assets/styles/mainPage.scss';
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
    </div>
    <div class="user" style="">
      <p class="user__name">Пользователь</p>
      <button type="submit" class="user__logout">Выйти <img src="@/assets/icons/arrow-logout.svg"></button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;

  &__logout {
    background-color: #1E1E1E;
    border-radius: 2rem;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;

    img {
      margin-bottom: 0.1rem;
      margin-left: 0.2rem;
    }
  }
}
</style>