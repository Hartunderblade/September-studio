<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <button @click="router.push('/admin')">
    Вернуться на главную
    <svg width="70" height="15" viewBox="0 0 70 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H70L46.8644 15" stroke="#1B33B2" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
button {
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: #1b33b2;
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>