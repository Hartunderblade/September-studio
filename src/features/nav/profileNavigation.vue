<script setup>
import '@/assets/styles/mainPage.scss';
import {RouterLink, useRouter} from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const router = useRouter();
const isMenuOpen = ref(false);

const user = ref(null);
const error = ref('');


onMounted(async () => {
  const token = localStorage.getItem('token')

  if (!token) {
    error.value = 'Вы не авторизованы. Перенаправление на вход...'
    setTimeout(() => router.push('/login'), 2000)
    return
  }
  try {
    const response = await axios.get('http://localhost:3000/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    user.value = response.data
  } catch (err) {
    if (err.response && err.response.status === 401) {
      error.value = 'Сессия истекла. Пожалуйста, войдите снова.'
      localStorage.removeItem('token')
      setTimeout(() => router.push('/login'), 2000)
    } else {
      error.value = 'Ошибка при получении профиля'
    }
    console.error(err);
  }
});

// Функция выхода из профиля
const logout = () => {
  // Удаляем токен из localStorage
  localStorage.removeItem("token");

  // Перенаправляем пользователя на страницу входа
  router.push("/");
};

</script>

<template>
  <nav v-if="user" class="navbar">
    <div class="logo">
      <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">
    </div>
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

    <div :class="['navbar-content', { 'mobile-menu': isMenuOpen }]">
      <RouterLink class="navbar__link" to="/user">Профиль</RouterLink>
      <div class="user">
        <p class="user__name">{{ user.name }}</p>
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

  &__link {
    font-size: 1rem;
    font-weight: 600;
    color: #1E1E1E;
    text-decoration: none;
  }
}

.burger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 200;
}

.logo__img {
  max-width: 297px;
  max-height: 48px;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.close-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;

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
    font-weight: 600;

    img {
      margin-bottom: 0.1rem;
      margin-left: 0.2rem;
    }
  }
}

@media (max-width: 780px) {
  .burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-content {
    display: none;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 0;
    border-radius: 2rem;
    border: 1px solid rgba(27, 51, 178, 0.2);
    border-top: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 199;
    gap: 15px;
  }

  .navbar__link {
    font-size: 1.2rem;
    padding: 10px 0;
  }

  .user {
    margin-bottom: 2rem;
  }
}

@media (max-width: 320px) {
  .logo__img {
    width: 139px;
    height: 22px;
  }
}
</style>