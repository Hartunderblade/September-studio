<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const cookieAccepted = localStorage.getItem('cookieAccepted')
  if (!cookieAccepted) {
    isVisible.value = true
  }
})

function closeModal() {
  localStorage.setItem('cookieAccepted', 'true')
  isVisible.value = false
}
</script>

<template>
  <div v-if="isVisible" class="cookie-container">
    <h1>Мы используем Cookie!</h1>
    <p>Не пугайтесь, это что бы сайт работал лучше.</p>
    <p style="margin-top: 0.4rem;">Оставаясь с нами, вы соглашаетесь на использование файлов куки.</p>
    <button @click="closeModal">ОК</button>
  </div>
</template>

<style scoped lang="scss">
.cookie-container {
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  background-color: rgba(30, 30, 30, 0.89);
  color: #fff1e1;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 1.4rem;
  z-index: 100;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    background-color: #435adf;
    color: #fff1e1;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.6rem;
    width: 100%;
    margin-top: 2rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

@media (max-width: 320px) {
  .cookie-container {
    bottom: 1rem;
    right: 1rem;
    width: 70%;

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2;
    }

    button {
      font-size: 1.2rem;
    }
  }
}
</style>