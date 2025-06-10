<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div style="display: flex; column-gap: 10rem; margin-top: 11.2rem; margin-left: 20rem;" class="thanks">
    <div class="thanks-left">
      <h2 style="font-weight: 500; font-size: 48px; text-transform: uppercase;">БЛАГОДАРИМ <br> ЗА ЗАЯВКУ</h2>
      <p style="font-weight: 300; font-size: 1.4rem; max-width: 600px;">Мы с вами свяжемся в течение часа в рабочее
        время (пн‑пт 10:00 до 18:00 по МСК).
        Если у вас возникнут какие либо вопросы —
        напишите нам на почту: <a href="#" style="font-weight: 400; text-transform: lowercase; color: #1b33b2;">SEPTEMBER@GMAIL.COM</a></p>
    </div>
    <div style="margin-top: 14.3rem" class="thanks-right">
      <h2 style="font-weight: 500; font-size: 48px; text-transform: uppercase;">посмотрите, чем мы <br> ещё можем быть полезны</h2>
      <button @click="router.push('/user/projects')" style="font-weight: 600; font-size: 18px; text-transform: uppercase; color: #1b33b2; display: flex; align-items: center; column-gap: 1rem; margin-top: 2rem;">наши проекты
        <svg width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H70L46.8644 13" stroke="#1B33B2" />
        </svg>
      </button>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>