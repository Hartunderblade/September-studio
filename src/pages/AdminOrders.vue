<script setup>

</script>

<template>
  <div class="admin">
    <h2 class="admin__title">Все заявки</h2>
  </div>

</template>

<style scoped lang="scss">
.admin {
  margin-top: 3.7rem;
  &__title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}

.content {
  width: 100%;
}

.item {
  display: flex;
  div {
    span {
      font-weight: 300;
      font-size: 1rem;
      color: #474747;
    }

    p {
      font-weight: 400;
      font-size: 1.4rem;
    }

    button {
      font-weight: 600;
      font-size: 1rem;
      color: #b21b39;
      background-color: #fff;
      border: 1px solid #b21b39;
      border-radius: 1rem;
      padding: 1rem 2rem;
    }
  }
}
</style>