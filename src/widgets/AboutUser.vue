<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="user">
    <img class="user__avatar" src="@/assets/images/bc-auth.png" alt="Аватар пользователя в профиле" title="Studio September аватар пользователя" />
    <div class="user__items">
      <div class="user__items-item">
        <strong>Имя:</strong>
        <p>Иван Иванов</p>
      </div>
      <div class="user__items-item">
        <strong>Почта:</strong>
        <p>ivan@gmail.com</p>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 2rem;
  border: 1px solid rgba(27, 51, 178, 0.2);
  border-radius: 1rem;
  padding: 10px 0 10px 16px;
  max-width: 1864px;
  background-color: #ffffff;
  margin-top: 3rem;
  box-shadow: 9px 4px 20px 0 rgba(63, 63, 63, 0.12);

  &__avatar {
    max-width: 80px;
    max-height: 80px;
    border-radius: 100%;
  }

  &__items {
    display: flex;
    align-items: center;
    column-gap: 1.7rem;

    &-item {
      strong {
        font-weight: 300;
        font-size: 0.9rem;
        color: #3e3e3e;
      }

      p {
        font-weight: 400;
        font-size: 1.1rem;
      }
    }
  }
}

@media (max-width: 780px) {
  .user {
    justify-content: center;
    text-align: start;
    column-gap: 2rem;
    padding: 12px 16px;
    margin-top: 2rem;

    &__avatar {
      margin-bottom: 1rem;
    }

    &__items {
      display: flex;
      align-items: center;
      column-gap: 1.3rem;

      &-item {
        strong {
          font-size: 12px;
        }

        p {
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }
}

@media (max-width: 320px) {
  .user {
    justify-content: center;
    text-align: start;
    column-gap: 2rem;
    padding: 12px 16px;
    margin-top: 2rem;

    &__avatar {
      margin-bottom: 1rem;
    }

    &__items {
      display: flex;
      align-items: center;
      column-gap: 1.3rem;

      &-item {
        strong {
          font-size: 12px;
        }

        p {
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>