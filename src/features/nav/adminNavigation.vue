<script setup>
import '@/assets/styles/mainPage.scss';
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
    <nav class="navbar">
      <div class="logo">
        <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
      </div>
      <div style="display: flex; align-items: center; column-gap: 1.1rem">
        <RouterLink class="navbar__link" to="/admin">Пользователи</RouterLink>
        <RouterLink class="navbar__link" to="/admin/orders">Заявки</RouterLink>
        <RouterLink class="navbar__link" to="/admin/reviews">Отзывы</RouterLink>
        <RouterLink class="navbar__link" to="/admin/feedback">Связь</RouterLink>
      </div>
      <div class="user" style="">
        <p class="user__name">Админ</p>
        <button type="submit" class="user__logout">Выйти <img src="@/assets/icons/arrow-logout.svg"></button>
      </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
  border: 1px solid rgba(27, 51, 178, 0.2);
  border-radius: 32px;
  padding: 16px 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  &__link {
    font-size: 1rem;
    font-weight: 500;
  }
}

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