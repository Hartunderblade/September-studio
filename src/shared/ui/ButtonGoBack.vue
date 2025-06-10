<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <button class="button-main" @click="router.push('/user')"><svg width="70" height="15" viewBox="0 0 70 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 1H-1.66893e-06L23.1356 15" stroke="#1B33B2" />
  </svg>
    Вернуться на главную</button>
</template>

<style lang="scss" scoped>
.button-main {
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: #1b33b2;

  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  margin-top: 96px;
}
</style>
