<script setup>
import { ref } from 'vue';
</script>

<template>
  <button class="add">
    <img src="@/assets/icons/pluse-add-order.svg" alt="Сделать заказ" title="Сделать заказ">
    <p>Сделать заказ</p>
  </button>
</template>

<style scoped lang="scss">
  .add {
    background-color: #fff;
    border: 2px dashed #1b33b2;
    border-radius: 1rem;
    padding: 0 1rem;
    max-width: 360px;
    width: 100%;
    height: 290px;
    cursor: pointer;

    p {
      font-weight: 400;
      font-size: 20px;
      color: #474747;
      margin-top: 1rem;
    }
  }
</style>