<script setup>
import { ref } from 'vue';

const props = defineProps( {
  titleTop: String,
  titleBottom: String
})
</script>

<template>
  <div class="title">
    <h2 class="title__second">{{ props.titleTop }}</h2>
    <h2 class="title__first">{{ props.titleBottom }}</h2>
  </div>
</template>

<style scoped lang="scss">
  .title {
    height: 460px;
    max-width: 1530px;
    width: 100%;
    position: relative;

    &__second {
      font-weight: 600;
      font-size: 280px;
      text-transform: uppercase;
    }

    &__first {
      font-weight: 600;
      font-size: 280px;
      text-transform: uppercase;
      position: absolute;
      top: 16rem;
      left: 350px;
    }
  }

  @media (max-width: 780px) {
    .title {
      width: 100%;
      position: initial;
      text-align: center;
      height: 140px;

      &__second {
        font-size: 54px;;
      }

      &__first {
        font-size: 54px;
        position: initial;
        top: 0;
        left: 0;
      }
    }
  }

  @media (max-width: 320px) {
    .title {
      //height: 98px;
      max-width: 223px;
      width: 100%;
      position: initial;
      text-align: center;
      height: 0;

      &__second {
        font-size: 54px;;
      }

      &__first {
        font-size: 54px;
        position: initial;
        top: 0;
        left: 0;
      }
    }
  }
</style>