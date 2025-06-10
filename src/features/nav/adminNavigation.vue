<script setup>
import '@/assets/styles/mainPage.scss';
import {RouterLink} from "vue-router";
import { useRouter } from 'vue-router';
import {ref} from "vue";

const isMenuOpen = ref(false);

const router = useRouter();

const logout = () => {
  // Очистить данные о пользователе из localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  // Перенаправить на страницу входа
  router.push('/login');
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
    </div>

    <!-- Бургер-кнопка для мобильных -->
    <button class="burger-menu" @click="isMenuOpen = !isMenuOpen">
      <svg v-if="!isMenuOpen" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.230469" width="30" height="4" rx="2" fill="#1B33B2" />
        <rect y="8.23047" width="30" height="4" rx="2" fill="#1B33B2" />
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L19 19" stroke="#1B33B2" stroke-width="2" stroke-linecap="round" />
        <path d="M1 19L19 1" stroke="#1B33B2" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>

    <!-- Основное меню -->
    <div :class="['nav-links', {'active': isMenuOpen}]">
      <div class="nav-links__scroller">
        <div class="nav-links__container">
          <RouterLink class="navbar__link" to="/admin" @click="isMenuOpen = false">Пользователи</RouterLink>
          <RouterLink class="navbar__link" to="/admin/orders" @click="isMenuOpen = false">Заявки</RouterLink>
<!--          <RouterLink class="navbar__link" to="/admin/reviews" @click="isMenuOpen = false">Отзывы</RouterLink>-->
          <RouterLink class="navbar__link" to="/admin/feedback" @click="isMenuOpen = false">Связь</RouterLink>
        </div>
      </div>
      <div class="user">
        <p class="user__name">Админ</p>
        <button @click="logout" type="submit" class="user__logout">Выйти <img src="@/assets/icons/arrow-logout.svg"></button>
      </div>
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &__link {
    font-size: 1rem;
    font-weight: 500;
    color: #1E1E1E;
    text-decoration: none;
    transition: color 0.3s;
    white-space: nowrap;
    padding: 8px 16px;

    &:hover {
      color: #1B33B2;
    }
  }
}

.burger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
}

.nav-links {
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
  position: relative;
}

.nav-links__scroller {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  flex-grow: 1;
  max-width: calc(100vw - 300px); /* Оставляем место для лого и кнопки пользователя */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
}

.nav-links__container {
  display: flex;
  gap: 8px;
  width: max-content;
  padding: 4px 0;
}

.user {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  margin-left: 1rem;
  flex-shrink: 0;

  &__name {
    color: #1E1E1E;
  }

  &__logout {
    background-color: #1E1E1E;
    border-radius: 2rem;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1B33B2;
    }

    img {
      margin-bottom: 0.1rem;
      margin-left: 0.2rem;
    }
  }
}

/* Мобильная версия */
@media (max-width: 780px) {
  .burger-menu {
    display: block;
    position: relative;
    z-index: 101;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    margin: 0;

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }

  .nav-links__scroller {
    overflow: visible;
    max-width: 100%;
    width: 100%;
  }

  .nav-links__container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .navbar__link {
    font-size: 1.5rem;
    padding: 0.5rem 0;
    white-space: normal;
  }

  .user {
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;

    &__logout {
      background: transparent;
      color: #1E1E1E;
      padding: 0;
      font-size: 1.5rem;
      border-radius: 0;
    }
  }
}

@media (max-width: 320px) {
  .navbar {
    padding: 12px 15px;
  }

  .navbar__link {
    font-size: 1.3rem;
  }

  .user__logout {
    font-size: 1.3rem;
  }
}
</style>