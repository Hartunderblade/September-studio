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
      <p class="warning">Обязательные поля для заполнения <br> отмечены звездочкой <span>*</span></p></div>
  </div>
</template>

<style scoped lang="scss">
.text {
  margin-top: 2rem;
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
  span {
    color: #b21b39; font-size: 24px; font-weight: 600;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 376px;
  margin-top: 86px;
}

@media (max-width: 780px) {
  .description {
    font-weight: 400;
    font-size: 18px;
    max-width: 760px;
  }

  .warning {
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    span {
      color: #b21b39; font-size: 24px; font-weight: 600;
    }
  }
}

@media (max-width: 320px) {
  .text {
    margin-top: 2rem;
    text-align: center;
  }

  .title {
    &-top {
      font-size: 22px;
    }

    &-bottom {
      font-size: 22px;
      margin-left: 0;
    }
  }

  .description {
    font-size: 12px;
    max-width: 292px;
    margin-top: 20px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-left: 0;
    margin-top: 0;
  }

  .warning {
    font-size: 8px;
    span {
      font-size: 8px;
    }
  }
}

@media (max-width: 780px) {
  .text {
    margin-top: 2rem;
    text-align: center;
  }

  .title {
    &-top {
      font-size: 2rem;
    }

    &-bottom {
      font-size: 2rem;
      margin-left: 0;
    }
  }

  .description {
    margin-top: 20px;
  }

  .warning {

    margin-top: 0.4rem;

    span {

    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    margin-left: 0;
    margin-top: 0;
  }
}
</style>