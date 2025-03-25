<script setup>
import { ref } from 'vue';

const props = defineProps( {
  titleTop: String,
  titleBottom: String,
  description: String
})

const titleTop = ref(props.titleTop);
const titleBottom = ref(props.titleBottom);
const description = ref(props.description);
</script>

<template>
  <div class="text">
    <div class="title">
      <h3 class="title-top">{{ titleTop }}</h3>
      <h3 class="title-bottom">{{ titleBottom }}</h3>
    </div>
    <div class="content">
      <p class="description">{{ props.description }}</p>
      <p class="warning">Обязательные поля для заполнения <br> отмечены звездочкой <span style="color: #b21b39; font-size: 24px; font-weight: 600">*</span></p></div>
  </div>
</template>

<style scoped lang="scss">
.text {
  margin-top: 96px;
}
.title {
  &-top {
    font-weight: 600;
    font-size: 80px;
    text-transform: uppercase;
  }

  &-bottom {
    font-weight: 600;
    font-size: 80px;
    text-transform: uppercase;
    margin-left: 376px;
  }
}

.description {
  font-weight: 400;
  font-size: 24px;
  max-width: 760px;
}

.warning {
  font-weight: 400;
  font-size: 22px;
  line-height: 162%;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-left: 376px;
  margin-top: 86px;
}
</style>