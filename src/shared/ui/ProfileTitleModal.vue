<script setup>
import { ref } from 'vue';

const props = defineProps( {
  title: String,
  description: String
})

const title = ref(props.title);
const description = ref(props.description);
</script>

<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ props.description }}</p>
  </div>
</template>

<style scoped lang="scss">
  .title {
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .description {
    margin-top: 0.4rem;
    font-weight: 300;
    font-size: 18px;
    color: #2b2b2b;
    //max-width: 500px;
  }

  @media (max-width: 320px) {
    .title {
      font-size: 22px;
      width: 200px;
    }

    .description {
      display: none;
    }
  }
</style>