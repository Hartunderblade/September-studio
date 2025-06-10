<script setup>
import {RouterLink, useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
</script>

<template>
  <div class="container">
<!--    <nav>-->
<!--      <button @click="router.push('/')" class="logo">-->
<!--        <img class="logo__img" src="@/assets/images/logo.svg" alt="logo" title="logo studio September">-->
<!--      </button>-->
<!--      <div class="auth">-->
<!--        <button @click="router.push('/registration')" class="auth__register">Зарегистрироваться</button>-->
<!--        <button @click="router.push('/login')" class="auth__login">Войти</button>-->
<!--      </div>-->
<!--    </nav>-->
    <div class="main">
      <div class="title">
        <p class="title-first">о как</p>
        <p class="title-second">ошибка 404</p>
        <p class="title-notfound">страница не найдена</p>
        <button class="back" @click="router.push('/')">Вернуться на главную <img src="@/assets/icons/arrow-modal.png"></button>
      </div>
      <img class="not" src="@/assets/images/notFound.png">
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  height: 100vh;
}
.not {
  position: absolute;
  bottom: 0;
  right: 0;
}

  nav {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .title {
    margin-top: 2rem;
    &-first {
      font-weight: 800;
      font-size: 220px;
      line-height: 90%;
      text-transform: uppercase;
      color: #001BA3;
    }

    &-second {
      font-weight: 700;
      font-size: 180px;
      line-height: 90%;
      text-transform: uppercase;
      color: #001BA3;
    }

    &-notfound {
      font-weight: 700;
      font-size: 64px;
      line-height: 113%;
      text-transform: uppercase;
      color: #1e1e1e;
      margin-top: 2rem;
      margin-bottom: 120px;
    }
  }
  .back {
    font-weight: 600;
    font-size: 32px;
    color: #001BA3;
    display: flex;
    align-items: center;
    text-align: start;
    column-gap: 1rem;
  }
  
  @media (max-width: 799px) {
    .main {
      position: initial;
    }
    .not {
      width: 70%;
    }

    .title {
      margin-top: 1rem;
      &-first {
        font-size: 120px;
      }

      &-second {
        font-size: 80px;
      }

      &-notfound {
        font-size: 3rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }

    .back {
      img {
        display: none;
      }
    }

  }

</style>
