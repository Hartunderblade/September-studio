<script setup>
defineProps({
  titleTop: String,
  titleBottom: String
})
</script>

<template>
  <div class="title">
    <h1 class="title__top">{{ titleTop }}}</h1>
    <h1 class="title__bottom">{{ titleBottom }}</h1>
  </div>
</template>

<style scoped lang="scss">

@media (max-width: 780px) {

}

@media (max-width: 320px) {

}
</style>