<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const showButton = ref(false);

function checkPosition() {
  const secondBlock = document.getElementById('projects');
  if (!secondBlock) return;

  const secondBlockTop = secondBlock.getBoundingClientRect().top;
  // Показываем кнопку, если верх второго блока выше вьюпорта (то есть пользователь прокрутил его)
  showButton.value = secondBlockTop < 0;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', checkPosition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkPosition);
});
</script>

<template>
  <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Наверх"
  >
    ↑
    НАВЕРХ
  </button>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 1000;
  background-color: #1b33b2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.scroll-to-top:hover {
  background-color: #16289b;
}
</style>